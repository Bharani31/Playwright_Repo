import { test } from "@playwright/test";

test("To launch a browser", async ({ page }) => {

    await page.goto("https://test.parts360.nl");

    await page.waitForTimeout(3000);

});