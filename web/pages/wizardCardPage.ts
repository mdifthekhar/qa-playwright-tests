import { Page, Locator, expect } from "@playwright/test";
import { pageFixture } from "../../support/hooks/pageFixture";
import { Console } from "console";

let page: Page;

export default class WizardCardPage {
  page: any;
  selectVehicleTrim: Promise<Array<Locator>>;
  selectYear: Promise<Array<Locator>>;
  getTotalPrice: Locator;
  selectVehicle: Promise<Array<Locator>>;
  selectVehicleBody: Promise<Array<Locator>>;
  vehicleModel: Promise<Array<Locator>>;
  vehicleTiresSelect: Locator;
  nextStep: Locator;
  skipToResults: Locator;
  seedeatils: Locator;
  carmodel: Locator;
  tire_Details_Name: Locator;
  tireDetals_getTotalPrice: Locator;

    constructor(page: Page) {
        this.page = page;
        this.selectVehicleTrim = pageFixture.page.locator("//li[@role='option']").all();
        this.selectYear = pageFixture.page.locator("//a[@role='button']").all();  
        this.getTotalPrice = pageFixture.page.locator("(//*[contains(@class,'button button--primary horizontal-result-card__button')])[1]");
        this.selectVehicle = pageFixture.page.locator("//li[@role='option']").all();
        this.selectVehicleBody = pageFixture.page.locator("//li[@role='option']").all();
        this.vehicleModel = pageFixture.page.locator("//a[@role='button']").all();
        this.vehicleTiresSelect = pageFixture.page.locator ("//label[@for='allTires']"); 
        this.nextStep = pageFixture.page.locator("//button[@id='default']");
        this.skipToResults = pageFixture.page.locator("//a[text()='Skip to results '] | //*[text()='Get Tire Results ']");

    this.seedeatils = pageFixture.page.locator("(//a[@class='button button--secondary horizontal-result-card__button'])[1]");
    this.carmodel = pageFixture.page.locator("(//span[@class='horizontal-result-card__model'])[1]");
    this.tire_Details_Name = pageFixture.page.locator("//h1[@class='tire-details__name']");
    this.tireDetals_getTotalPrice = pageFixture.page.locator("//*[text()='Get total price']");
  }


  async clickOnVehicleMake(vehicleMake: string) {
    await pageFixture.page.getByText(vehicleMake).click();
    0;
  }
    
    async clickOnVehicleTrim(vehicleTrim:string) {
        await pageFixture.page.getByText(vehicleTrim).click();
    }
    async clickOnVehicleYear(year : string) {  
        await pageFixture.page.getByText(year).click();    
    }      
    async clickgetTotalPrice() {
        await expect(this.getTotalPrice).toBeVisible();
        await this.getTotalPrice.click();
    } 

  async clickOnVehicleBody(vehicleBody: string) {
    await pageFixture.page.getByText(vehicleBody).click();
  }

  async clickOnVehicleModel(model: string) {
    await pageFixture.page.getByText(model).click();
  }

  async clickOnSelectAllFourTires() {
    await this.vehicleTiresSelect.click();
  }
  async clickOnNextStep() {
    await this.nextStep.click();
  }
  async clickOnSkipToResults() {
    await this.skipToResults.click();
  }

  async clickOnSeeDetails(): Promise<string> {
    const car_model_name = await this.carmodel.innerText();
    console.log("selected car model is : " + car_model_name);
    await this.seedeatils.click();
    //console.log("Clicked on see details page");
    return car_model_name;
  }

  async carModelName(): Promise<string> {
    const car_model_name = await this.carmodel.innerText();
    return car_model_name;
  }

  async tireDetailspage(): Promise<string> {
    //console.log("Navigated to tire details page");
    const tire_name = await this.tire_Details_Name.innerText();
    return tire_name;
  }

  async getTotalprice_tiredetailspage() {
    await this.tireDetals_getTotalPrice.click();
    //console.log("clicked on total price");
  }
}
