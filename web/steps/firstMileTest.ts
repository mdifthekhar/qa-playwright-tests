import {Given, When, Then, DataTable, context} from "@cucumber/cucumber";
import {test, chromium, Page, Browser, expect, Locator} from "@playwright/test";
import { pageFixture } from "../../support/hooks/pageFixture";
import HomePage from "../pages/homePage";
import AffirmPaymentPage from "../pages/firstMilePage";
import ReviewAndConfirmPage from "../pages/reviewAndConfirmPage";
import PaymentPage from "../pages/paymentPage";
import { Console } from "console";
import FirstMilePage from "../pages/firstMilePage";
let newPage: Page;
let firstMilePage: FirstMilePage;
let reviewAndConfirmPage: ReviewAndConfirmPage;

When('the user clicks the {string} button and completes the payment process', async function (buttonType: string) {
  if (!pageFixture.page) {
      throw new Error("Page object is not initialized.");
  }

  const reviewAndConfirmPage = new ReviewAndConfirmPage(pageFixture.page);

  // Click the appropriate button based on buttonType
  const buttonClicked = buttonType === 'purchase'
      ? reviewAndConfirmPage.clickPurchaseButton()
      : buttonType === 'purchaseAndSetAppointment'
      ? reviewAndConfirmPage.clickPurchaseAndSetAppointmentButton()
      : buttonType === 'next'
      ? reviewAndConfirmPage.clickNextButton()
      : Promise.reject(new Error(`Unknown button type: ${buttonType}`)); // Handle unknown buttonType

  // Handle the new page and payment process
  const [newPage] = await Promise.all([
      pageFixture.page.context().waitForEvent('page'),
      buttonClicked
  ]);

  const firstMilePage = new FirstMilePage(newPage);
  await newPage.waitForLoadState();

  // Complete payment
  await firstMilePage.fillPaymentDetails();
  await pageFixture.page.waitForTimeout(5000);
  await firstMilePage.fillBillingAddress();
  await firstMilePage.submitPaymentForm();
  //await newPage.waitForTimeout(10000);
  
  // Verify transaction and close the page
  await firstMilePage.verifyTransactionAccepted();
  //await newPage.close();
  await pageFixture.page.bringToFront();
  
});
