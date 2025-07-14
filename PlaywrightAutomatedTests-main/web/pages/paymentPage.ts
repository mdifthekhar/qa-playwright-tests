import { Page, Locator, expect } from "@playwright/test";
import { pageFixture } from "../../support/hooks/pageFixture";
import { Console } from "console";
import commonMethods, * as CommonMethods from '../commonMethods';

let page: Page;
const tireResultText = "Total Results";

export default class PaymentPage {
  page: any;
  getTotalPrice: Locator;
  reviewPurchaseButton: Locator;
  affirmRadioButton: Locator;
  pageheader: Locator;
  paymentTotal: Locator;
  billingInformation: Locator;
  nextButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getTotalPrice = pageFixture.page.locator("(//span[text()='Get total price'])[1]");
    this.reviewPurchaseButton = pageFixture.page.locator('//span[text()="Review Purchase"]');
    this.affirmRadioButton = pageFixture.page.locator("//*[@class='label--radio' and @for='affirmPayment']");
    //this.pageheader = pageFixture.page.locator("//*[@class='payments-form__subtitle']");
    this.pageheader = pageFixture.page.locator("//*[@class='payments-form__subtitle']");
    this.paymentTotal = pageFixture.page.locator("//div[@class='payments-form__total']");
    this.affirmRadioButton = pageFixture.page.locator("//*[@class='label--radio' and @for='affirmPayment']");
    this.billingInformation = pageFixture.page.locator("//h3[text()='Billing information']");
    this.nextButton = pageFixture.page.locator(CommonMethods.getDynamicXPath('class','payment__form-submit-cta button button--primary'));
  }

  async fillCreditCardForm(
    cardNumber: string,
    month: string,
    year: string,
    cvv: string
  ) {
    await this.page.fill('input[name="creditCard"]', cardNumber);
    await this.page.selectOption('select[name="month"]', { value: month });
    await this.page.selectOption('select[name="year"]', { value: year });
    await this.page.fill('[name="securityCode"]', cvv);
  }

    async fillBillingInformation(firstName: string, lastName: string, streetAddress: string, city: string, state: string, zipCode: string) {
        await this.page.fill('input[name="billingFirstName"]', firstName);
        await this.page.fill('input[name="billingLastName"]', lastName);
        await this.page.fill('input[name="address"]', streetAddress);
        await this.page.fill('input[name="city"]', city);
        await this.page.waitForSelector('//span[text()="Next"]',{visible:true});
        await this.page.selectOption('select[name="state"]', { value: state });
        await this.page.fill('input[name="zipCode"]', zipCode);
        await pageFixture.page.waitForTimeout(10000);
    }

    async clickReviewPurchaseButton() {
        await this.reviewPurchaseButton.click();
    } 

    async clickNextButton() {
      await pageFixture.page.waitForTimeout(3000);
      await this.nextButton.click();
    }

    async clickAffirmRadioButton() {
        try {
            await expect(this.affirmRadioButton).toBeVisible();
            await expect(this.affirmRadioButton).toBeEnabled();
            await this.affirmRadioButton.click();
            await pageFixture.page.waitForTimeout(3000);
        } catch (error) {
            console.error('Error clicking the affirm radio button:', error);
        }
        await expect(this.billingInformation).toBeTruthy();
    }


  async verifyPaymentNavigation() {
    let expTitile: string = "Payment Details",
      actual_title: string;
    await pageFixture.page.waitForTimeout(4000);
    actual_title = await this.pageheader.innerText();
    expect(actual_title.toLowerCase()).toBe(expTitile.toLowerCase());
  }
  async getTotalAmount(): Promise<string> {
    let totalamt: string;
    totalamt = await this.paymentTotal.innerText();
    console.log("payment total in payments page is :" + totalamt);
    return totalamt;
  }
}
