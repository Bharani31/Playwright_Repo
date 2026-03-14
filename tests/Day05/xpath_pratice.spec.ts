import { expect, test } from "@playwright/test";

test("Xpath pratice", async({page}) => {

    await page.goto("https://login.salesforce.com/");

    await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("//label[text()='Password']").fill("TestLeaf@2025")
    await page.locator(`#Login`).click()
    await expect(page).toHaveTitle(/Home | Salesforce/)

    if (await page.locator("//a[@title='Home']").isVisible()){
        console.log(`Sucessfully logged in Web Application and title of the page is "${await page.title()}"`)
    }else{
        console.log(`INVALID Username or Password`)
    }


    
})