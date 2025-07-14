import { Page, Locator, expect } from "@playwright/test";
import { pageFixture } from "../../support/hooks/pageFixture";

let page: Page;

export default class ContactInformationPage {
    page: any;
    headlineContactInformationPage: Locator  
    nextStepButton: Locator;
    emailAddress: Locator;

  constructor(page: Page) {
    this.page = page;

        this.nextStepButton = pageFixture.page.locator("//span[text()='Next step']");
        this.headlineContactInformationPage = pageFixture.page.locator("//*[text()='Contact Information']").first();
        this.emailAddress = pageFixture.page.locator('//input[@name="email"]');
    }

  async verifyContactInformationPage() {
    expect(await this.headlineContactInformationPage.isVisible);
  }

  async clicknextStepButton() {
    await this.nextStepButton.click();
  }

  async enterContactInformation(
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber: string
  ) {
    await this.page.fill("input[name='firstName']", firstName);
    await this.page.fill('input[name="lastName"]', lastName);
    await this.page.fill('//input[@name="email"]', emailAddress);
    await this.page.fill('//input[@name="phone"]', phoneNumber);
    //console.log("Entered all the details");
  }
}
