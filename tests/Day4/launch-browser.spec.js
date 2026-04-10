import { chromium, test } from '@playwright/test'

test("To launch a browser", async({page}) => {
      await page.goto("https://www.google.com/?zx=1774627892037&no_sw_cr=1");



});