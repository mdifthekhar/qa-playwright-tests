import { Page, Locator, expect } from "@playwright/test";
import { pageFixture } from "../../support/hooks/pageFixture";
import QuotePage from "./quotePage";

let page: Page;
let quotePage: QuotePage;

export default class ReviewAndConfirmPage {
    page: any;
    confirmAppointmentButton: Locator;
    purchaseButton: Locator;
    headerReviewAndConfirm: Locator;
    purchaseAndSetAppointmentButton: Locator;
    reviewPurchaseButton: Locator;
    strTotaldue: any;
    nextButton: Locator;

        

    constructor(page: Page) {
        this.page = page;
        this.confirmAppointmentButton = pageFixture.page.locator("//span[text()='Confirm appointment']/parent::button");
        this.purchaseButton = pageFixture.page.locator("//*[text()='Purchase']");
        this.headerReviewAndConfirm = pageFixture.page.locator("//*[contains(text(),'Review & Confirm')]");
        this.purchaseAndSetAppointmentButton = pageFixture.page.locator("//span[text()='Purchase & Set Appointment']/parent::button");
        this.reviewPurchaseButton =pageFixture.page.locator("//span[text()='Review Purchase']");
        this.nextButton = pageFixture.page.locator("//span[text()='Next']");
    }

  async clickConfirmAppointmentButton() {
    await this.confirmAppointmentButton.click();
  }

    async clickPurchaseButton() {
        await expect(this.purchaseButton).toBeVisible();
        await this.purchaseButton.scrollIntoViewIfNeeded();
        await this.purchaseButton.click();
    } 
    
    async verifyReviewAndConfirmPage() {
        await expect(this.headerReviewAndConfirm).toBeVisible();
    }
    async clickPurchaseAndSetAppointmentButton() {
        await this.purchaseAndSetAppointmentButton.click();
    } 

    async clickReviewPurchaseButton() {
        await expect(this.nextButton).toBeVisible();
        await this.nextButton.scrollIntoViewIfNeeded();
        await this.nextButton.click();
    } 

    async clickNextButton() {
        await expect(this.nextButton).toBeVisible();
        await this.nextButton.scrollIntoViewIfNeeded();
        await this.nextButton.click();
    }

}

    
