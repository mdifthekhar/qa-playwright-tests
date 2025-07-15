import {Given, When, Then, DataTable} from "@cucumber/cucumber";
import {test, chromium, Page, Browser, expect, Locator, BrowserContext} from "@playwright/test";
import { pageFixture } from "../../support/hooks/pageFixture";
import HomePage from "../pages/homePage";
import { url } from "inspector";

let browser: Browser;
let page: Page;
let homePage: HomePage;
let context: BrowserContext;

    Then('Verify the Home page title', async function () {
        const actualPageTitle = await pageFixture.page.title();
        const expectedPageTitle = "Demo Belle Tire | Experts for Tires, Wheels & Automotive Service";
        try {
            await expect(actualPageTitle).toBe(expectedPageTitle);
        } catch (error) {
            throw new Error(`Home Page title mismatch. Actual title: "${actualPageTitle}". Expected title: "${expectedPageTitle}"`);
        }
    
     });
    Then('Verify the drop down options for the first CTA Shop for tires and Schedule an appointment exists on the home page', async function () {    
        homePage = new HomePage(pageFixture.page)   
        await homePage.verifyShopForTiresButton();
        await homePage.verifyScheduleAnAppointment();
      });
    Then('verify the dropdown options for Schedule an appointment', async function () {
        await homePage.clickScheduleAnAppointment();
        await homePage.verifySearchByVehicleDropdown();
        await homePage.verifySearchBySizeDropDown();
        await homePage.verifyVehicleAlignmentDropDown();
        await homePage.verifyMechanicalVehicleInspectionDropDown();
        await homePage.clickScheduleAnAppointment();
      });

    Then('Verify the dropdown options for Shop for tires', async function () {
        await homePage.clickOnShopForTiresButton();
        await homePage.clickOnShopForTiresButton();
        await homePage.verifySearchByVehicle();
        await homePage.verifySearchByTireSize();
        await homePage.clickOnShopForTiresButton();
        
      });

    Then('verify clicking on all the menu bar items in the home page', async function () {
        await homePage.clickTiresAndWheelsMenuItem();
        await pageFixture.page.waitForTimeout(1000);
        await homePage.clickandVerifyAutoServiceMenuItem();
        await pageFixture.page.waitForTimeout(1000);
        await homePage.clickandVerifyOffersAndSavings();
        await pageFixture.page.waitForTimeout(1000);
        await homePage.clickandVerifyTipsAndGuidesMenuItem()
        await pageFixture.page.waitForTimeout(1000);;
        await homePage.clickandVerifyOurCompanyMenuItem();
        await pageFixture.page.waitForTimeout(1000);
        await homePage.clickAndVerifyLocationItem();
        await pageFixture.page.waitForTimeout(1000);
      });

    Then('Verify the promo cards by clicking the arrow buttons', async function () {
          await pageFixture.page.reload();
          await homePage.verifyPromoSliderCard();
          const numberOfClicks = 3; // Specify the number of times to click
          for (let i = 0; i < numberOfClicks; i++) {
            await homePage.clickPromoSliderArrowButton();
          }
        await homePage.verifyViewAllOffersButton();
     });

    Then('Verify Auto Services carousel by clicking each element in the carousel', async ()=> {
        
        const serviceElements = ['Alignment', 'Auto Glass', 'Oil & Lube ', 'Brakes', 'Suspension', 'Batteries', 'AC & Coolant'];
            for (const service of serviceElements) {
              let selector;
                if (['Alignment', 'Auto Glass', 'Suspension','Batteries','AC & Coolant'].includes(service)) {
                    selector = `(//*[text()='${service}'])[2]`;
                } else {
                    selector = `(//*[text()='${service}'])[1]`;
                }
                await pageFixture.page.waitForTimeout(1000);
                await pageFixture.page.click(selector);
                await pageFixture.page.waitForTimeout(1000);
              }
    });

    Then('Verify the home page footer links', async () => {
      homePage = new HomePage(pageFixture.page);
      await homePage.verifyHomePageGlobalFooterLinks();
      await homePage.verifyGlobalFooterGiftCards();
      await homePage.verifyGlobalFooterScheduleAppointmentlink();
      await homePage.verifyGlobalFooterFAQ();
      await homePage.verifyGlobalFooterFleetVehicleServices();
      const [newWindow] = await Promise.all([
        pageFixture.page.context().waitForEvent("page"),
        homePage.clickGlobalFooterCareers()
    ])
    await newWindow.waitForLoadState();
    expect(newWindow.url()).toContain("careers");
    });

Then('User click on Tires & Wheels menu item and select Wheel Finder', async function () {
    homePage = new HomePage(pageFixture.page);
    const buttonLocator = pageFixture.page.locator('button.global-nav__toggle-button');
    const isButtonPresent = await buttonLocator.count() > 0;
  
      if (isButtonPresent) {
      // If the button exists, click it
      await buttonLocator.click();
  }
      await homePage.clickTiresAndWheelsMenuItem();
      await homePage.clickWheelFinderMenuItem();
  });

When('user changes location to {string}', async function (location: string) {
  const locations = {
      ohio: { latitude: 40.4173, longitude: -82.9071 },  // OH
      illinois: { latitude: 41.8781, longitude: -87.6298 },  // IL
      indiana: { latitude: 40.4200, longitude: -86.8176 },  // IN
      michigan: { latitude: 42.1354, longitude: -83.2253 } // MI
  };

    // Ensure location is a string and handle case insensitivity
    const locationKey = location.toLowerCase();
    const newLocation = locations[locationKey];
    if (!newLocation) {
        throw new Error(`Location "${location}" is not recognized.`);
    }

    const page = pageFixture.page;

    // Navigate to the desired URL in the current tab
    const url = 'https://qa.belletire.com';  // Replace with the desired URL
    await page.goto(url, { waitUntil: 'domcontentloaded' });  // Navigate to the URL and wait for the DOM to load

    // Grant geolocation permissions for the current page
    const context = page.context();
    await context.grantPermissions(['geolocation'], { origin: url });

    // Set the new geolocation on the current page
    await context.setGeolocation(newLocation);

    // Log the applied geolocation for debugging purposes
    console.log(`Geolocation set to: ${newLocation.latitude}, ${newLocation.longitude}`);

    // Reload the page to apply the new geolocation settings
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(5000);  // Wait for the page to reload and apply changes

});

Then('click on {string} link under {string} and verify user navigating to {string} page', async function (menuItem:string, menuName:string, expectedPageTitle:string) {
  homePage = new HomePage(pageFixture.page);
  await homePage.validateHomePageMenuItems(menuItem, menuName, expectedPageTitle);
});
