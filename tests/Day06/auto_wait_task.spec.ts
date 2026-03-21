import { expect, test } from "@playwright/test";

test("Auto wait Task " , async ( { page }) => {

    await page.goto("https://leafground.com/waits.xhtml");

    await page.locator(`button[id='j_idt87:j_idt89']`).click();

    await page.getByRole("button", {name : "I am here"}).waitFor( {state : "visible"});

    await page.locator(`button[id='j_idt87:j_idt92']`).click();

    await page.getByRole("button", {name : "I am about to hide"}).waitFor( {state : "hidden"});

    await expect(page.getByRole("button", {name : "Click First Button"})).toBeEnabled();

    await page.getByRole("button", {name : "Click First Button"}).click();

    await expect(page.getByRole("alert").first()).toBeVisible();

    await page.getByRole("alert").first().waitFor( {state : "hidden"} );

    console.log("Done");

    await page.getByRole("button", {name : "Click Second"}).click();

    await expect(page.getByRole("alert")).toHaveCount(0);

    await page.locator(`button[id='j_idt87:j_idt98']`).click();

    await expect(page.locator(`button[id='j_idt87:j_idt99']`)).toHaveText("Did you notice?", {timeout : 10000})

})