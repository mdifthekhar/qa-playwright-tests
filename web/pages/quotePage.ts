import { Page, Locator, expect } from "@playwright/test";
import { pageFixture } from "../../support/hooks/pageFixture";
import exp = require("constants");
import { couponCode, emailId } from "../../support/types/constants";
import { Console } from "console";
import PaymentPage from "./paymentPage";
import commonMethods, * as CommonMethods from '../commonMethods';

let page: Page;
let paymentPage: PaymentPage;
//let commonMethods: CommonMethods;

export default class QuotePage {
  page: any;
  tireProtectionPlanYes: Locator;
  scheduleNowButton: Locator;
  tireProtectionPlanNo: Locator;
  selectAllTires: Locator;
  productPrice: Locator;
  quantityOnQuotePage: Locator;
  tireQuantityOne: Locator;
  tireQuantityTwo: Locator;
  tireQuantityThree: Locator;
  tireQuantityFour: Locator;
  tireQuantityFive: Locator;
  tireQuantitySix: Locator;
  payNowButton: Locator;
  couponCodetextBox: Locator;
  applyButton:Locator;
  applybtnDisabled: Locator;
  scheduleAndPayButton: Locator;
  headerQuotePage: Locator;
  vehicleAlignmentUnitPrice: Locator;
  quotePriceAfterRebase: Locator;
  addPlanOnQuotePage: Locator;
  removeButton: Locator;
  issueItem: Locator;
  alignmentProtectionPlan: Locator;
  salesTax: Locator;
  subTotal: Locator;

  VerifywithId: Locator;
  pageheader1: Locator;
  pageeader2: Locator;
  priceperTire: Locator;
  PriceperrearTire:Locator;
  Qty: Locator;
  QtyRearTire:Locator;
  loctotalPrice: Locator;
  locReartireTotalPrice : Locator;
  locTPPperTire: Locator;
  loctotalTPP: Locator;
  rearlocTPPperTire: Locator;
  rearloctotalTPP: Locator;
  loctotaTPPradiobtn: Locator;
  locTireInstallpackamt: Locator;
  locilionsTire: Locator;
  locillionsTireFeeamt: Locator;
  locSubTotal: Locator;
  locSalestax: Locator;
  locTotaldue: Locator;
  locRebate: Locator;
  locRebatewithFin: Locator;
  locPricesafterRebate: Locator;
  strTotaldue: string;
  pertire: string;
  perreartire: string;
  strtotalPrice: string;
  strReartotalprice:string;
  strTPPpertire: string;
  strRearTPPpertire: string;
  strTotalTPPamt: string;
 strtireinstall: string;
 illiontireamtstr: string;
 strsubtotal: string;
 strsalestax: string;
coupon_savings_strt : string;
cuponsavaings_amt_xpath: string;
frontTireTppYes:Locator;
frontTireTPPNo:Locator;
rearTireTPPYes:Locator;
rearTireTPPNo:Locator;
tPPNo:Locator;

  totalDue: Locator;
  mobilePayNowButton: Locator;
  //Get a quote page
  getAQuotePage: Locator;
  productTotalPriceValue: Locator;
  hubRingSetServicePrice: Locator;
  lugKitChromeUnitPrice: Locator;
  wheelInstallationPackage: Locator;
  subTotalValue: Locator;
  salesTaxValue: Locator;
  totalDueInStore: Locator;
  emailQuoteButton: Locator;
  emailAddress: Locator;
  submitButton: Locator;
  emailModalPopup: Locator;
  yourQuoteMessage: Locator;
  closeButton: Locator;
  instantSavingOffer: Locator;
  instantSavingValue: any;
  actTotalprice: number;
  strrearTotalTPPamt: string;
  qtyDropDown: Locator;
  rearQtyDropDown: Locator;


  constructor(page: Page) {
    this.page = page;
   // coupon_savings_strt : string;
    paymentPage = new PaymentPage(pageFixture.page);
    this.tireProtectionPlanYes = pageFixture.page.locator(
      "//input[@id='SERVICE_95055']"
    );
    this.scheduleNowButton = pageFixture.page
      .locator("(//*[@class='link-button'])[1]");
    this.tireProtectionPlanNo = pageFixture.page.locator(
      "//label[contains(text(), 'No')]"
    );
    this.selectAllTires = pageFixture.page.locator(
      "//label[text()='Select all four tires']"
    );
    this.productPrice = pageFixture.page.locator(
      "((((//input[@id='op-payment-type']/parent::div/div)[1]/div)[2]/div/div)[3]/span)[2]"
    );
    this.quantityOnQuotePage = pageFixture.page.locator(
      "//button[@type = 'button']"
    );
    this.tireQuantityOne = pageFixture.page.locator("//li[@title='1']");
    this.tireQuantityTwo = pageFixture.page.locator("//li[@title='2']");
    this.tireQuantityThree = pageFixture.page.locator("//li[@title='3']");
    this.tireQuantityFour = pageFixture.page.locator("//li[@title='4']");
    this.tireQuantityFive = pageFixture.page.locator("//li[@title='5']");
    this.tireQuantitySix = pageFixture.page.locator("//li[@title='6']");
    this.payNowButton = pageFixture.page.locator(
      "(//span[text()='Pay now'])[2]"
    );
     this.mobilePayNowButton = pageFixture.page.locator("//*[@class='link-button']//span[text()='Pay now']");
    this.scheduleAndPayButton = pageFixture.page.locator(
      "//*[text()='Schedule & pay']"
    );
    this.headerQuotePage = pageFixture.page.locator(
      ".appointment-masthead__headline",
      { hasText: "Quote" }
    );
    this.vehicleAlignmentUnitPrice = pageFixture.page
      .locator(".quote-services__unit-price")
      .first();
    this.alignmentProtectionPlan = pageFixture.page
      .locator(".quote-services__unit-price")
      .last();
    this.quotePriceAfterRebase = pageFixture.page.locator(
      ".quote__pricing-after-rebase-value"
    );
    this.addPlanOnQuotePage = pageFixture.page.locator(
      "//button[@class='button button--primary quote-services__button-optional']"
    );
    this.removeButton = pageFixture.page.locator(
      "//*[@class='button button--primary quote-services__button-optional']/span[text()='Remove']"
    );
    this.issueItem = pageFixture.page.locator(
      "//*[@class='vvi-quote__issues-item']"
    );
    this.subTotal = pageFixture.page
      .locator(".quote-pricing-tires__value")
      .first();
    this.salesTax = pageFixture.page
      .locator(".quote-pricing-tires__value")
      .last();
    this.couponCodetextBox = pageFixture.page.locator(
      "//input[contains(@class,'coupon-form-input')]"
    );
    this.applybtnDisabled = pageFixture.page.locator(
      "//button[contains(@class,'button-apply')]"
    );

    this.VerifywithId = pageFixture.page.locator(
      "//img[@alt='Verify with ID.me']"
    );

    this.pageheader1 = pageFixture.page.locator(
      "//h1[@class='appointment-masthead__headline']"
    );

    this.pageeader2 = pageFixture.page.locator(
      "//h2[@class='appointment-masthead__subheadline']"
    );
    this.priceperTire = pageFixture.page.locator("(//span[@class='quote__product-price-value'])[1]");
    this.PriceperrearTire = pageFixture.page.locator(CommonMethods.getDynamicXPath('spanwithclass[2]','quote__product-price-value'));
    this.Qty = pageFixture.page.locator("(//button[@class='dropdown dropdown--secondary narrow small ']/span)[1]");
    this.QtyRearTire = pageFixture.page.locator("(//button[@class='dropdown dropdown--secondary narrow small ']/span)[2]");
    this.loctotalPrice = pageFixture.page.locator("(//span[@class='quote__product-total-price-value'])[1]");
    this.locReartireTotalPrice = pageFixture.page.locator(CommonMethods.getDynamicXPath('spanwithclass[2]','quote__product-total-price-value'));
    this.locTPPperTire = pageFixture.page.locator("(//div[contains(@class,'quote-services__unit-price')])[4]");
    this.loctotalTPP = pageFixture.page.locator("(//div[contains(@class,'quote-services__unit-price')])[5]");
    this.rearlocTPPperTire = pageFixture.page.locator("(//div[contains(@class,'quote-services__unit-price')])[6]");
    this.rearloctotalTPP = pageFixture.page.locator("(//div[contains(@class,'quote-services__unit-price')])[7]");
    this.loctotaTPPradiobtn = pageFixture.page.locator("//label[contains(text(), 'Yes')]/span");
    this.locTireInstallpackamt = pageFixture.page.locator("(//span[text()='Tire Installation Package']/following::div[@class='quote-services__unit-price'])[1]");
    this.locilionsTire = pageFixture.page.locator("//span[text()='Illinois Tire Fee']");
    this.locillionsTireFeeamt = pageFixture.page.locator("(//span[text()='Illinois Tire Fee']/following::div[@class='quote-services__unit-price'])[1]");
    this.locSubTotal = pageFixture.page.locator("//div[text()='Subtotal']/following-sibling::div");
    this.locSalestax = pageFixture.page.locator("//div[text()='Sales tax for: IL']/following-sibling::div");
    this.locTotaldue = pageFixture.page.locator("//div[contains(text(),'Total due')]/following-sibling::div");
    this.locRebate = pageFixture.page.locator("(//div[contains(text(),'Rebate from Belle Tire')])[1]/following-sibling::div");
    this.locRebatewithFin = pageFixture.page.locator("//div[contains(text(),' Rebate from Belle Tire with Financing')]/following-sibling::div");
    this.locPricesafterRebate = pageFixture.page.locator("//div[text()='Price After Rebates']/following-sibling::div[@class='quote__pricing-after-rebates-value']");
    this.totalDue = pageFixture.page.locator("//div[@class='quote__pricing-after-rebase']//div[@class='quote__pricing-after-rebase-value']");
    this.cuponsavaings_amt_xpath = CommonMethods.getDynamicXPath('textwithfollowingsibiling','Coupon savings' );
    //let yesforTPP = CommonMethods.getDynamicXPath('id','FRONT_95055');
    this.frontTireTppYes = pageFixture.page.locator(CommonMethods.getDynamicXPath('id','FRONT_95055'));
    //let noforfrontTPP = CommonMethods.getDynamicXPath('id','FRONT_95055-no');
    this.frontTireTPPNo = pageFixture.page.locator(CommonMethods.getDynamicXPath('label','FRONT_95055-no'));
   // let yesforRearTire = CommonMethods.getDynamicXPath('id','REAR_95055');
    this.rearTireTPPYes = pageFixture.page.locator(CommonMethods.getDynamicXPath('id','REAR_95055'));
    this.rearTireTPPNo = pageFixture.page.locator(CommonMethods.getDynamicXPath('label','REAR_95055-no'));
    this.tPPNo = pageFixture.page.locator(CommonMethods.getDynamicXPath('radioButton','No'));
    this.qtyDropDown = pageFixture.page.locator(CommonMethods.getDynamicXPath('buttonwitharialabelledby','exp_front_button'));
    this.rearQtyDropDown = pageFixture.page.locator(CommonMethods.getDynamicXPath('buttonwitharialabelledby','exp_rear_button'));


     this.getAQuotePage= pageFixture.page.locator(".appointment-masthead__headline", {hasText:'Get a Quote'});
        this.productTotalPriceValue = pageFixture.page.locator("//div[@class='quote__product-total-price']/span[@class='quote__product-total-price-value']");
        this.hubRingSetServicePrice = pageFixture.page.locator("(//div[@class='quote-services__unit-price'])[1]");
        this.lugKitChromeUnitPrice = pageFixture.page.locator("(//div[@class='quote-services__unit-price'])[2]");
        this.wheelInstallationPackage = pageFixture.page.locator("(//div[@class='quote-services__unit-price'])[3]");
        this.subTotalValue = pageFixture.page.locator("(//div[@class='quote-pricing-tires__value'])[1]");
        this.salesTaxValue = pageFixture.page.locator("(//div[@class='quote-pricing-tires__value'])[2]");
        this.totalDueInStore = pageFixture.page.locator("(//div[@class='quote-pricing-tires__value-total'])");
        this.emailQuoteButton = pageFixture.page.locator("//*[text()='Email quote']");
        this.emailAddress = pageFixture.page.locator("//input[@name='email']");
        this.submitButton = pageFixture.page.locator("//*[text()='Submit']");
        this.emailModalPopup = pageFixture.page.locator("//div[@class='email-modal__outer-wrapper']");
        this.yourQuoteMessage = pageFixture.page.locator("//*[text()='Your quote is on the way!']");
        this.closeButton = pageFixture.page.locator("//*[text()='Close']");
        this.instantSavingValue = pageFixture.page.locator("//div[@class='quote-services__item']//div[@class='quote-services__pricing']//div[@class='quote-services__unit-price red']");
  }

  async VerifyYesForTPP() {
    expect(await this.tireProtectionPlanYes.isChecked).toBeTruthy();
  }

  async selectTPP(value:string){
    
    if(value.toLowerCase().includes("Front".toLowerCase())&&value.toLowerCase().includes("Rear".toLowerCase()))
    {
        //console.log("Entered into front tire condition");
        //console.log("Xpath"+this.frontTireTppYes);
        if(value.toLocaleLowerCase().includes("Front Yes".toLowerCase()))
        {
          expect(await this.frontTireTppYes.isChecked).toBeTruthy();
        }
        else
        {   
          await pageFixture.page.waitForTimeout(3000);
          await this.frontTireTPPNo.scrollIntoViewIfNeeded();
          //await this.frontTireTPPNo.check();
          await this.frontTireTPPNo.click({ force: true });
          console.log("selected NO");
          expect(await this.frontTireTPPNo.isChecked).toBeTruthy();
        }
        if(value.toLowerCase().includes("Rear Yes".toLowerCase()))
        {
          expect(await this.rearTireTPPYes.isChecked).toBeTruthy();
        }
        else
        {
          await pageFixture.page.waitForTimeout(3000);
          await this.rearTireTPPNo.scrollIntoViewIfNeeded();
          await this.rearTireTPPNo.click({ force: true });
          expect(await this.rearTireTPPNo.isChecked).toBeTruthy();
        }       
        //console.log("Both the tires TPP is selcted as yes")
    }
    const dynamicXPath = CommonMethods.getDynamicXPath('radioButton',value );
    //console.log("xpath :" +dynamicXPath);
    if(value.toLowerCase()=="yes".toLowerCase())
    {
      expect(await this.tireProtectionPlanYes.isChecked).toBeTruthy();
    }
    if(value.toLowerCase()=="No".toLowerCase())
    {
      await this.tPPNo.click();
      expect(await this.tPPNo.isChecked).toBeTruthy();
      console.log("Selected the TPP as No");
    }
    
  }

  async clickAndVerifyTPPPlanNo() {
    await this.tireProtectionPlanNo.click();
    expect(await this.tireProtectionPlanNo.isChecked).toBeTruthy();
  }

  async clickQuantityOnQuotePage() {
    await this.quantityOnQuotePage.click();
  }

  async clickScheduleNowButton() {
    await this.scheduleNowButton.click();
  }

  async clickPayNowButton() {
     if (await this.mobilePayNowButton.isVisible()){
            await this.mobilePayNowButton.click();
        } else {
    await this.payNowButton.click();
        }
    //console.log("clicked on Paynow button");
  }

  async clickScheduleAndPayButton() {
    await this.scheduleAndPayButton.click();
  }

  async clickTireQuantityOne() {
    await this.tireQuantityOne.click();
  }

  async clickTireQuantityTwo() {
    await this.tireQuantityTwo.click();
  }

  async clickTireQuantityThree() {
    await this.tireQuantityTwo.click();
  }

  async clickTireQuantityFour() {
    await this.tireQuantityTwo.click();
  }

  async clickTireQuantityFive() {
    await this.tireQuantityFive.click();
  }

  async getProductPrice(page: any): Promise<number> {
    const productPriceText = await page.textContent(this.productPrice);
    return parseInt(productPriceText);
  }
 async verifyApplyingCoupon() {
        await this.couponCodetextBox.isVisible();
        await this.couponCodetextBox.fill(couponCode);
        await this.applyButton.isEnabled();
        await this.applyButton.click();
    } 
    async verifyTextboxDisabled() {
        await this.applyButton.isDisabled();
    }  
     async verifyTextboxPresent() {
    await this.couponCodetextBox.isVisible();
  }
 async verifyHeaderQuotePage(){
        await this.headerQuotePage.isDisabled();
    }
    async verifyGetAQuotePage() {
        await this.getAQuotePage.isVisible();
    }

  // Retrieves and parses the product total price
  async getProductTotalPrice() {
    const productPrice = await this.productTotalPriceValue.textContent();
    return parseFloat(productPrice?.replace('$', '').trim() || '0');
  }

  // Retrieves and parses the Hub Ring Set Service Price
  async getHubRingSetServicePrice(){
    const hubRingSetPrice = await this.hubRingSetServicePrice.textContent();
    return parseFloat(hubRingSetPrice?.replace('$', '').trim() || '0');
  }

  // Retrieves and parses the Lug Kit Chrome Unit Price
  async getLugKitChromeUnitPrice() {
    const lugKitChromePrice = await this.lugKitChromeUnitPrice.textContent();
    return parseFloat(lugKitChromePrice?.replace('$', '').trim() || '0');
  }

  // Retrieves and parses the Wheel Installation Package price
  async getWheelInstallationPackagePrice() {
    const wheelInstallationPackagePrice = await this.wheelInstallationPackage.textContent();
    return parseFloat(wheelInstallationPackagePrice?.replace('$', '').trim() || '0');
  }
  
  async getInstantSavingValue() {
    let instantSavingOffer: number = 0;

    try {
        const instantSavingText = await this.instantSavingValue?.textContent();

        // Only parse the value if text is present
        if (instantSavingText?.trim()) {
            instantSavingOffer = parseFloat(instantSavingText.replace('$', '').trim());
        }
    } catch (error) {
      
    }

    return instantSavingOffer;
}

  // Retrieves and parses the Subtotal Value
  async getSubtotalValue() {
    const subTotalPrice = await this.subTotalValue.textContent();
    return parseFloat(subTotalPrice?.replace('$', '').trim() || '0');
  }

  // Retrieves and parses the Sales Tax Value
  async getSalesTaxValue() {
    const salesTax = await this.salesTaxValue.textContent();
    return parseFloat(salesTax?.replace('$', '').trim() || '0');
  }

  // Retrieves and parses the Due in Store Total Price
  async getDueInStoreTotal(){
    const dueInStore = await this.totalDueInStore.textContent();
    return parseFloat(dueInStore?.replace('$', '').trim() || '0');
  }

  // Clicks on the "Email quote" button
  async clickEmailQuote() {
    await this.emailQuoteButton.click();
  }

  // Verifies that the Email Modal is visible
  async verifyEmailModalVisibility() {
    await this.emailModalPopup.isVisible();
  }

  // Fills the email input and submits the form
  async fillEmailAndSubmit(){
    await this.emailAddress.fill(emailId);
    await this.submitButton.click();
  }

  async verifyQuoteSent() {
    await this.yourQuoteMessage.isVisible();
    
  }

  // Closes the email modal
  async closeEmailModal() {
    await this.closeButton.click();
  }

async verifyUnitPriceAndTotalPriceWithoutPlan() {

    // Get the unit price, subtotal, sales tax, and total due text content
    const unitPriceText = await this.vehicleAlignmentUnitPrice.textContent();
    const subTotalText = await this.subTotal.textContent();
    const salesTaxText = await this.salesTax.textContent();
    const totalDueText = await this.totalDue.textContent();

    // Extract the numeric values from the text content (removing "$" and trimming any extra spaces)
    const unitPrice = parseFloat(unitPriceText.replace('$', '').trim());
    const subTotal = parseFloat(subTotalText.replace('$', '').trim());
    const salesTax = parseFloat(salesTaxText.replace('$', '').trim());
    const totalDue = parseFloat(totalDueText.replace('$', '').trim());

    // Perform the calculation for total due
    const calculatedTotal = subTotal + salesTax;

    // Log the calculated total and the actual total due for debugging purposes
    console.log(`Calculated Total: $${calculatedTotal}`);
    console.log(`Actual Total Due: $${totalDue}`);

    // Compare the unit price with the subtotal
    if (Math.abs(unitPrice - subTotal) < 0.01) {
        console.log('Unit Price and Subtotal match.');
    } else {
        throw new Error(`Unit Price ($${unitPrice}) does not match Subtotal ($${subTotal}).`);
    }

    // Compare the calculated total with the total due
    if (Math.abs(calculatedTotal - totalDue) < 0.01) {
        console.log('Total Due is correct.');
    } else {
        throw new Error(`Calculated Total ($${calculatedTotal}) does not match Total Due ($${totalDue}).`);
    }
}

async verifyUnitPriceAndTotalPriceWithPlan() {
    await this.addPlanOnQuotePage.click();
    await expect(this.removeButton).toBeVisible();
    // Get text content of all the relevant elements
    const vehicleAlignmentUnitPriceText = await this.vehicleAlignmentUnitPrice.textContent();
    const alignmentProtectionPlanText = await this.alignmentProtectionPlan.textContent();
    const subTotalText = await this.subTotal.textContent();
    const salesTaxText = await this.salesTax.textContent();
    const totalDueText = await this.totalDue.textContent();

    // Parse the text content to get numeric values
    const vehicleAlignmentUnitPrice = parseFloat(vehicleAlignmentUnitPriceText.replace('$', '').trim());
    const alignmentProtectionPlan = parseFloat(alignmentProtectionPlanText.replace('$', '').trim());
    const subTotal = parseFloat(subTotalText.replace('$', '').trim());
    const salesTax = parseFloat(salesTaxText.replace('$', '').trim());
    const totalDue = parseFloat(totalDueText.replace('$', '').trim());

    // Calculate the expected subtotal and total
    const expectedSubTotal = vehicleAlignmentUnitPrice + alignmentProtectionPlan;
    const expectedTotal = subTotal + salesTax;

    // Compare the calculated subtotal with the sum of unit price and alignment protection plan
    if (Math.abs(expectedSubTotal - subTotal) < 0.01) {
        console.log("Subtotal matches with unit price and alignment protection plan.");
    } else {
        throw new Error(`Subtotal calculation mismatch: Expected $${expectedSubTotal}, but got $${subTotal}`);
    }

    // Compare the calculated total with the totalDue
    if (Math.abs(expectedTotal - totalDue) < 0.01) {
        console.log("Total calculation is correct.");
    } else {
        throw new Error(`Total calculation mismatch: Expected $${expectedTotal}, but got $${totalDue}`);
    }

    }
  async verifyMilitaryDiscountID() {
    await expect(this.VerifywithId).toBeVisible();
  }

  async verifyQuotePageNavigation() {
    let header1: string, header2: string, actualpage: string;
    await pageFixture.page.waitForTimeout(3000);
    header1 = await this.pageheader1.innerText();
    //console.log("header1 :" + header1);
    header2 = await this.pageeader2.innerText();
    //console.log("header2 : " + header2);
    actualpage = header1.concat(header2.toString());
    console.log("Actual Page is : " + actualpage);
    //expect(actualpage).toContain("QuoteTIRES");
  }

  async totalPrice(
    with_tireprotection: string,
    with_cuponcode: string,
    with_militarydiscount: string
  ) {
    let tireQty: number,
      rearTireQty: number,
      strTireQty: string,
      strReartireQty: string,
      expproducttotPrice: number,
      expRearTireproductprice: number,
      tppReturned: number = 0,
      rearTPPreturned:number=0,
      tireinstallpackgeReturned: number,
      illiontireamtstr: String,
      illiontireamountint: number = 0,
      expsubTotal: number,
      
      actsubTotal: number,
      
      salestaxint: number,
      exptotaldue: number,
      actTotaldue: number,
      strrebate: string,
      rebateInt: number,
      strRebatewithfin: string,
      rebatewithfinInt: number,
      strpriafterRebate: string,
      act_pricesafterRebate: number,
      exp_priceafterRebate: number,
      count: number,
      coupn_discamountint: number = 0;
      //const actTotalprice: number=0;

    if(with_tireprotection.toLowerCase().includes("Front".toLowerCase())&&with_tireprotection.toLowerCase().includes("Rear".toLowerCase()))
      {
        this.pertire = await this.priceperTire.innerHTML();
        const intperTire = Number(this.pertire.trim());
        strTireQty = await this.Qty.innerText();
        tireQty = parseInt(strTireQty.trim(), 5);
        this.strtotalPrice = await this.loctotalPrice.innerText();
        const actTotalpricefront = Number(this.strtotalPrice.trim());
        expproducttotPrice = intperTire * tireQty;
        expect(expproducttotPrice).toEqual(actTotalpricefront);
        this.perreartire = await this.PriceperrearTire.innerHTML();
        const intperRearTire = Number(this.perreartire.trim());
        strReartireQty = await this.QtyRearTire.innerText();
        rearTireQty = parseInt(strReartireQty.trim(), 5);
        this.strReartotalprice = await this.locReartireTotalPrice.innerText();
        const actRearTireTotalPrice = Number(this.strReartotalprice.trim());
        expRearTireproductprice = intperRearTire * rearTireQty;
        expect(expRearTireproductprice).toEqual(actRearTireTotalPrice);
        this.actTotalprice = actTotalpricefront+expRearTireproductprice;
      }  
      else{
        this.pertire = await this.priceperTire.innerHTML();
        const intperTire = Number(this.pertire.trim());
        //console.log("Converted integer is :" + intperTire);
        strTireQty = await this.Qty.innerText();
        tireQty = parseInt(strTireQty.trim(), 5);
        console.log("Selected tire quanitity converted to int  : " + tireQty);
        this.strtotalPrice = await this.loctotalPrice.innerText();
        this.actTotalprice = Number(this.strtotalPrice.trim());
        //console.log("Total Price : Pertire * qty = " + actTotalprice);
        expproducttotPrice = intperTire * tireQty;
        if (this.actTotalprice == expproducttotPrice) {
          console.log("Actual Total price and expected price are matched");
        }

      }
     console.log("Value of with_tireprotection:", with_tireprotection);
    if ((with_tireprotection.trim().toLowerCase() == "yes".toLowerCase())||(with_tireprotection.split(" and ")[0].toLowerCase().includes("Front Yes".toLowerCase()))) {
      tppReturned = await this.getTireprotectplantotal(tireQty);
      this.strTotalTPPamt = await this.loctotalTPP.innerText();
     const totalTppint = parseFloat(this.strTotalTPPamt.split(" ")[0].replace("$", ""));
     //console.log("TPP return: "+tppReturned);
     //console.log("Total Price: "+totalTppint);
     expect(tppReturned).toEqual(totalTppint);
    }
    if(with_tireprotection.trim().toLowerCase().includes(" and ")){
    if(with_tireprotection.split(" and ")[1].toLowerCase().includes("Rear Yes".toLowerCase()))
      {
        this.strRearTPPpertire = await this.rearlocTPPperTire.innerText();
        //console.log("TPP per tire :" + this.strTPPpertire);
        let price = parseFloat(this.strRearTPPpertire.split(" ")[0].replace("$", ""));
        rearTPPreturned = rearTireQty * price;
        this.strrearTotalTPPamt = await this.rearloctotalTPP.innerText();
     const reartotalTppint = parseFloat(this.strrearTotalTPPamt.split(" ")[0].replace("$", ""));
     expect(rearTPPreturned).toEqual(reartotalTppint);
      }
    }
    console.log("The tpp amount recived: " + tppReturned);
    tireinstallpackgeReturned = await this.getTireinstallationPackAmt();
    if (await this.locilionsTire.isVisible) {
      //console.log("Illinois Tire Fee section is available");
      illiontireamountint = await this.getIllinoisTireFeeAmt();
    }
    if ((with_cuponcode.toLowerCase()).includes ("yes".toLowerCase())) {
      let enter_cupon_xpath,cupon_apply_xpath,cupon_discountamt_xpath,coupon_disc_amt:number , disc_text:string = "",coupon_disc_amt_text:string;
      let round_coupon_disc_amt:any;
      enter_cupon_xpath = CommonMethods.getDynamicXPath('input','form__field-control  coupon-form-input' );
      //console.log("xpath :" +dynamicXPath);
      const coupon_no = with_cuponcode.replace(/\D/g, "");
      //console.log("cupon code "+coupon_no)
      pageFixture.page.locator(enter_cupon_xpath).fill(coupon_no);
      await pageFixture.page.waitForTimeout(4000);
      cupon_apply_xpath = CommonMethods.getDynamicXPath('buttonwithclass','button button--primary coupon-form-button-apply');
      await pageFixture.page.locator(cupon_apply_xpath).click();
      await pageFixture.page.waitForTimeout(4000);
      cupon_discountamt_xpath = CommonMethods.getDynamicXPath('textwithfollowingsibiling','Coupon applied');
      disc_text = await pageFixture.page.locator(cupon_discountamt_xpath).innerText();
      //console.log("discount text :"+disc_text) ;
      if(disc_text.includes("%"))
      {
      const discount = parseInt(disc_text.replace(/\D/g, ''), 10);
      //console.log(discount); // Output: 5
      const discountPercentage: number = discount / 100;
     // console.log("discount Percentage : " +discountPercentage);
      coupon_disc_amt = (tireinstallpackgeReturned * discountPercentage)+ (this.actTotalprice * discountPercentage);
      //coupon_disc_amt = (tireinstallpackgeReturned * 0.05)+ (actTotalprice * 0.05);
       round_coupon_disc_amt = Math.round(coupon_disc_amt*100)/100 ;
      //console.log("coupon discount amount: " +round_coupon_disc_amt);
      }
      else{
        coupon_disc_amt_text = await pageFixture.page.locator(CommonMethods.getDynamicXPath('textwithfollowingsibiling','Coupons')).innerText();
        //console.log("coupn_disc_amount :"+coupon_disc_amt_text);
        round_coupon_disc_amt = parseFloat(coupon_disc_amt_text.replace(/[^0-9.-]/g, ''));
        //console.log("coupon discount amount: " +round_coupon_disc_amt);
      }
      
      this.cuponsavaings_amt_xpath = CommonMethods.getDynamicXPath('textwithfollowingsibiling','Coupon savings' );
      //console.log("xpath :" +this.cuponsavaings_amt_xpath);
      this.coupon_savings_strt= await pageFixture.page.locator(this.cuponsavaings_amt_xpath).innerText();
      coupn_discamountint = parseFloat(this.coupon_savings_strt.replace(/[^0-9.-]/g, ''));
      //coupn_discamountint = num.toFixed(2)
      //console.log("converted string :" +coupn_discamountint);
      expect(coupn_discamountint.toString()).toContain(round_coupon_disc_amt.toString());

    }
    //console.log(this.actTotalprice);
    //console.log(tppReturned);
    //console.log(rearTPPreturned);
    console.log("Tire Installation package:"+tireinstallpackgeReturned);
    //console.log(illiontireamountint);
   // expsubTotal =expproducttotPrice +tppReturned+rearTPPreturned+tireinstallpackgeReturned +illiontireamountint;
   expsubTotal =this.actTotalprice +tppReturned+rearTPPreturned+tireinstallpackgeReturned +illiontireamountint;
    console.log("Expected sub total : " + expsubTotal);
    this.strsubtotal = await this.locSubTotal.innerText();
    actsubTotal = parseFloat(this.strsubtotal.split(" ")[0].replace("$", ""));
    console.log("Actual subtotal :" + actsubTotal);
    expect(actsubTotal).toBe(expsubTotal);
    this.strsalestax = await this.locSalestax.innerText();
    salestaxint = parseFloat(this.strsalestax.split(" ")[0].replace("$", ""));
    console.log("SalesTaxAmount: "+ salestaxint);
    exptotaldue = expsubTotal + salestaxint + coupn_discamountint;
    const exptotaldue_quote = parseFloat(exptotaldue.toFixed(2));
    console.log("Expected total due in store :" + exptotaldue_quote);
    this.strTotaldue = await this.locTotaldue.innerText();
    actTotaldue = parseFloat(this.strTotaldue.split(" ")[0].replace("$", ""));
    console.log("Total due in quote page :" + actTotaldue);
    expect(exptotaldue_quote).toBe(actTotaldue);
    console.log("Actual and expected total due are matched");
    try {
      const elementVisible = await this.locRebate
        .waitFor({ state: "visible", timeout: 3000 })
        .then(() => true)
        .catch(() => false);
      if (elementVisible) {
        count = 1;
      } else {
        count = 0;
      }
    } catch (error) {
      count = 0;
    }
    if (count > 0) {
      strrebate = await this.locRebate.innerText();
      console.log("Rebate amount in UI :" + strrebate);
      rebateInt = Math.abs(parseFloat(strrebate.replace("$", "")));
      console.log("rebate amount : " + rebateInt);
      strRebatewithfin = await this.locRebatewithFin.innerText();
      console.log("Rebatewith finance amount in UI :" + strRebatewithfin);
      rebatewithfinInt = Math.abs(parseFloat(strRebatewithfin.replace("$", "")));
      console.log("rebate with final amount : " + rebatewithfinInt);
      exp_priceafterRebate = exptotaldue - rebateInt - rebatewithfinInt;
      //console.log("Expected price after rebate :" + exp_priceafterRebate);
      strpriafterRebate = await this.locPricesafterRebate.innerText();
      console.log("Price after reabte in UI : " + strpriafterRebate);
      act_pricesafterRebate = parseFloat(strpriafterRebate.split(" ")[0].replace("$", ""));
      console.log("Actual Price after rebate : " + act_pricesafterRebate);
      //expect(exp_priceafterRebate).toBe(act_pricesafterRebate);
    } else {
      rebateInt = 0;
      rebatewithfinInt = 0;
      //console.log("Elements not found, setting rebate values to 0.");
    }
  }

  async getTireinstallationPackAmt(): Promise<number> {
    let tireInstallpackint: number;
    this.strtireinstall = await this.locTireInstallpackamt.innerText();
    tireInstallpackint = parseFloat(
      this.strtireinstall.split(" ")[0].replace("$", "")
    );
    //console.log("Tire installation Amount : " + tireInstallpackint);
    return tireInstallpackint;
  }
  async getIllinoisTireFeeAmt(): Promise<number> {
    let  illiontireamountint: number;
    this.illiontireamtstr = await this.locillionsTireFeeamt.innerText();
   // console.log(" Illinois Tire Fee section in UI:" + this.illiontireamtstr);
    illiontireamountint = parseFloat(
      this.illiontireamtstr.split(" ")[0].replace("$", "")
    );
    //console.log("Illionios amount " + illiontireamountint);
    return illiontireamountint;
  }

  async getTireprotectplantotal(tireQty: number): Promise<number> {
    let  totalTPPamt: number, strTPPtotal: string;
    //console.log("Entered in Tireprotection plan function");
    this.strTPPpertire = await this.locTPPperTire.innerText();
    //console.log("TPP per tire :" + this.strTPPpertire);
    let price = parseFloat(this.strTPPpertire.split(" ")[0].replace("$", ""));
    totalTPPamt = tireQty * price;
    //console.log("Total TPP per selected tires : " + totalTPPamt);
    await pageFixture.page.waitForTimeout(4000);
    return totalTPPamt;
  }

  async paymentpageTotalamt() {
    let actTotal_paymentpage: string;
   // console.log("The passed value : " + this.strTotaldue);
    actTotal_paymentpage = await paymentPage.getTotalAmount();
    //console.log("Payment page amount : " + actTotal_paymentpage); 
   expect(actTotal_paymentpage).toContain(this.strTotaldue);
  }

  async reviewAndConfirmPageComparision( 
    with_tireprotection: string,
    with_cuponcode: string,
    with_militarydiscount: string
  ) {
    let exp_RaC_pricepertire: string, exp_Rac_priceforselctedQTy: string, exp_RaC_TPPpertire:string , exp_Rac_totalTPP: string , exp_Rac_Tireinstal: string;
    let exp_Rac_Illionisamt: string, exp_Rac_subTotal: string, exp_Rac_Salestax: string , exp_Rac_totalDue: string;
    let exp_Rac_PriceperrearTire: string,exp_Rac_priceforreaerselctedQTy: string ,exp_RaC_TPPperReartire:string , exp_Rac_totalRearTPP: string;
    //with_tireprotection = with_tireprotection || "yes";
    await pageFixture.page.waitForTimeout(3000);
    if(with_tireprotection.toLowerCase().includes("Front".toLowerCase())&&with_tireprotection.toLowerCase().includes("Rear".toLowerCase()))
    {
      exp_RaC_pricepertire = await this.priceperTire.innerHTML();
      expect(this.pertire).toBe(exp_RaC_pricepertire);
      exp_Rac_priceforselctedQTy = await this.loctotalPrice.innerHTML();
      expect(this.strtotalPrice).toBe(exp_Rac_priceforselctedQTy);
      exp_Rac_PriceperrearTire = await this.PriceperrearTire.innerHTML();
      expect(this.perreartire).toBe(exp_Rac_PriceperrearTire);
      exp_Rac_priceforreaerselctedQTy = await this.locReartireTotalPrice.innerText();
      expect(this.strReartotalprice).toBe(exp_Rac_priceforreaerselctedQTy);
    }
    else{
    exp_RaC_pricepertire = await this.priceperTire.innerHTML();
    console.log("Price per tire in Review & confirm page:" + exp_RaC_pricepertire);
    console.log("Price per tire in quote page:" + this.pertire);
    expect(this.pertire).toBe(exp_RaC_pricepertire);
    exp_Rac_priceforselctedQTy = await this.loctotalPrice.innerHTML();
    console.log("Total price for selcted qty of tires :" +exp_Rac_priceforselctedQTy);
    expect(this.strtotalPrice).toBe(exp_Rac_priceforselctedQTy);
  }
    if (with_tireprotection.trim().toLowerCase() == "yes".toLowerCase()||(with_tireprotection.split(" and ")[0].toLowerCase().includes("Front Yes".toLowerCase()))) {
      exp_RaC_TPPpertire = await this.locTPPperTire.innerText();
      console.log("EXpected Review & confirm page TPP: "+exp_RaC_TPPpertire);
      expect(exp_RaC_TPPpertire).toBe(this.strTPPpertire);
      exp_Rac_totalTPP = await this.loctotalTPP.innerText();
      expect(exp_Rac_totalTPP).toBe(this.strTotalTPPamt);
    }
    if(with_tireprotection.trim().toLowerCase().includes(" and ")){
    if(with_tireprotection.split(" and ")[1].toLowerCase().includes("Rear Yes".toLowerCase()))
      {
        if(with_tireprotection.split(" and ")[0].toLowerCase().includes("Front Yes".toLowerCase()))
        {
        exp_RaC_TPPperReartire = await this.rearlocTPPperTire.innerText();
        exp_Rac_totalRearTPP = await this.rearloctotalTPP.innerText();
        }
        else
        {
          exp_RaC_TPPperReartire = await this.locTPPperTire.innerText();
        exp_Rac_totalRearTPP = await this.loctotalTPP.innerText();
        }
        expect(exp_RaC_TPPperReartire).toBe(this.strRearTPPpertire);
        expect(exp_Rac_totalRearTPP).toEqual(this.strrearTotalTPPamt);
      }
    }
    exp_Rac_Tireinstal = await this.locTireInstallpackamt.innerText();
    expect(exp_Rac_Tireinstal).toBe(this.strtireinstall);
    if (await this.locilionsTire.isVisible) {
      exp_Rac_Illionisamt =  await this.locillionsTireFeeamt.innerText();
      expect(exp_Rac_Illionisamt).toBe(this.illiontireamtstr);
    } 
    if (with_cuponcode.trim().toLowerCase() == "yes".toLowerCase()) {
      let exp_Rac_coupon_savings_amt = await pageFixture.page.locator(this.cuponsavaings_amt_xpath).innerText();
      //this.coupon_savings_strt= await pageFixture.page.locator(this.cuponsavaings_amt_xpath).innerText();
      expect(exp_Rac_coupon_savings_amt).toBe(this.coupon_savings_strt);
    }
    await pageFixture.page.waitForTimeout(5000);
    exp_Rac_subTotal = await this.locSubTotal.innerText();
    expect(exp_Rac_subTotal).toBe(this.strsubtotal);
    exp_Rac_Salestax = await this.locSalestax.innerText();
    expect(exp_Rac_Salestax).toBe(this.strsalestax);
    exp_Rac_totalDue = await this.locTotaldue.innerText();
    console.log("Total due in Review & confirm Page : "+exp_Rac_totalDue);
     expect(exp_Rac_totalDue).toBe(this.strTotaldue);
  }

async selectSingleTireQty(quantity: string): Promise<void> {
  await this.qtyDropDown.click();
  const quantityToSelect = pageFixture.page.locator(`//li[@role="option"][@title="${quantity}"]`);
  await quantityToSelect.click();
}

async selectTireQty(frontQty: string, rearQty: string): Promise<void> {
  await this.qtyDropDown.click();
  const frotQtyToSelect = pageFixture.page.locator(`//li[@id="exp_front_elem_${frontQty}"]`);
  await frotQtyToSelect.waitFor({state: 'visible'});
  await frotQtyToSelect.click();
  await this.rearQtyDropDown.click();
  const rearQtyToSelect = pageFixture.page.locator(`//li[@id="exp_rear_elem_${rearQty}"]`);
  await rearQtyToSelect.waitFor({state: 'visible'});
  await rearQtyToSelect.click();
}
}