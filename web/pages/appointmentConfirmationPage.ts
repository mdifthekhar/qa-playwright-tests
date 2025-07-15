import { Page, Locator, expect } from "@playwright/test";
import { pageFixture } from "../../support/hooks/pageFixture";

let page: Page;

export default class AppointmentConfirmationPage {
    page: any;
    headlineAppointmentConfirmed: Locator
    quoteNumber: Locator

    constructor(page: Page) {
        this.page = page;    
        this.headlineAppointmentConfirmed = pageFixture.page.locator("//h1[text()='Your appointment is confirmed!']");
        this.quoteNumber = pageFixture.page.locator("//span[@class='quote__order-details-item-value']").first();
    }

    async verifyHeadlineAppointmentConfirmed() {
        expect(await this.headlineAppointmentConfirmed.isVisible);
    } 

    async verifyQuoteNumber() {
        expect(await this.quoteNumber.isVisible);
    } 

}