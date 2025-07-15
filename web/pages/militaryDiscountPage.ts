import { Page, Locator, expect, Browser } from "@playwright/test";
import { pageFixture } from "../../support/hooks/pageFixture";
import { Console } from "console";

let page: Page;
let browser: Browser;

let mil_dis_emailID: String =
  "partner+belle-tire-distributors-mil-220824-f52e11@id.me";
let mil_dis_pswd: String = "HmXjNy2K4bC!";

export default class MilitaryDiscountPage {
  [x: string]: any;
  page: any;
  VerifywithId: Locator;
  verifygroup: Locator;
  continuesingin: Locator;
  mil_disc_email: Locator;
  mil_disc_pwd: Locator;
  mil_disc_singIn: Locator;
  // checkbox: Locator;

  constructor(page: Page) {
    this.page = page;

    this.VerifywithId = pageFixture.page.locator(
      "//img[@alt='Verify with ID.me']"
    );
    this.mil_disc_email = pageFixture.page.locator("//input[@id='user_email']");
    this.mil_disc_pwd = pageFixture.page.locator(
      "//input[@id='user_password']"
    );
    this.mil_disc_singIn = pageFixture.page.locator(
      "//input[@value='Sign in']"
    );
    //this.checkbox = pageFixture.page.locator("//input[@type='checkbox']");
  }

  async verifyMilitaryDiscountID() {
    await pageFixture.page.waitForTimeout(4000);
    await expect(this.VerifywithId).toBeVisible();
    console.log("element is visible");
    try {
      console.log("Entered into try block");
      await pageFixture.page.waitForTimeout(4000);
      await this.VerifywithId.click();
      console.log("clicked on verify ID");
      await pageFixture.page.waitForTimeout(2000);
    } catch {
      console.log("element is not clicked at try so entered to catch ");
      await this.VerifywithId.dispatchEvent("click");
      console.log("clicked on verify ID");
      await pageFixture.page.waitForTimeout(2000);
    }
  }
  async verifytheSelectedGroup(group: String) {
    console.log("The groupname is :" + group);
    this.verifygroup = pageFixture.page.locator(
      "//label[text()='" + group + "']/preceding-sibling::input[@type='radio']"
    );
    expect(await this.verifygroup.isChecked).toBeTruthy();
    console.log(group + " is selected ");
  }

  async clickactionOnTextbutton(text: String) {
    console.log("The text is :" + text);
    this.continuesingin = pageFixture.page.locator("//button[contains(text(),'" + text + "')]");
    await this.continuesingin.click();
    console.log("Clicked on Singin");
  }

  async militaryDiscountSingnIn() {
    // console.log("entered into SignIn Method");
    // await page.pause();
    // await pageFixture.page.waitForTimeout(60000);

    // const context = await browser.newContext();
    // console.log("New context");
    // const client = await context.newCDPSession(page);
    // console.log("New CDPsession");
    // console.log("navigated to page api.id.me");
    // // Access the root node of the DOM
    // const { root } = await client.send("DOM.getDocument");

    // // Query the shadow host
    // const { nodeId: shadowHostNodeId } = await client.send(
    //   "DOM.querySelector",
    //   {
    //     nodeId: root.nodeId,
    //     selector: "//div[@id='rvwE0']/div/div", // Adjust the selector to match the shadow host
    //   }
    // );

    // if (!shadowHostNodeId) {
    //   console.log("Shadow host not found!");
    // }

    // console.log(`Shadow Host Node ID: ${shadowHostNodeId}`);

    // // Find the iframe within the shadow host
    // const { nodeId: iframeNodeId } = await client.send("DOM.querySelector", {
    //   nodeId: shadowHostNodeId,
    //   selector: "iframe#cf-chl-widget-abbvw", // Adjust the iframe selector
    // });

    // if (!iframeNodeId) {
    //   console.error("Iframe not found!");
    // }

    // console.log(`Iframe Node ID: ${iframeNodeId}`);

    // // Resolve the iframe's backend node ID

    // // Switch to the iframe context
    // const iframeElement = await page.$("iframe#cf-chl-widget-abbvw");
    // const iframe = await iframeElement.contentFrame();

    // if (!iframe) {
    //   console.log("Failed to switch to the iframe context!");
    // }

    // // Interact with elements inside the iframe (e.g., checkbox)
    // await iframe.locator("text=Verify you are human").click();

    // console.log("Clicked on the checkbox inside the iframe.");

    // await expect(this.page.locator("//input[@type='checkbox']")).toBeVisible();
    // console.log("Element is visible");
    // await this.page.locator("//input[@type='checkbox']").click();
    console.log("entered into signin details page");
    await pageFixture.page.waitForTimeout(6000);
    await this.page.fill('//input[@id="user_email"]', mil_dis_emailID);
    console.log("Email is entered :" + mil_dis_emailID);
    await this.page.fill(this.mil_disc_pwd, mil_dis_pswd);
    console.log("ENtered password is :" + mil_dis_pswd);
    await this.mil_disc_singIn.click();
  }
  async testbot() {
    // Select all hidden inputs inside the element with ID 'rvwE0'
    const hiddenInputs = await pageFixture.page.$$("#rvwE0 input[type=hidden]");
    console.log("hiddeninputs : ", hiddenInputs);
    for (const input of hiddenInputs) {
      await input.evaluate((el) => el.setAttribute("isChecked", "true"));
    }

    console.log("Clicked on the checkbox");
  }
}
