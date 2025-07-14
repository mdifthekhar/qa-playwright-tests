import {
  LaunchOptions,
  chromium,
  firefox,
  webkit,
  Browser,
  BrowserContext,
  devices,
} from "@playwright/test";

type BrowserType = "chrome" | "firefox" | "webkit" | "android" | "iphone";

const options: LaunchOptions = {
  headless: true,
  slowMo: 90,
  args: ["--ignore-certificate-errors"],
};

export const invokeBrowser = async (): Promise<{
  browser: Browser;
  context: BrowserContext;
}> => {
  const browserType = process.env.BROWSER as BrowserType;
  let browser: Browser;
  let context: BrowserContext;

  switch (browserType) {
    case "chrome":
      browser = await chromium.launch(options);
      context = await browser.newContext();
      break;
    case "firefox":
      browser = await firefox.launch(options);
      context = await browser.newContext();
      break;
    case "webkit":
      browser = await webkit.launch(options);
      context = await browser.newContext();
      args: ["--ignore-certificate-errors"];
      break;

    case "android":
      const androidDevice = devices["Pixel 5"];
      browser = await chromium.launch(options);
      context = await browser.newContext({
        ...androidDevice,
        userAgent: androidDevice.userAgent,
        viewport: androidDevice.viewport,
        deviceScaleFactor: androidDevice.deviceScaleFactor,
        isMobile: true,
        hasTouch: true,
      });
      break;
    case "iphone":
      const iphoneDevice = devices["iPhone 11"];
      browser = await webkit.launch(options);
      args: ["--ignore-certificate-errors"];
      context = await browser.newContext({
        ...iphoneDevice,
        userAgent: iphoneDevice.userAgent,
        viewport: iphoneDevice.viewport,
        deviceScaleFactor: iphoneDevice.deviceScaleFactor,
        isMobile: true,
        hasTouch: true,
      });
      break;
    default:
      throw new Error("Unsupported browser type!");
  }

  return { browser, context };
};
