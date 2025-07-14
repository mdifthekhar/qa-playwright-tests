import * as fs from 'fs';
import * as path from 'path';
import { Page } from 'playwright/test';
import { pageFixture } from '../support/hooks/pageFixture';

let page: Page;
const jsonPath = path.join(__dirname, 'xpaths.json');
let xpaths: Record<string, string> = {};

export default class commonMethods {
    page: any;

    constructor(page: Page) {
        this.page = page;
       // coupon_savings_strt : string;
        
}
}

if (fs.existsSync(jsonPath)) {
    try {
        const data = fs.readFileSync(jsonPath, 'utf8');
       // console.log("🔹 Raw JSON content:", data);  // ✅ Debugging statement
        xpaths = JSON.parse(data);
      //  console.log("🔹 Parsed XPaths:", xpaths);   // ✅ Debugging statement
    } catch (error) {
        console.error(`Error reading or parsing ${jsonPath}:`, error);
    }
} else {
    console.error(` Error: File not found at ${jsonPath}`);
}
//console.log("Available keys in XPaths:", Object.keys(xpaths)); 
export function getDynamicXPath(key: string, value: string): string {
    if (!xpaths || Object.keys(xpaths).length === 0) {
        throw new Error(`XPath data is not loaded properly.`);
    }

    let xpath = xpaths[key];
    if (!xpath) {
        //console.error("Available keys:", Object.keys(xpaths)); // ✅ Debugging statement
        throw new Error(`XPath key "${key}" not found.`);
    }

    return xpath.replace('{}', value);
}

/**
* Gradually scrolls up and checks if the element becomes visible.
* @param selector Selector (CSS or XPath) of the element to look for
* @param step Number of pixels to scroll up per iteration
* @param maxAttempts Maximum number of scroll attempts
* @returns true if visible, false if not found
*/
export async function scrollUpUntilVisible(
  selector: string,
  step: number = 100,
  maxAttempts: number = 12
): Promise<boolean> {
  for (let i = 0; i < maxAttempts; i++) {
    const locator = pageFixture.page.locator(selector);
    const count = await locator.count();
 
    for (let j = 0; j < count; j++) {
      const element = locator.nth(j);
      if (await element.isVisible()) {
        return true;
      }
    }
    // Scroll up by `step` pixels
    await pageFixture.page.evaluate((scrollStep) => {
      window.scrollBy(0, -scrollStep);
    }, step);
 
    // Allow time for re-render/layout shift
    await pageFixture.page.waitForTimeout(2000);
  }
 
  return false;
}
 

