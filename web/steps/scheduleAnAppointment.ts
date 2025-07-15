import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import {
  test,
  chromium,
  Page,
  Browser,
  expect,
  Locator,
  BrowserContext,
} from "@playwright/test";
import { pageFixture } from "../../support/hooks/pageFixture";
import HomePage from "../pages/homePage";
import QuotePage from "../pages/quotePage";
import ReviewAndConfirmPage from "../pages/reviewAndConfirmPage";
import OrderConfirmationPage from "../pages/oderConfirmationPage";
import ScheduleAppointmentPage from "../pages/scheduleAppointmentPage";
import TireResultsPage from "../pages/tireResultsPage";

let browser: Browser;
let page: Page;
let homePage: HomePage;
let quotePage: QuotePage;
let reviewAndConfirmPage: ReviewAndConfirmPage;
let orderConfirmationPage: OrderConfirmationPage;
let scheduleAppointmentPage: ScheduleAppointmentPage;
let tireResultsPage: TireResultsPage;
let context: BrowserContext;

Given(
  "user selects wheel alignment from the list and clicks on Schedule now button",
  async function () {
    homePage = new HomePage(pageFixture.page);
    await homePage.clickOnTypeOfAppointment();
    await pageFixture.page.waitForTimeout(2000);
    await homePage.clickVehicleAlignment();
    await pageFixture.page.waitForTimeout(2000);
    await homePage.clickScheduleNowButton();
    quotePage = new QuotePage(pageFixture.page);
    //await quotePage.verifyHeaderQuotePage();
  });

Then(
  "User validates Review and Confirm page and click Confirm appointment button",
  async function () {
    reviewAndConfirmPage = new ReviewAndConfirmPage(pageFixture.page);
    await reviewAndConfirmPage.clickConfirmAppointmentButton();
  }
);

Then(
  "User verifies the Order details on Appointment Confirmation page",
  async function () {
    orderConfirmationPage = new OrderConfirmationPage(pageFixture.page);
    await orderConfirmationPage.verifyAppointmentConfirmationPage();
    await orderConfirmationPage.verifyOrderNumber();
  }
);

Then(
  "user should see the Total Due in Store on quote page without Alignment Protection Plan",
  async function () {
    quotePage = new QuotePage(pageFixture.page);
    await quotePage.verifyUnitPriceAndTotalPriceWithoutPlan();
    await pageFixture.page.waitForTimeout(2000);
    await homePage.clickScheduleNowButton();
  }
);

  Then('user should see the Total Due in Store on quote page with Alignment Protection Plan', async function () {
    await quotePage.verifyUnitPriceAndTotalPriceWithPlan();
    await pageFixture.page.waitForTimeout(2000);
    await homePage.clickScheduleNowButton();
    await homePage.verifySalesTaxAmount();

  });

Given(
  "user selects Visual Vehicle Inspection from the list and clicks on Schedule now button",
  async function () {
    homePage = new HomePage(pageFixture.page);
    await homePage.clickOnTypeOfAppointment();
    await homePage.clickVisualVehicleInspection();
    await homePage.clickScheduleNowButton();
    quotePage = new QuotePage(pageFixture.page);
    // await quotePage.verifyHeaderQuotePage();
  }
);

Given("user selects any checkbox from the page and clicks on Schedule now button",async function () {
    quotePage = new QuotePage(pageFixture.page);
    await quotePage.verifyHeaderQuotePage();
    const itemCheckboxs = await pageFixture.page.$$("//*[@class='label--radio label--radio__check vvi-quote__issues-item-label']");
    if (itemCheckboxs.length === 0) {
      throw new Error("No checkboxes found");
    }
    const randomIndex = Math.floor(Math.random() * itemCheckboxs.length);
    await itemCheckboxs[randomIndex].check();
    await pageFixture.page.waitForTimeout(1000);
    await homePage.clickScheduleNowButton();
  }
);

Given("user selects wheel alignment from the hero dropdown", async function () {
  homePage = new HomePage(pageFixture.page);
  await homePage.clickScheduleAnAppointment();
  await homePage.clickvehicleAlignmentDropDown();
  await pageFixture.page.waitForTimeout(5000);
});

Given(
  "user selects mechanical Vehicle Inspection from the list",
  async function () {
    homePage = new HomePage(pageFixture.page);
    await homePage.clickScheduleAnAppointment();
    await homePage.clickmechanicalVehicleInspectionDropDown();
  }
);

Then(
  "user clicks on Schedule Appointment footer link and verify the Quotes & Appointments page",
  async function () {
    homePage = new HomePage(pageFixture.page);
    scheduleAppointmentPage = new ScheduleAppointmentPage(pageFixture.page);
    await homePage.clickGlobalFooterScheduleAppointmentlink();
    await pageFixture.page.waitForTimeout(5000);
    await scheduleAppointmentPage.verifyfindTiresNowButton();
  }
);

Then("user clicks on Find tires now button", async function () {
  await scheduleAppointmentPage.clickfindTiresNowButton();
});

Then(
  "user clicks on Schedule appointment button for Alignment",
  async function () {
    await scheduleAppointmentPage.clickScheduleAppointmentButton();
  }
);

Then(
  "user clicks on Schedule appointment button for Free Visual Vehicle Inspection",
  async function () {
    await scheduleAppointmentPage.clickScheduleAppointmentButtonForVisualInspection();
  }
);

Then("user clicks on Find wheels now button", async function () {
  await scheduleAppointmentPage.clickFindWheelsNowButton();
});

  Then('User is directed to the Wheel Finder Page', async function () {
    tireResultsPage = new TireResultsPage(pageFixture.page); 
    await tireResultsPage.verifyWheelFinderPage();
    await tireResultsPage.clickOnGetTotalPrice();
  });

  Then('Verify the Quote page and send quote to Customer', async function () {
    quotePage = new QuotePage(pageFixture.page);
    await quotePage.verifyGetAQuotePage();
    await pageFixture.page.waitForTimeout(5000);

    //Retrieve and calculate all prices
    const productPrice = await quotePage.getProductTotalPrice();
    const hubRingPrice = await quotePage.getHubRingSetServicePrice();
    const lugKitPrice = await quotePage.getLugKitChromeUnitPrice();
    const wheelInstallationPrice = await quotePage.getWheelInstallationPackagePrice();
    const salesTaxPrice = await quotePage.getSalesTaxValue();
    const instantSaving = await quotePage.getInstantSavingValue();

    await pageFixture.page.waitForTimeout(20000);

    // Calculate the total price
    const totalPrice = productPrice + hubRingPrice + lugKitPrice + wheelInstallationPrice + salesTaxPrice + instantSaving;

    //Get the Due in Store value and validate if it matches the calculated price
    const totaldueInStore = await quotePage.getDueInStoreTotal();
    if (Math.abs(totalPrice - totaldueInStore) < 0.01) {
      console.log('The total price matches the due in store.');
    } else {
      console.log('The total price does not match the due in store.');
    }
    expect(totalPrice).toBeCloseTo(totaldueInStore, 2);
    await quotePage.clickEmailQuote();
    await quotePage.verifyEmailModalVisibility();
    await quotePage.fillEmailAndSubmit();
    await quotePage.verifyQuoteSent();
    await quotePage.closeEmailModal();
 });


 Given('User on Belle Tire Home Page', async function () {
  homePage = new HomePage(pageFixture.page);
    await pageFixture.page.goto("https://www.belletire.com");
    await pageFixture.page.waitForTimeout(1000);
    await homePage.validateLogo();
});
