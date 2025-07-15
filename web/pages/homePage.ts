import { Page, Locator, expect } from "@playwright/test";
import { pageFixture } from "../../support/hooks/pageFixture";
import exp = require("constants");
import commonMethods, * as CommonMethods from '../commonMethods';


let page: Page;
//const URL = "https://qa.belletire.com/homepage";

export default class HomePage {
    page: any;
    storeLogo: Locator;
    selectVehicleYearButton: Locator;
    globalNavLangIcon: Locator;
    globalFooterLogo: Locator;
    shopForTiresButton: Locator;
    searchByVehicle:Locator;
    searchByTireSize:Locator; 
    scheduleAnAppointment: Locator;
    searchByVehicleDropdown: Locator;
    searchBySizeDropDown: Locator;
    vehicleAlignmentDropDown: Locator;
    mechanicalVehicleInspectionDropDown: Locator;
    tiresAndWheelsMenuItem: Locator;
    wheelFinderMenuItem: Locator;
    enTireLifeMenuItem: Locator;
    flyoutEntireLife: Locator;
    ourCompanyMenuItem: Locator;
    flyoutOurCompany: Locator;
    flyoutTipsAndGUides: Locator;
    tipsAndGuidesMenuItem: Locator;
    autoServiceMeniItem: Locator;
    flyoutAutoService: Locator;
    offersAndSavingsMeniItem: Locator;
    flyoutOffersAndSavings: Locator;
    locationItem: Locator;
    promoSliderCard: Locator;
    promoSliderArrowButton: Locator;
    viewAllOffersButton: Locator;
    globalFooterHeaderContactUs: Locator;
    globalFooterContactsList: Locator;
    globalFooterCareers: Locator;
    globalFooterGiftCards: Locator;
    globalFooterGiftCardsPage: Locator;
    globalFooterGiftCardPageMobile: Locator;
    globalFooterScheduleAppointment: Locator;
    globalFooterScheduleAppointmentPage: Locator;
    globalFooterScheduleAppointmentPageMobile: Locator;
    globalFooterFAQ: Locator;
    globalFooterFAQPage: Locator;
    globalFooterFAQPageMobile: Locator;
    globalFooterFleetVehicleServices: Locator;
    globalFooterFleetVehicleServicesPage: Locator;
    globalFooterFleetVehicleServicesPageMobile: Locator;
    globalFooterPrivacyPolicy: Locator;
    globalFooterPrivacyPolicyPage : Locator;
    globalFooterContactUs: Locator;
    globalFooterContactUsPage: Locator;
    globalFooterSocial: Locator;
    globalFooterSocialFacebookIcon: Locator;
    globalFooterSocialFacebookPage: Locator;
    globalFooterSocialYoutubeIcon: Locator;
    globalFooterSocialYoutubePage: Locator;
    globalFooterCareersPage: Locator;
    typeOfAppointment: Locator;
    vehicleAlignment: Locator;
    scheduleNowButton: Locator;
    visualVehicleInspection: Locator;
    salesTaxAmount: Locator;
    tiresAndWheelsMenu: Locator;
    autoServiceMenu: Locator;
    tipsAndGuidesMenu: Locator;
    offersSavingsMenu: Locator;
    ourCompanyMenu: Locator;
    allMenuItems: Locator;
    chatDismissButton: Locator;
    toggleButton: Locator;
    menuList: Locator;
    subNavLinks: Locator;
    globalCloseButton: Locator;
    acceptAllCookiesButton: Locator;
    enTireLifeMenu: Locator;

    constructor(page: Page) {
        this.page = page;
        this.storeLogo = pageFixture.page.locator("//*[@class='global-nav__logo']");
        this.selectVehicleYearButton = pageFixture.page.locator("//*[text()='Select vehicle year']").first();
        this.globalNavLangIcon = pageFixture.page.locator("//*[@class='global-nav-lang-icon-list-item-desktop']");
        this.globalFooterLogo = pageFixture.page.locator("//*[@class='global-footer__logo-image']");
        this.shopForTiresButton = pageFixture.page.locator("(//button[@type = 'button'])[1]");
        this.searchByVehicle= pageFixture.page.locator("(//*[@title = 'Search by vehicle'])[1]");    
        this.searchByTireSize= pageFixture.page.locator("//*[text()= 'Search by tire size']");
        this.scheduleAnAppointment = pageFixture.page.locator("//*[text()='Schedule an appointment']").first();
        this.searchByVehicleDropdown = pageFixture.page.locator("//*[@id='exp_scheduleAnAppointment_elem_1']");
        this.searchBySizeDropDown = pageFixture.page.locator("//*[@id='exp_scheduleAnAppointment_elem_2']");
        this.vehicleAlignmentDropDown = pageFixture.page.locator("//*[@id='exp_scheduleAnAppointment_elem_3']");
        this.mechanicalVehicleInspectionDropDown = pageFixture.page.locator("//*[@id='exp_scheduleAnAppointment_elem_4']");
        this.tiresAndWheelsMenuItem = pageFixture.page.locator("//*[@role='menuitem' and text()='Tires & Wheels']");
        this.wheelFinderMenuItem = pageFixture.page.locator("//a[@href='/wheel-finder']");
        this.autoServiceMeniItem = pageFixture.page.locator("//*[@role='menuitem' and text()='Auto Service']");
        this.offersAndSavingsMeniItem = pageFixture.page.locator("//*[@role='menuitem' and text()='Offers & Savings']");
        this.enTireLifeMenuItem = pageFixture.page.locator("//*[@role='menuitem' and text()='enTireLife™']");
        this.ourCompanyMenuItem = pageFixture.page.locator("//*[@role='menuitem' and text()='Our Company']");
        this.tipsAndGuidesMenuItem = pageFixture.page.locator("//*[@role='menuitem' and text()='Tips & Guides']");
        this.flyoutEntireLife = pageFixture.page.locator("//*[@class='global-subnav__flyout-title' and contains(text(),'enTireLif')]");
        this.flyoutOurCompany = pageFixture.page.locator("//*[@class='global-subnav__flyout-title' and contains(text(),'Our Company')]");
        this.flyoutTipsAndGUides = pageFixture.page.locator("//*[@class='global-subnav__flyout-title' and contains(text(),'Tips & Guides')]");
        this.flyoutAutoService = pageFixture.page.locator("//*[@class='global-subnav__flyout-title' and contains(text(),'Auto Service')]");
        this.flyoutOffersAndSavings = pageFixture.page.locator("//*[@class='global-subnav__flyout-title' and contains(text(),'Offers & Savings')]");
        this.locationItem = pageFixture.page.locator("//*[@class='global-nav__item-location-wrapper ']");
        this.promoSliderCard = pageFixture.page.locator("//*[@class='promo-slider__card-container']");
        this.promoSliderArrowButton = pageFixture.page.locator("//button[@class='promo-slider__arrow']").last();
        this.viewAllOffersButton = pageFixture.page.locator("//*[text()='View all offers']");
        this.globalFooterHeaderContactUs = pageFixture.page.locator("//*[@class='global-footer__header' and text()='Contact us']");
        this.globalFooterContactsList = pageFixture.page.locator("//*[@class='global-footer__contacts-list']");
        this.globalFooterCareers = pageFixture.page.locator("//*[@class='global-footer__link' and text()='Careers']").last();
        this.globalFooterCareersPage = pageFixture.page.locator("//*[text()='Search Openings']");
        this.globalFooterGiftCards = pageFixture.page.locator("//*[@class='global-footer__link' and text()='Gift cards']").last();
        this.globalFooterGiftCardsPage = pageFixture.page.locator("//*[@class='generic-hero__headline generic-hero__headline-desktop']");
        this.globalFooterGiftCardPageMobile = pageFixture.page.locator("//*[@class='h1 generic-hero__headline generic-hero__headline-mobile']")
        this.globalFooterScheduleAppointment = pageFixture.page.locator("//*[@class='global-footer__link' and text()='Schedule Appointment']").last();
        this.globalFooterScheduleAppointmentPage = pageFixture.page.locator("//h1[text()='Quotes & Appointments']");
        this.globalFooterScheduleAppointmentPageMobile = pageFixture.page.locator("//div[text()='Quotes & Appointments']");
        this.globalFooterFAQ = pageFixture.page.locator("//*[text()='FAQ']").last();
        this.globalFooterFAQPage = pageFixture.page.locator("//h1[text()='Frequently Asked Questions']");
        this.globalFooterFAQPageMobile = pageFixture.page.locator("//div[text()='Frequently Asked Questions']");
        this.globalFooterFleetVehicleServices = pageFixture.page.locator("//*[@class='global-footer__link' and text()='Fleet Vehicle Services']").last(); 
        this.globalFooterFleetVehicleServicesPage = pageFixture.page.locator("//h1[text()='Fleet Services']");
        this.globalFooterFleetVehicleServicesPageMobile = pageFixture.page.locator("//div[text()='Fleet Services']");
        this.globalFooterPrivacyPolicy = pageFixture.page.locator("//*[@class='global-footer__link' and text()='Privacy Policy']").last();
        this.globalFooterPrivacyPolicyPage = pageFixture.page.locator("//h1[text()='Privacy Policy']");
        this.globalFooterContactUs = pageFixture.page.locator("//*[@class='global-footer__link' and text()='Contact Us']").last();
        this.globalFooterContactUsPage = pageFixture.page.locator("//h1[text()='Contact Us']");
        this.globalFooterSocial = pageFixture.page.locator("//*[@class='global-footer__social']");
        this.globalFooterSocialFacebookIcon = pageFixture.page.locator("//*[@alt='Facebook icon']");
        this.globalFooterSocialFacebookPage = pageFixture.page.locator("(//*[text()='See more on Facebook'])[1]");
        this.globalFooterSocialYoutubeIcon = pageFixture.page.locator("//*[@alt='Youtube Icon']");
        this.globalFooterSocialYoutubePage = pageFixture.page.locator("//*[@class='style-scope ytd-channel-name' and text()='Belle Tire']");
        this.typeOfAppointment = pageFixture.page.locator('.store-map__schedule-appointment-select');
        this.vehicleAlignment = pageFixture.page.locator("li[id='exp_typeOfAppointment_elem_1']");
        this.scheduleNowButton = pageFixture.page.locator("//*[text()='Schedule now']");
        this.visualVehicleInspection = pageFixture.page.locator("//li[@title='Visual Vehicle Inspection']");
        this.salesTaxAmount = pageFixture.page.locator("//div[@class='quote-pricing-tires__label' and contains(text(),'Sales tax for:')]/following-sibling::div[@class='quote-pricing-tires__value']");
        this.tiresAndWheelsMenu = pageFixture.page.locator(CommonMethods.getDynamicXPath('menu','Tires & Wheels'));
        this.autoServiceMenu = pageFixture.page.locator(CommonMethods.getDynamicXPath('menu','Auto Service'));
        this.tipsAndGuidesMenu = pageFixture.page.locator(CommonMethods.getDynamicXPath('menu','Tips & Guides'));
        this.offersSavingsMenu = pageFixture.page.locator(CommonMethods.getDynamicXPath('menu','Offers & Savings'));
        this.ourCompanyMenu = pageFixture.page.locator(CommonMethods.getDynamicXPath('menu','Our Company'));
        this.allMenuItems = pageFixture.page.locator(CommonMethods.getDynamicXPath('class','global-nav__item-link'));
        this.chatDismissButton = pageFixture.page.locator(CommonMethods.getDynamicXPath('class','button-header-control'));
        this.globalCloseButton = pageFixture.page.locator(CommonMethods.getDynamicXPath('class','global-nav__toggle-button'));
        this.toggleButton = pageFixture.page.locator('.global-nav__toggle-button');
        this.menuList = pageFixture.page.locator('.global-nav__menu-container-list');
        this.subNavLinks = pageFixture.page.locator('.global-subnav__secondary-links');
        this.acceptAllCookiesButton = pageFixture.page.locator(CommonMethods.getDynamicXPath('class','onetrust-banner-options'));
        this.enTireLifeMenu = pageFixture.page.locator(CommonMethods.getDynamicXPath('menu','enTireLife™'));

    }
    async validateLogo() {
        await this.storeLogo.isVisible();
        await pageFixture.page.waitForTimeout(1000);
    }

    async validateselectVehicleYearButton() {
        await this.selectVehicleYearButton.isVisible();
    }

    async validateGlobalNavLangIcon () {
        await this.globalNavLangIcon.isVisible();
    }

    async validateGlobalFooterLogo() {
        await this.globalFooterLogo.isVisible();
        await expect(this.globalFooterLogo).toBeVisible();
    }

    async validateHomePageURL() {       
        await pageFixture.page.goto(process.env.homePageURL);   
    }

    async clickOnShopForTiresButton() {
        await this.shopForTiresButton.click();
    }

    async verifyShopForTiresButton() {
        await expect(this.shopForTiresButton).toBeVisible();
    }

    async clickOnSearchByVehicle() {
        await this.searchByVehicle.click();
    }

    async verifySearchByVehicle() {
        await expect(this.searchByVehicle).toBeVisible();
    }

    async clickOnSearchByTireSize() {
        await this.searchByTireSize.click(); 
    }
    async verifySearchByTireSize() {
        await expect(this.searchByTireSize).toBeVisible();
    }
    async verifyScheduleAnAppointment() {
        await expect(this.scheduleAnAppointment).toBeVisible();
    }
    async clickScheduleAnAppointment() {
        await this.scheduleAnAppointment.click();
    }

    async verifySearchByVehicleDropdown() {
        await expect(this.searchByVehicleDropdown).toBeVisible();
    }

    async verifySearchBySizeDropDown() {
        await expect(this.searchBySizeDropDown).toBeVisible();
    }

    async verifyVehicleAlignmentDropDown() {
        await expect(this.vehicleAlignmentDropDown).toBeVisible();
    }

    async verifyMechanicalVehicleInspectionDropDown() {
        await expect(this.mechanicalVehicleInspectionDropDown).toBeVisible();
    }


    async clickTiresAndWheelsMenuItem() {
        await this.tiresAndWheelsMenuItem.click();
    }

    async clickWheelFinderMenuItem() {
        await expect(this.wheelFinderMenuItem).toBeVisible();
        await this.wheelFinderMenuItem.click();
    }

    async clickandVerifyEnTireLifeMenuItem() {
        await this.enTireLifeMenuItem.click();
        await expect(this.flyoutEntireLife).toBeVisible();
    }
    async clickandVerifyOurCompanyMenuItem() {
        await this.ourCompanyMenuItem.click();
        await expect(this.flyoutOurCompany).toBeVisible();
    }
    async clickandVerifyTipsAndGuidesMenuItem() {
        await this.tipsAndGuidesMenuItem.click();
        await expect(this.flyoutTipsAndGUides).toBeVisible();
    }

    async clickandVerifyAutoServiceMenuItem() {
        await this.autoServiceMeniItem.click();
        await expect(this.flyoutAutoService).toBeVisible();
    }

    async clickandVerifyOffersAndSavings() {
        await this.offersAndSavingsMeniItem.click();
        await expect(this.flyoutOffersAndSavings).toBeVisible();
    }
    async clickAndVerifyLocationItem() {
        await this.locationItem.click();
        await expect(this.locationItem).toBeVisible();
    }

    async verifyPromoSliderCard() {
        await expect(this.promoSliderCard).toBeVisible();
    }

    async clickPromoSliderArrowButton() {
        await this.promoSliderArrowButton.click();
    }

    async verifyViewAllOffersButton() {
        await expect(this.viewAllOffersButton).toBeVisible();
    }

    async verifyHomePageGlobalFooterLinks() {
        await pageFixture.page.waitForTimeout(1000);
        await expect(this.globalFooterHeaderContactUs).toBeVisible();
        await expect(this.globalFooterContactsList).toBeVisible();
        await expect(this.globalFooterCareers).toBeVisible();
        await expect(this.globalFooterGiftCards).toBeVisible();
        await expect(this.globalFooterScheduleAppointment).toBeVisible();
        await expect(this.globalFooterFAQ).toBeVisible();
        await expect(this.globalFooterFleetVehicleServices).toBeVisible();
        await expect(this.globalFooterPrivacyPolicy).toBeVisible();
        await expect(this.globalFooterContactUs).toBeVisible();
        await expect(this.globalFooterSocial).toBeVisible();
        await expect(this.globalFooterSocialFacebookIcon).toBeVisible();
        await expect(this.globalFooterSocialYoutubeIcon).toBeVisible();
    }

    async clickGlobalFooterCareers() {
        await this.globalFooterCareers.click();
      }
      
    async verifyGlobalFooterGiftCards() {
        await this.globalFooterGiftCards.click();
        await pageFixture.page.waitForTimeout(4000);
        const isDesktopExist = await this.globalFooterGiftCardsPage.isVisible();
        await pageFixture.page.waitForTimeout(4000);
        if (isDesktopExist) {
            await expect(this.globalFooterGiftCardsPage).toBeVisible();
        } else {
            await expect(this.globalFooterGiftCardPageMobile).toBeVisible();
        }
        await pageFixture.page.goBack();
        await expect(this.globalFooterGiftCards).toBeVisible();
    }

    async verifyGlobalFooterScheduleAppointmentlink() {            
        await this.globalFooterScheduleAppointment.click();
        await pageFixture.page.waitForTimeout(4000);
        const isDesktopVisible = await this.globalFooterScheduleAppointmentPage.isVisible();
        await pageFixture.page.waitForTimeout(4000);
        if (isDesktopVisible){
            await expect(this.globalFooterScheduleAppointmentPage).toBeVisible();
        } else {
            await expect(this.globalFooterScheduleAppointmentPageMobile).toBeVisible();
        }
        await pageFixture.page.goBack();
        await expect(this.globalFooterScheduleAppointment).toBeVisible();
    }

    async clickGlobalFooterScheduleAppointmentlink() {
        await this.globalFooterScheduleAppointment.click();
    }

    async verifyGlobalFooterFAQ() {
        await this.globalFooterFAQ.click();
        await pageFixture.page.waitForTimeout(4000);
        const isDesktopVisible = await this.globalFooterFAQPage.isVisible();
        await pageFixture.page.waitForTimeout(4000);
        if (isDesktopVisible){
            await expect(this.globalFooterFAQPage).toBeVisible();
        } else {
            await expect(this.globalFooterFAQPageMobile).toBeVisible();
        }
        await pageFixture.page.goBack();
        await expect(this.globalFooterFAQ).toBeVisible();
    }

    async verifyGlobalFooterFleetVehicleServices() {
        await this.globalFooterFleetVehicleServices.click();
        await pageFixture.page.waitForTimeout(4000);
        const isDesktopVisible = await this.globalFooterFleetVehicleServicesPage.isVisible();
        await pageFixture.page.waitForTimeout(4000);
        if (isDesktopVisible){
            await expect(this.globalFooterFleetVehicleServicesPage).toBeVisible();
        } else {
            await expect(this.globalFooterFleetVehicleServicesPageMobile).toBeVisible();
        }
        await pageFixture.page.goBack();
        await expect(this.globalFooterFleetVehicleServices).toBeVisible();
    }

    async verifyGlobalFooterPrivacyPolicy() {
        await this.globalFooterPrivacyPolicy.click();
        await expect(this.globalFooterPrivacyPolicyPage).toBeVisible();
        await pageFixture.page.goBack();
        await expect(this.globalFooterPrivacyPolicy).toBeVisible();
    }

    async verifyGlobalFooterContactUs() {
        await this.globalFooterContactUs.click();
        await expect(this.globalFooterContactUsPage).toBeVisible();
        await pageFixture.page.goBack();
        await expect(this.globalFooterContactUs).toBeVisible();
    }

    async verifyGlobalFooterSocialFacebookIcon() {
        await this.globalFooterSocialFacebookIcon.click();
        await expect(this.globalFooterSocialFacebookPage).toBeVisible();
        await pageFixture.page.goBack();
        await expect(this.globalFooterSocialFacebookIcon).toBeVisible();
    }

    async verifyGobalFooterSocialYoutubeIcon() {
        await this.globalFooterSocialYoutubeIcon.click();
        await expect(this.globalFooterSocialYoutubePage).toBeVisible();
        await pageFixture.page.goBack();
        await expect(this.globalFooterSocialYoutubeIcon).toBeVisible();
    }
    async clickOnTypeOfAppointment() {
        await this.typeOfAppointment.click();
    }

    async clickVehicleAlignment() {
        await this.vehicleAlignment.click();
    }

    async clickScheduleNowButton() {
        await this.scheduleNowButton.click();
    }

    async clickVisualVehicleInspection() {
        await this.visualVehicleInspection.click();
        await pageFixture.page.waitForTimeout(2000);
    }

    async clickvehicleAlignmentDropDown() {
        await this.vehicleAlignmentDropDown.click();
    }

    async clickmechanicalVehicleInspectionDropDown() {
        await this.mechanicalVehicleInspectionDropDown.click();
    }

    async clickToggleButtonIfNeeded() {
        const toggleButton = await pageFixture.page.$('button.global-nav__toggle-button');
        if (toggleButton && await toggleButton.isVisible()) {
            await toggleButton.click();
            //console.log("Global navigation toggle button clicked.");
            await pageFixture.page.waitForTimeout(500);
        }
    }

    async verifySalesTaxAmount() {
        const salesTaxLabelLocator = await pageFixture.page.locator(
            "//div[@class='quote-pricing-tires__label' and contains(text(),'Sales tax for:')]"
        );
    
        const stateText = await salesTaxLabelLocator.textContent();
        
        if (!stateText) {
            console.log('Sales tax label not found.');
            return;
        }
    
        const stateAbbreviation = stateText.split(':')[1]?.trim();
    
        if (!stateAbbreviation) {
            console.log('State abbreviation not found.');
            return;
        }
    
        const salesTaxValueLocator = await pageFixture.page.locator(
            "//div[@class='quote-pricing-tires__label' and contains(text(),'Sales tax for:')]/following-sibling::div[@class='quote-pricing-tires__value']"
        );
    
        const salesTaxText = await salesTaxValueLocator.textContent();
        if (!salesTaxText) {
            console.log('Sales tax value not found.');
            return;
        }
    
        const salesTaxAmount = parseFloat(salesTaxText.replace('$', '').trim());

        if (salesTaxAmount > 0 && stateAbbreviation === 'OH') {
            console.log(`Sales tax for ${stateAbbreviation} is greater than 0: $${salesTaxAmount}`);
        } else if (salesTaxAmount === 0 && (stateAbbreviation === 'IL' || stateAbbreviation === 'MI' || stateAbbreviation === 'IN')) {
            console.log(`Sales tax is not added for ${stateAbbreviation}.`);
        } else {
            console.log(`Sales tax for ${stateAbbreviation} is $${salesTaxAmount}, which doesn't match the expected condition.`);
        }
    }

    async clickGlobalCloseButton() {
        const toggleButton = await pageFixture.page.$('button.global-nav__toggle-button');
        if (toggleButton && await toggleButton.isVisible()) {
            await toggleButton.click();
            console.log("Global navigation toggle button clicked.");
            await pageFixture.page.waitForTimeout(500);
        }
    }

    async clickAcceptAllCookiesButton() {
        if (await this.acceptAllCookiesButton.isVisible()) {
            await this.acceptAllCookiesButton.click();
        }
    }

    async verifyClickChatDismissButton() {
        if (await this.chatDismissButton.isVisible()) {
            await this.chatDismissButton.click();
        }
    }

    async clickOnHomePageMenu(menuName: string): Promise<void> {
        let menuLocator: Locator;
        if (menuName === 'Tires & Wheels') {
            menuLocator = this.tiresAndWheelsMenu;
        } else if (menuName === 'Auto Service') {
            menuLocator = this.autoServiceMenu;
        } else if (menuName === 'Tips & Guides') {
            menuLocator = this.tipsAndGuidesMenu;
        } else if (menuName === 'Offers & Savings') {
            menuLocator = this.offersSavingsMenu;
        } else if (menuName === 'Our Company') {
            menuLocator = this.ourCompanyMenu;
        } else if (menuName === 'enTireLife™') {
            menuLocator = this.enTireLifeMenu;
        }
        else {
            throw new Error(`Menu '${menuName}' is not recognised.`);
        }
        await menuLocator.click();
    }

    async validateHomePageMenuItems(menuItem: string, menuName:string, expectedMenuPage: string): Promise<void> {
        await this.clickToggleButtonIfNeeded();
        await this.clickAcceptAllCookiesButton();
        await this.verifyClickChatDismissButton();
        await this.clickOnHomePageMenu(menuName);
        const menuItemName = this.page.locator(`a:text("${menuItem}")`).nth(0);
        await menuItemName.click();
        await this.page.waitForTimeout(6000);
        const pageTitle = await this.page.title();
        console.log(pageTitle);
        await expect(pageTitle).toContain(expectedMenuPage);
    }
    
}