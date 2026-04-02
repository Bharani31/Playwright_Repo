import { expect, test } from "@playwright/test"

test("Breakout Task for Alert handle", async ( {page} ) => {

    await page.goto("https://www.leafground.com/alert.xhtml");

    const promptInput = "Sucessfully given input in prompt"

    page.on("dialog", async(alert) => {

        alert.accept(promptInput);

    })

    await page.locator(`[id="j_idt88:j_idt104"]`).click();

    await expect(page.locator("#confirm_result")).toContainText(`User entered name as: ${promptInput}`);

} )