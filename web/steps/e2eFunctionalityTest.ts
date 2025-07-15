import {Given, When, Then, DataTable, context} from "@cucumber/cucumber";
import {test, chromium, Page, Browser, expect, Locator} from "@playwright/test";
import { pageFixture } from "../../support/hooks/pageFixture";
import HomePage from "../pages/homePage";
import TireResultsPage from "../pages/tireResultsPage";
import QuotePage from "../pages/quotePage";
import ContactInformationPage from "../pages/contactInformationPage";
import ScheduleAppointmentPage from "../pages/scheduleAppointmentPage";
import ReviewAndConfirmPage from "../pages/reviewAndConfirmPage";
import AppointmentConfirmationPage from "../pages/appointmentConfirmationPage";
import PaymentPage from "../pages/paymentPage";
import WizardCardPage from "../pages/wizardCardPage";
import OrderConfirmationPage from "../pages/oderConfirmationPage";
import MilitaryDiscountPage from "../pages/militaryDiscountPage";

let browser: Browser;
let page: Page;
let homePage: HomePage;
let tireResultsPage: TireResultsPage;
let quotePage: QuotePage;
let contactInformationPage: ContactInformationPage;
let scheduleAppointmentPage: ScheduleAppointmentPage;
let reviewAndConfirmPage: ReviewAndConfirmPage;
let appointmentConfirmationPage: AppointmentConfirmationPage;
let paymentPage: PaymentPage;
let wizardCardPage: WizardCardPage;
let orderConfirmationPage: OrderConfirmationPage;
let militaryDiscountPage: MilitaryDiscountPage;
//let MilitaryDiscountPage: militaryDiscountPage;

//militaryDiscountPage = new MilitaryDiscountPage(pageFixture.page);

Given('user enters the url', async function()  {
    homePage = new HomePage(pageFixture.page);
    await pageFixture.page.goto(process.env.BASEURL);
    await homePage.validateLogo();
    await pageFixture.page.waitForTimeout(20000);
});

Then("user navigated to Home page", async function () {
  await homePage.validateselectVehicleYearButton();
  await homePage.validateGlobalNavLangIcon();
  await pageFixture.page.waitForTimeout(1000);
  await homePage.validateGlobalFooterLogo();
});

Given('User is on Belle Tire Home Page', async function () {    
    homePage = new HomePage(pageFixture.page);
    await pageFixture.page.waitForTimeout(1000);
    await pageFixture.page.goto(process.env.homePageURL);
    await pageFixture.page.waitForTimeout(3000);
    await homePage.validateLogo();
    await homePage.clickAcceptAllCookiesButton();
    await homePage.verifyClickChatDismissButton();
});

When("User clicks on Shop for Tires button", async function () {
  await homePage.clickOnShopForTiresButton();
});

When("User clicks on Search by vehicle", async function () {
  await homePage.clickOnSearchByVehicle();
});

When(
  "User selects {string}, {string}, {string}, {string}, {string}",
  async function (
    yearOfVehicle,
    vehicleMake,
    vehicleModelName,
    vehicleBodyName,
    vehicleTrimName
  ) {
    wizardCardPage = new WizardCardPage(pageFixture.page);
    await pageFixture.page.waitForTimeout(1000);
    await wizardCardPage.clickOnVehicleYear(yearOfVehicle);
    await wizardCardPage.clickOnVehicleMake(vehicleMake);
    await wizardCardPage.clickOnVehicleModel(vehicleModelName);
    await wizardCardPage.clickOnVehicleBody(vehicleBodyName);
    await wizardCardPage.clickOnVehicleTrim(vehicleTrimName);
  }
);

When("User clicks on Select all four tires", async function () {
  await wizardCardPage.clickOnSelectAllFourTires();
});

When("User clicks on Next Step", async function () {
  await wizardCardPage.clickOnNextStep();
  await pageFixture.page.waitForTimeout(6000);
});

When("User clicks on Skip to results", async function () {
  await wizardCardPage.clickOnSkipToResults();
});

Then("User is directed to the Tire Results Page", async function () {
  tireResultsPage = new TireResultsPage(pageFixture.page);
  await pageFixture.page.waitForTimeout(10000);
  await tireResultsPage.validateTireResults();
  await pageFixture.page.waitForTimeout(10000);
});

Then("Click on Get Total Price button", async function () {
  await pageFixture.page.waitForTimeout(4000);
  await wizardCardPage.clickgetTotalPrice();
});

Then(
  "Verify the user navigates to Quote page and selected tire protection plan by default.",
  async function () {
    quotePage = new QuotePage(pageFixture.page);
    await pageFixture.page.waitForTimeout(10000);
    await quotePage.VerifyYesForTPP();
  }
);

Then('Verify the user navigates to Quote page and selected tire protection plan as {string}', async function (with_tireprotection) {  
  quotePage = new QuotePage(pageFixture.page);
    await pageFixture.page.waitForTimeout(10000);
    await quotePage.selectTPP(with_tireprotection);

});

Then('User changes the tire quantity to {string}', async function (quantity: string) {
  await quotePage.selectSingleTireQty(quantity);
});

Then('User changes the tire quantity front as {string} and rear as {string}', async function (frontQty: string, rearQty: string) {
  await quotePage.selectTireQty(frontQty, rearQty);
});

Then("click on Schedule now button", async function () {
  await quotePage.clickScheduleNowButton();
  contactInformationPage = new ContactInformationPage(pageFixture.page);
  await contactInformationPage.verifyContactInformationPage();
  await pageFixture.page.waitForTimeout(1000);
});

When("User enters the following details in Contact Information form:",
  async (dataTable: DataTable) => {
    contactInformationPage = new ContactInformationPage(pageFixture.page);
    const rows = dataTable.raw();
    const header = rows[0];
    for (let i = 1; i < rows.length; i++) {
      const data = rows[i];
      const firstName = data[header.indexOf("FirstName")];
      const lastName = data[header.indexOf("LastName")];
      const emailAddress = data[header.indexOf("EmailAddress")];
      const phoneNumber = data[header.indexOf("PhoneNumber")];
      await contactInformationPage.enterContactInformation(
        firstName,
        lastName,
        emailAddress,
        phoneNumber
      );
    }
  }
);

Then("User clicks on Next step button and verifies the Schedule appointment page",async function () {
    await contactInformationPage.clicknextStepButton();
    scheduleAppointmentPage = new ScheduleAppointmentPage(pageFixture.page);
    await scheduleAppointmentPage.verifyScheduleAppointmentPage();
  }
);

Then(
  "User clicks on Next week button and click on appointment time",
  async function () {
    scheduleAppointmentPage = new ScheduleAppointmentPage(pageFixture.page);
    await pageFixture.page.waitForTimeout(10000);
    await scheduleAppointmentPage.clickAppointmentTime();
    await scheduleAppointmentPage.clickConfirmButton();
  }
);

Then("User clicks on Confirm button and clicks on Confirm appointment button on Review and Confirm page",
  async function () {
    reviewAndConfirmPage = new ReviewAndConfirmPage(pageFixture.page);
    await reviewAndConfirmPage.clickConfirmAppointmentButton();
  }
);

//Without TPP
Then("Verify the user navigates to Quote page and select No tire protection plan",async function () {
    quotePage = new QuotePage(pageFixture.page);
    await pageFixture.page.waitForTimeout(2000);
    await quotePage.clickAndVerifyTPPPlanNo();
    await pageFixture.page.waitForTimeout(8000);
  });

Then("Verify the order in appointment confirmation page", async function () {
  appointmentConfirmationPage = new AppointmentConfirmationPage(
    pageFixture.page
  );
  await appointmentConfirmationPage.verifyHeadlineAppointmentConfirmed();
  await appointmentConfirmationPage.verifyQuoteNumber();
});

Then("User clicks Pay now button", async function () {
  await pageFixture.page.waitForTimeout(3000);
  await quotePage.clickPayNowButton();
});

Then("User clicks on Next step button", async function () {
  await contactInformationPage.clicknextStepButton();
});

When("User enters the following details in the credit card form:",async (dataTable: DataTable) => {
    paymentPage = new PaymentPage(pageFixture.page);
    await pageFixture.page.waitForTimeout(2000);
    const rows = dataTable.raw();
    const header = rows[0];
    for (let i = 1; i < rows.length; i++) {
      const data = rows[i];
      const cardNumber = data[header.indexOf("CardNumber")];
      const month = data[header.indexOf("Month")];
      const year = data[header.indexOf("Year")];
      const cvv = data[header.indexOf("CVV")];
      await paymentPage.fillCreditCardForm(cardNumber, month, year, cvv);
    }
  }
);

When("User enters the following details in Billing Information for:", async (dataTable: DataTable) => {
    const paymentPage = new PaymentPage(pageFixture.page);
    const rows = dataTable.raw();
    const header = rows[0];

    for (let i = 1; i < rows.length; i++) {
      const data = rows[i];
      const firstName = data[header.indexOf("FirstName")];
      const lastName = data[header.indexOf("LastName")];
      const streetAddress = data[header.indexOf("StreetAddress")];
      const city = data[header.indexOf("City")];
      const state = data[header.indexOf("State")];
      const zipCode = data[header.indexOf("ZipCode")];
      await paymentPage.fillBillingInformation(
        firstName,
        lastName,
        streetAddress,
        city,
        state,
        zipCode
      );
    }
  }
);

When("User clicks on Review purchase button to navigate to Review and confirm page", async function () {
    reviewAndConfirmPage = new ReviewAndConfirmPage(pageFixture.page);
    paymentPage = new PaymentPage(pageFixture.page);
    await paymentPage.clickNextButton();
    await reviewAndConfirmPage.verifyReviewAndConfirmPage();
  }
);

Then("User validates Review and Confirm page and click purchase button", async function () {
    await reviewAndConfirmPage.clickPurchaseButton();
    await pageFixture.page.waitForTimeout(2000);
  }
);
Then('User verifies the Order details on Order Confirmation page', async function () {
  orderConfirmationPage = new OrderConfirmationPage(pageFixture.page);
  await orderConfirmationPage.verifyOrderConfirmationNuber();
  await pageFixture.page.waitForTimeout(2000);
});


Then("User clicks Schedule and pay button", async function () {
  await quotePage.clickScheduleAndPayButton();
});

Then("User validates Review and Confirm page and click purchase and set appointment button",async function () {
    await reviewAndConfirmPage.clickPurchaseAndSetAppointmentButton();
  }
);

Then("Verify the {string} textbox is present", async function (string) {
  // Write code here that turns the phrase above into concrete actions
  await quotePage.verifyTextboxPresent();
});

// Then('Verify the {string} button  is disabled', async function (string)
// {
//   await quotePage.applybtnDisabled();
//          });

When("user enter the {string}", async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then("Verify the {string} button  is not disabled", async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then("user clicks on verify with id", async function () {
  militaryDiscountPage = new MilitaryDiscountPage(pageFixture.page);
  await pageFixture.page.waitForTimeout(3000);
  await militaryDiscountPage.verifyMilitaryDiscountID();
  await pageFixture.page.waitForTimeout(3000);
});
Then(
  "verify user navigates to group selection page and selected the {string} group by default",
  async function (groupName) {
    militaryDiscountPage = new MilitaryDiscountPage(pageFixture.page);
    await militaryDiscountPage.verifytheSelectedGroup(groupName);
  }
);
let carname: string;
let Act_tireDetails_tireName: string;
When("user clicks on {string}", async function (text) {
  //console.log("Received string is : " + text);
  switch (text) {
    case "Continue to sign in": {
      militaryDiscountPage = new MilitaryDiscountPage(pageFixture.page);
      await militaryDiscountPage.clickactionOnTextbutton(text);
      break;
    }
    case "See Details": {
      carname = await wizardCardPage.clickOnSeeDetails();
      break;
    }
    case "Get total price in tire details": {
      await wizardCardPage.getTotalprice_tiredetailspage();
      break;
    }
    case "Review Purchase": {
      await paymentPage.clickReviewPurchaseButton();
      break;
    }
    case "Next": {
      await paymentPage.clickNextButton();
      break;
    }
  }
});

Then("verify user is redirected to {string}", async function (redirectedPage) {
  //console.log("Received Page is : " + redirectedPage);
  switch (redirectedPage) {
    case "Tire details page": {
      Act_tireDetails_tireName = await wizardCardPage.tireDetailspage();
      //console.log(" expected car name : " + carname);
      //console.log("actual car name on car details page : " + Act_tireDetails_tireName);
      await expect(carname).toBe(Act_tireDetails_tireName);
      break;
    }
    case "Tire quote page": {
      quotePage = new QuotePage(pageFixture.page);
      await pageFixture.page.waitForTimeout(3000);
      await quotePage.verifyQuotePageNavigation();
      break;
    }
    case "Payment Details": {
      paymentPage = new PaymentPage(pageFixture.page);
      await paymentPage.verifyPaymentNavigation();
      //quotePage = new QuotePage(pageFixture.page);
      await quotePage.paymentpageTotalamt();
      break;
    }
    case "Review & confirm": {
      reviewAndConfirmPage = new ReviewAndConfirmPage(pageFixture.page);
      await pageFixture.page.waitForTimeout(3000);
      reviewAndConfirmPage.verifyReviewAndConfirmPage();
      break;
    }
  }
});

Then("enter the singnIn details and click on signin", async function () {
  militaryDiscountPage = new MilitaryDiscountPage(pageFixture.page);
  await pageFixture.page.waitForTimeout(3000);
  await militaryDiscountPage.testbot();
  await pageFixture.page.waitForTimeout(3000);
  await militaryDiscountPage.militaryDiscountSingnIn();
});

Then("validate the total quote {string} ,{string} and {string}",
  async function (
    with_tireprotection,
    with_discountcode,
    with_militarydiscount
  ) {
    quotePage = new QuotePage(pageFixture.page);
    await pageFixture.page.waitForTimeout(3000);
    await quotePage.totalPrice(with_tireprotection, with_discountcode, with_militarydiscount);
  }
);

Then("compare all price amounts in review and confirm page with Quote page {string} ,{string} and {string}",
  async function (with_tireprotection,with_discountcode,with_militarydiscount) {
    await quotePage.reviewAndConfirmPageComparision(with_tireprotection, with_discountcode,with_militarydiscount);
  }
);
Then('Verify the {string} textbox is present', async function (string) {
  await quotePage.verifyApplyingCoupon();
         });

When('user enters the coupon code and click the Apply button', async function () {
  await quotePage.verifyApplyingCoupon();
  
});

Then('User clicks Review Purchase button', async function () {
  reviewAndConfirmPage = new ReviewAndConfirmPage(pageFixture.page);
  await reviewAndConfirmPage.clickReviewPurchaseButton();
  await pageFixture.page.waitForTimeout(2000);
});
