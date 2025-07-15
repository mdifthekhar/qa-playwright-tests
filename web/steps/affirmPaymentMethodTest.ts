import {Given, When, Then, DataTable} from "@cucumber/cucumber";
import {test, chromium, Page, Browser, expect, Locator} from "@playwright/test";
import { pageFixture } from "../../support/hooks/pageFixture";
import HomePage from "../pages/homePage";
import AffirmPaymentPage from "../pages/affirmPaymentPage";
import PaymentPage from "../pages/paymentPage";

let browser: Browser;
let page: Page;
let homePage: HomePage;
let affirmPaymentPage: AffirmPaymentPage;
let paymentPage: PaymentPage;

When('User selects the affirm radio button', async function () {
    paymentPage = new PaymentPage(pageFixture.page);
    await paymentPage.clickAffirmRadioButton();
});

Then('User Verifies the Affirm popup and complete the payment process', async function () {
    affirmPaymentPage = new AffirmPaymentPage(pageFixture.page);
    await affirmPaymentPage.verifyAffirmPaymentProcess();
  });