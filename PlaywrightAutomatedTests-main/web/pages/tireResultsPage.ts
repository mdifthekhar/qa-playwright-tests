import { Page, Locator, expect } from "@playwright/test";
import { pageFixture } from "../../support/hooks/pageFixture";
import commonMethods, * as CommonMethods from "../commonMethods";

let page: Page;
const tireResultText = "Total Results";

export default class TireResultsPage {
    page: any; 
    getTotalPrice:Locator;
    availableFilterToday:Locator;
    onSaleFilter:Locator;
    highestRatedFilter:Locator;
    availableTodayChip:Locator;
    availableTodayChipDesktop:Locator;
    availableTodayResultcard:Locator;
    availableTodayCheckbox:Locator;
    offersAvailableChip:Locator;
    offersAvailableChipDesktop: Locator;
    priceAfterSale:Locator;
    offerRebateText:Locator;
    viewAllOfferLink:Locator;
    offersAvailableCheckbox:Locator;
    highestRatedCheckbox:Locator;
    highestRatingCard:Locator;
    topTireResultsCards:Locator;
    affirmPromoBanner:Locator;
    affirmPromoBannerWithGlobalFilters: Locator;
    brandDropDownFilter: Locator;
    clearTireResultsFilterBtn: Locator;
    //Wheel Finder 
    wheelFinder: Locator;

    constructor(page: Page) {
        this.page = page;        
        this.getTotalPrice = pageFixture.page.locator("(//*[contains(@class,'button button--primary horizontal-result-card__button')])[1] | (//*[contains(@class,'button button--primary result-card__button')])[1] ");
        this.availableFilterToday = pageFixture.page.locator("span.QuickViewItem-label", {hasText: 'Available Today'});
        this.onSaleFilter = pageFixture.page.locator("span.QuickViewItem-label", {hasText: 'On Sale'});
        this.highestRatedFilter = pageFixture.page.locator("span.QuickViewItem-label", {hasText: 'Highest Rated'});
        this.availableTodayChip = pageFixture.page.locator("(//span[@class='jellybean-filters-nav__label'])[1]");
        this.availableTodayChipDesktop = pageFixture.page.locator("(//span[@class='jellybean-filters-nav__label'])[2]");
        this.availableTodayResultcard = pageFixture.page.locator("(//div[@class='horizontal-result-card__tire-details-container']/../div/button/span[text()='Available Today'])[1]");
        this.availableTodayCheckbox = pageFixture.page.locator("(//label[@class='label--checkbox' and text()='Available Today']/../input)[1]");
        this.offersAvailableChip = pageFixture.page.locator("(//span[@class='jellybean-filters-nav__label' and text()='Offers available'])[1]");
        this.offersAvailableChipDesktop = pageFixture.page.locator("(//span[@class='jellybean-filters-nav__label' and text()='Offers available'])[2]");
        this.viewAllOfferLink = pageFixture.page.locator("(//span[text()='View all offers '])[1]");
        this.priceAfterSale = pageFixture.page.locator("(//p[@class='horizontal-result-card-price-strings-after-sale' and contains(text(),'After rebate:')])[1]");
        this.offerRebateText = pageFixture.page.locator("(//p[@class='horizontal-result-card__rebates-text single-fitment'])[1]");
        this.offersAvailableCheckbox = pageFixture.page.locator("//input[@class='side-control' and @data-gtm-option-label='Offers available']"); 
        this.highestRatedCheckbox = pageFixture.page.locator("//input[@value='rating-desc']");
        this.highestRatingCard = pageFixture.page.locator("(//li[@class='horizontal-result-card__why-buy-performance-rating'])[1]");
        this.topTireResultsCards = pageFixture.page.locator(".horizontal-top-picks__sliders.desktop");
        this.affirmPromoBanner = pageFixture.page.locator('.affirm-as-low-as').locator('nth=0');
        this.affirmPromoBannerWithGlobalFilters = pageFixture.page.locator('.affirm-as-low-as').locator('nth=3');
        this.wheelFinder = pageFixture.page.locator("//h2[text()='Wheel Finder']");
        this.brandDropDownFilter = pageFixture.page.locator("#facet-0-6");
        this.clearTireResultsFilterBtn = pageFixture.page.locator('.button--primary[id="clear-filters"]');
        
    }

    async validateTireResults() {    
        await this.getTotalPrice.waitFor({ state: 'visible', timeout: 5000 }); 
        await expect(this.getTotalPrice).toBeVisible();       
    }

    async clickOnGetTotalPrice() {
        await this.getTotalPrice.click();
    }
    async clickAvailableFilterToday() {
        await this.availableFilterToday.click();
    }
    async clickOnSaleFilter() {
        await this.onSaleFilter.click();
    }
    async clickHighestRatedFilter() {
        await this.highestRatedFilter.click();
    }
    async verifyAvailableTodayChip() {           
        const isMobileVisible = await this.availableTodayChip.isVisible();
        if (isMobileVisible){
            await expect(this.availableTodayChip).toBeVisible();
        } else {
            await expect(this.availableTodayChipDesktop).toBeVisible();
        }
    }
    async verifyAvailableTodayResultcard() {           
        await expect(this.availableTodayResultcard).toBeVisible();       
    }

    async verifyAvailableTodayCheckbox() {           
        await expect(this.availableTodayCheckbox).toBeChecked();       
    }
    
    async verifyOffersAvailableChip() {            
        const isMobileVisible = await this.offersAvailableChip.isVisible();
        if (isMobileVisible){
            await expect(this.offersAvailableChip).toBeVisible();
        } else {
            await expect(this.offersAvailableChipDesktop).toBeVisible();
        }
    }

    async verifyViewAllOfferLink() {           
        await expect(this.viewAllOfferLink).toBeVisible();      
    }
    async verifyPriceAfterSale() {           
        await expect(this.priceAfterSale).toBeVisible();      
    }

    async verifyOfferRebateText() {           
        await expect(this.offerRebateText).toBeVisible();      
    }

    async verifyOffersAvailableCheckbox() {           
        await expect(this.offersAvailableCheckbox).toBeChecked();       
    }
    async verifyHighestRatedCheckbox() {       
        expect(await this.highestRatedCheckbox.isChecked).toBeTruthy();         
    }
    async verifyHighestRatingCard() {           
        await expect(this.highestRatingCard).toBeVisible();  
    }

    async verifyTopTireResultsCards() {
        await expect(this.topTireResultsCards).toBeVisible();
    }

    async verifyAffirmPromoBanner() {
        await expect(this.affirmPromoBanner).toBeVisible();
    }

    async verifyAffirmPromoBannerWithGlobalFilters() {
        await pageFixture.page.waitForTimeout(10000);
        await expect(this.affirmPromoBannerWithGlobalFilters).toBeVisible();
    }

    async verifyWheelFinderPage() {
        try {
          await this.wheelFinder.isVisible();
          console.log("Wheel Finder page is visible.");
        } catch (error) {
          console.error("Error verifying Wheel Finder page visibility:", error);
        }
      }

      async selectFilterInTireResultsPage(brand: string): Promise<void> {
    const page = pageFixture.page;
 
    // Locator for the brand filter label
    const brandFilterSelection = page.locator(
      `//input[@aria-describedby='facet-0-6']/..//label[text()='${brand}']`
    );
 
    // Unique sub-filters only
    const subFilterOptions = [
      "Availability",
      "Pricing",
      "Tire Type",
      "Tire Features",
      "Tread Life",
      "Speed Rating",
      "Load Range",
    ];
 
    // Scroll and interact with brand dropdown
    await this.brandDropDownFilter.scrollIntoViewIfNeeded();
    await this.brandDropDownFilter.click();
 
    // Wait for the brand filter to be attached and visible before clicking
    await brandFilterSelection.waitFor({ state: "visible", timeout: 5000 });
    await brandFilterSelection.click();
 
    // Check each sub-filter visibility
    for (const optionText of subFilterOptions) {
      const filterOption = page.locator(`//h4[text()='${optionText}']`);
 
      await filterOption.waitFor({ state: "visible", timeout: 5000 });
      const actualText = await filterOption.innerText();
      const isVisible = await filterOption.isVisible();
 
      console.log(`Element text: ${actualText}, Visible: ${isVisible}`);
      expect(isVisible).toBe(true);
    }
 
    // Validate the brand is visible in the results
    const resultLocator = `//ul[@id="result-list"]//span[@class="horizontal-result-card__brand" and text()="${brand}"]`;
    const found = await CommonMethods.scrollUpUntilVisible(resultLocator);
    expect(found).toBe(true);
  }
 
 async clearFiltersAndVerifyTireResults(brand: string): Promise<void> {
  const page = pageFixture.page;
 
  // Click "Clear Filters" button
  await this.clearTireResultsFilterBtn.click();
 
  // Scroll to ensure checkbox is in view (if still present)
  const wasScrolled = await CommonMethods.scrollUpUntilVisible(
    `//label[contains(text(),'${brand}')]`
  );
  expect(wasScrolled).toBe(true);
 
  // Updated locator using correct attribute
  const brandCheckbox = page.locator(
    `//input[@type='checkbox' and @data-gtm-option-label='${brand}']`
  );
 
  // Check if checkbox exists
  const checkboxCount = await brandCheckbox.count();
  expect(checkboxCount).toBe(1);
 
  const isChecked = await brandCheckbox.first().isChecked();
  console.log(`Checkbox for '${brand}' is checked: ${isChecked}`);
  expect(isChecked).toBe(false);
 
  // Verify brand not visible in first search result
  const brandInResultsLocator = page.locator(
    `//li[@class='horizontal-result-card card horizontal-search-results__list-item'][1]//span[text()='${brand}']`
  );
  const isBrandVisible = await brandInResultsLocator.isVisible();
  console.log(
    `Brand '${brand}' visible in results after clearing filters: ${isBrandVisible}`
  );
  expect(isBrandVisible).toBe(false);
}

}


