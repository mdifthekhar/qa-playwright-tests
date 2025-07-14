import { Page, Locator, expect } from "@playwright/test";
import { pageFixture } from "../../support/hooks/pageFixture";

let page: Page;

export default class AffirmPaymentPage {
    page: any;
    headlineAppointmentConfirmed: Locator;
    affirmPopUp: Locator
    mobileNumberFieldAffirm: Locator;
    continueButtonAffirm: Locator;
    pinVerificationPopUp: Locator;
    pinFieldAffirm: Locator;
    threeMonthsPlan: Locator;

    constructor(page: Page) {
        this.page = page;    
        this.affirmPopUp = pageFixture.page.locator("//*[@class='iframeable']");
        this.mobileNumberFieldAffirm = pageFixture.page.locator("//*[@aria-label='Mobile number']");
        this.continueButtonAffirm = pageFixture.page.locator("//*[text()='Continue']");
        this.pinVerificationPopUp = pageFixture.page.locator("//div[@id='phone-pin-modal']");
        this.pinFieldAffirm = pageFixture.page.locator("//input[@aria-label='PIN']");
        this.threeMonthsPlan = pageFixture.page.locator("//span[text()=' for 3 months']");
        
    }

    async VerifyAffirmPopUp() {
        expect(await this.headlineAppointmentConfirmed.isVisible).toBeTruthy();
    } 

    async verifyPinVerificationPopUp() {
        expect(await this.headlineAppointmentConfirmed.isVisible).toBeTruthy();
    } 

    async enterMobileNumber(mobileNumber: string) {
        this.mobileNumberFieldAffirm.fill(mobileNumber);
    } 

    async enterPin(pin: string){
        this.pinFieldAffirm.fill(pin);
    }

    async clickContinueButton() {
        this.continueButtonAffirm.click();
    }

    async verifyAffirmPaymentProcess() {
        const iframeElementHandle = await pageFixture.page.waitForSelector("//iframe[@class='affirm-sandbox-iframe']");
        const mobileNumberFieldAffirm = "//input[@aria-label='Mobile number']";
        const confirmButton = "//button[text()='Confirm']";
        const continueButton = "//*[text()='Continue']";
        const pinFieldAffirm = "//input[@aria-label='PIN']";
        const threeMonthsPlan = "//span[text()='every month for 3 months']";
        const chooseThisPlanButton = "//button[text()='Choose this plan']";
        const onOffButton = "//div[@data-testid='indicator']";
        const disclosureCheckbox= "//div[@data-testid='disclosure-checkbox-indicator']";
        const appointmentConfirmationMessage = "//h1[text()='Your appointment is confirmed!']";
    const iframe = await iframeElementHandle.contentFrame();
    if (iframe) {
        await iframe.fill(mobileNumberFieldAffirm,"3135555555");
        await expect(continueButton).toBeTruthy();
        await iframe.click(continueButton);
        await expect(pinFieldAffirm).toBeTruthy();
        await iframe.fill(pinFieldAffirm,"123456");
        await expect(threeMonthsPlan).toBeTruthy();
        await iframe.click(threeMonthsPlan);
        await expect(chooseThisPlanButton).toBeTruthy();
        await iframe.click(chooseThisPlanButton);
        await iframe.click(onOffButton);
        await iframe.click(disclosureCheckbox);
        await expect(confirmButton).toBeTruthy();
        await iframe.click(confirmButton);
        await pageFixture.page.mainFrame().waitForSelector(appointmentConfirmationMessage);
    }
    }

}