import { chromium, test } from '@playwright/test'

test("To launch a browser", async() => {
    const browserInstance = await chromium.launch({ headless: false, chennel: "chrome"});
    const browserContext =await browserInstance.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://www.google.com/?zx=1774627892037&no_sw_cr=1");



});