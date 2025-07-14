import { Page, Locator, expect } from "@playwright/test";
import { pageFixture } from "../../support/hooks/pageFixture";

let page: Page;

export default class ScheduleAppointmentPage {
    page: any;
    headingScheduleAppointment: Locator
    nextWeekButton: Locator
    selectAppointmentTime: Locator
    confirmButton: Locator
    findTiresNowButton: Locator;
    scheduleAppointmentButton: Locator;
    findWheelsNowButton: Locator;

    constructor(page: Page) {
        this.page = page;    
        this.headingScheduleAppointment = pageFixture.page.locator("//h1[text()='Schedule Appointment']");
        this.nextWeekButton = pageFixture.page.locator("//button[@class='schedule__week-range-button']");
        this.selectAppointmentTime = pageFixture.page.locator("//*[contains(@class,'schedule__row schedule__time-slot')]").last();
        this.confirmButton = pageFixture.page.locator("//span[text()='Confirm']/parent::button");
        this.findTiresNowButton = pageFixture.page.locator("//span[text()='Find tires now']");
        this.scheduleAppointmentButton = pageFixture.page.locator("//span[text()='Schedule appointment']");
        this.findWheelsNowButton = pageFixture.page.locator("//span[text()='Find wheels now']")

    }

    async verifyScheduleAppointmentPage() {
        expect(await this.headingScheduleAppointment.isVisible).toBeTruthy();
    } 

    async clickAppointmentTime() {
        await this.selectAppointmentTime.click();
    } 

    async clickNextWeekButton() {
        await this.nextWeekButton.click();
    } 

    async clickConfirmButton() {
        await this.confirmButton.click();
    } 

    async verifyfindTiresNowButton() {
        expect(await this.findTiresNowButton.isVisible).toBeTruthy();
    } 

    async clickfindTiresNowButton() {
        expect(await this.findTiresNowButton.isVisible).toBeTruthy();
        await this.findTiresNowButton.click();
    } 

    async clickScheduleAppointmentButton() {
        await this.scheduleAppointmentButton.first().click();
    }

    async clickScheduleAppointmentButtonForVisualInspection() {
        await this.scheduleAppointmentButton.last().click();
    }
    async clickFindWheelsNowButton() {
        expect(await this.findWheelsNowButton.isVisible).toBeTruthy();
        await this.findWheelsNowButton.click();
    } 

}