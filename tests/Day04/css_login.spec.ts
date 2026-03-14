import { test } from "@playwright/test";

test("To Launch a Browser", async({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.locator(`#username`).fill("dilipkumar.rajendran@testleaf.com")

    await page.locator(`#password`).fill("TestLeaf@2025")

    await page.locator(`.decorativeSubmit`).click()

    await page.waitForTimeout(3000)

    if (await page.locator(`.slds-truncate`).nth(2).isVisible()){
        console.log(`User Sucessfully loged in`)
    }else{
        console.log(`Not able to login`)
    }

    

});