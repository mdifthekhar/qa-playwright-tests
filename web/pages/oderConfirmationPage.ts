import { Page, Locator, expect } from "@playwright/test";
import { pageFixture } from "../../support/hooks/pageFixture";

let page: Page;

export default class OrderConfirmationPage {
    page: any;
    OrderConfirmationNumber: Locator;
    headerAppointmentConfirmationPage: Locator;
    orderNumber: Locator;
    

    constructor(page: Page) {
        this.page = page;    
        this.OrderConfirmationNumber = pageFixture.page.locator("//span[text()='Confirmation Number:']/following-sibling::span[@class='quote__order-details-item-value'] | //span[text()='Quote Number:']/following-sibling::span[@class='quote__order-details-item-value']");
        this.headerAppointmentConfirmationPage = pageFixture.page.locator("h1.appointment-masthead__headline", {hasText: 'Your appointment is confirmed!'});
        this.orderNumber = pageFixture.page.locator("//div[contains(text(), 'Order number: ')]");
    }

    async verifyOrderConfirmationNuber() {
        await this.OrderConfirmationNumber.waitFor({ state: 'visible', timeout: 8000 });
        await expect(this.OrderConfirmationNumber).toBeVisible();
        const confirmationNumber = await this.OrderConfirmationNumber.textContent();
        console.log("Order Confirmation Number is:", confirmationNumber);
    }

    async verifyAppointmentConfirmationPage() {
        await expect(this.headerAppointmentConfirmationPage).toBeVisible();
    }
    async verifyOrderNumber() {
        await expect(this.orderNumber).toBeVisible();
    }

}