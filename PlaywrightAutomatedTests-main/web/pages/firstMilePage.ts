import { Page, Locator, expect } from "@playwright/test";
import { PAYMENT_DATA } from "../../support/types/constants";
import { pageFixture } from "../../support/hooks/pageFixture";

export default class FirstMilePage {
    private page: Page;
    private emailInput: string = "//input[@name='ci_email']";
    private phoneInput: string = "//input[@name='ci_phone']";
    private nameInput: string = "//input[@name='ccname']";
    private numInput: string = "//input[@name='ccnum']";
    private expMonthSelect: string = 'select[name="expmon"]';
    private expYearSelect: string = 'select[name="expyear"]';
    private cvvInput: string = '//input[@name="cvv2" and @class="webpay" and @alt="js_validate_acctnum"]';
    private billAddrInput: string = "//*[@name='ci_billaddr1']";
    private billCityInput: string = '//*[@name="ci_billcity"]';
    private billStateSelect: string = 'select[name="ci_billstate"].webpay';
    private billZipInput: string = "//*[@name='ci_billzip']";
    private formSubmitButton: string = "//input[@id='form_submit']";
    private transactionAcceptedMessage: string = "//h1[@class='webpay' and text()='Transaction Accepted']";
constructor(page: Page) {
    this.page = page;
}

// Method to fill payment details
async fillPaymentDetails() {
    await this.page.locator(this.emailInput).fill(PAYMENT_DATA.email);
    await this.page.locator(this.phoneInput).fill(PAYMENT_DATA.phone);
    await this.page.locator(this.nameInput).fill(PAYMENT_DATA.cardholderName);
    await this.page.locator(this.numInput).fill(PAYMENT_DATA.cardNumber);
    await this.page.selectOption(this.expMonthSelect, { value: PAYMENT_DATA.expirationMonth });
    await this.page.selectOption(this.expYearSelect, { value: PAYMENT_DATA.expirationYear });
    await this.page.locator(this.cvvInput).fill(PAYMENT_DATA.cvv);
}

// Method to fill billing address details
async fillBillingAddress(){
    await this.page.locator(this.billAddrInput).fill(PAYMENT_DATA.billingAddress);
    await this.page.locator(this.billCityInput).fill(PAYMENT_DATA.billingCity);
    await this.page.selectOption(this.billStateSelect, { value: PAYMENT_DATA.billingState });
    await this.page.locator(this.billZipInput).fill(PAYMENT_DATA.billingZip);
    await this.page.locator(this.cvvInput).fill(PAYMENT_DATA.cvv);
}

// Method to submit the payment form
async submitPaymentForm() {
    await this.page.locator(this.formSubmitButton).click();
     await this.page.locator(this.formSubmitButton).waitFor({
         state: 'detached',
         timeout: 15000
     });

}

// Method to wait for and verify the 'Transaction Accepted' message
async verifyTransactionAccepted() {
    await this.page.waitForSelector(this.transactionAcceptedMessage, { state: "visible" });
}
}




