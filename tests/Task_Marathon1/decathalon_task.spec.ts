import { expect, test } from "@playwright/test";

test("Decathalon Maraton", async ({ page }) => {

    await page.goto("https://www.decathlon.in/");

    await expect(page).toHaveURL("https://www.decathlon.in/");

    await page.getByText("Search for").first().click();

    await page.getByRole('textbox').fill("Shoe");

    await page.getByRole('textbox').press("Enter");

    await expect(page.getByAltText("Search Filter")).toBeVisible();

    await page.getByText("Running (65)").click();

    await page.waitForTimeout(3000)

})