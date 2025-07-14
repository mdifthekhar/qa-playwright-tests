import {Given, When, Then, DataTable} from "@cucumber/cucumber";
import {test, chromium, Page, Browser, expect, Locator, BrowserContext} from "@playwright/test";
import { pageFixture } from "../../support/hooks/pageFixture";
import HomePage from "../pages/homePage";
import WizardCardPage from "../pages/wizardCardPage";
import { url } from "inspector";
import TireResultsPage from "../pages/tireResultsPage";

let browser: Browser;
let page: Page;
let homePage: HomePage;
let wizardCardPage: WizardCardPage;
let tireResultsPage: TireResultsPage;
let context: BrowserContext;

Given('User selects shop for tires in homePage', async function () {
    homePage = new HomePage(pageFixture.page) 
    await homePage.clickOnShopForTiresButton();
    await homePage.clickOnSearchByVehicle();
  });

  Given('Select four tires and skip to results page', async function () {
    wizardCardPage = new WizardCardPage(pageFixture.page);
    await wizardCardPage.clickOnSelectAllFourTires();
    await wizardCardPage.clickOnNextStep();
    await wizardCardPage.clickOnSkipToResults();
  });

  Then('User verifies global filters', async function () {
    tireResultsPage = new TireResultsPage(pageFixture.page);
    await tireResultsPage.verifyTopTireResultsCards();
    await tireResultsPage.clickOnSaleFilter();
    await tireResultsPage.verifyOffersAvailableChip();
    await tireResultsPage.verifyViewAllOfferLink();
    await tireResultsPage.verifyPriceAfterSale();
    await tireResultsPage.verifyOfferRebateText();
    await tireResultsPage.verifyOffersAvailableCheckbox();
    await tireResultsPage.clickAvailableFilterToday();
    await tireResultsPage.verifyAvailableTodayResultcard();
    await tireResultsPage.verifyAvailableTodayCheckbox();
    await tireResultsPage.verifyAvailableTodayChip();
    await tireResultsPage.clickHighestRatedFilter();
    await tireResultsPage.verifyHighestRatedCheckbox();
    await tireResultsPage.verifyHighestRatingCard();
    
  });

  Then(
  "User verifies Tire results filters and selects {string} tire",
  async function (brand) {
    tireResultsPage = new TireResultsPage(pageFixture.page);
    await tireResultsPage.verifyTopTireResultsCards();
    await tireResultsPage.selectFilterInTireResultsPage(brand);
  }
);

Then(
  "User clears all the filter for {string} and re-verify filter functionality",
  async function (brand) {
    tireResultsPage = new TireResultsPage(pageFixture.page);
    await tireResultsPage.clearFiltersAndVerifyTireResults(brand);
  }
);