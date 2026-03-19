import { test, expect } from "@playwright/test";

test("Assertions task", async( {page} ) => {

    await page.goto(`https://leafground.com/input.xhtml`);
    
    await expect(page.locator(`#j_idt88\\:j_idt93`)).toBeDisabled();

    await expect(page.locator(`#j_idt88\\:name`)).toBeEditable();

    await page.locator(`#j_idt88\\:name`).fill(`Bhaaranidharan Kandasamy`);

    await expect.soft(page.locator(`#j_idt106\\:float-input`)).toBeDisabled();

})