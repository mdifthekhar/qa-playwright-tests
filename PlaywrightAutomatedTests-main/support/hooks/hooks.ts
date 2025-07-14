import { BeforeAll, AfterAll, Before, After, Status, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Page, Browser, BrowserContext, devices } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { invokeBrowser } from "../browsers/browserManager";
import { getEnv } from "../env/env";
import path = require("path");
 
const fs = require("fs-extra");
 
let browser: Browser;
let context: BrowserContext;

setDefaultTimeout(60000);

BeforeAll(async function () {
    getEnv();
    const browserContext = await invokeBrowser();
    browser = browserContext.browser;
    context = browserContext.context;
});

Before(async function () {
    const browserType = process.env.BROWSER;
 
    // Apply geolocation and device emulation for mobile devices
    if (browserType === 'android') {
        const androidDevice = devices['Pixel 5']; // Use the latest Pixel device descriptor
        context = await browser.newContext({
            ...androidDevice,
            geolocation: { latitude: 41.654167, longitude: -88.202611 },
            permissions: ['geolocation'],
            isMobile: true,
            hasTouch: true
        });
    } else if (browserType === 'iphone') {
        const iphoneDevice = devices['iPhone 11']; // Use the latest iPhone device descriptor
        context = await browser.newContext({
            ...iphoneDevice,
            geolocation: { latitude: 41.654167, longitude: -88.202611 },
            permissions: ['geolocation'],
            isMobile: true,
            hasTouch: true
        });
    } else {
        // For desktop browsers, apply geolocation settings
        context = await browser.newContext({
            geolocation: { latitude: 41.654167, longitude: -88.202611 },
            permissions: ['geolocation']
            
        });
    }
 
    const page = await context.newPage();
    pageFixture.page = page;
});
 
After(async function ({ pickle, result }) {
    const screenshotPath = `./test-results/screenshots/${pickle.name}.png`;

    // Delete the screenshot if it already exists before taking a new one
    if (fs.existsSync(screenshotPath)) {
        fs.unlinkSync(screenshotPath);  // delete the screenshot
    }

    // Screenshot on failure
    if (result?.status === Status.FAILED) {
        // Capture the screenshot
        const img = await pageFixture.page.screenshot({ path: screenshotPath, type: 'png', timeout: 5000 });

        // Attach the screenshot to the report
        await this.attach(img, 'image/png');
    }
    await pageFixture.page.close();
});
 
AfterAll(async function () {
    await browser.close();
});
