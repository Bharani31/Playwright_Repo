import { expect, test } from "@playwright/test"

test( "Task for Checkbox", async ( {page}) => {

    await page.goto("https://leafground.com/checkbox.xhtml");

    await page.getByText("Basic", {exact: true}).click();

    await page.getByText("Ajax", {exact: true}).click();

    const notiAlert = page.getByRole("alert");

    await expect(notiAlert).toContainText("Checked");

    await notiAlert.waitFor({state : "hidden"});

    await page.getByText("Python").click();

    await page.locator("#j_idt87\\:ajaxTriState").click();

    const stateAlert = page.getByRole("alert");

    const stateAlertText = await stateAlert.innerText();

    console.log(`Alert Message : ${stateAlertText}`);

    await stateAlert.waitFor({state : "hidden"})

    await page.locator(`#j_idt87\\:j_idt100`).click();

    await expect(page.locator(`.ui-growl-title`)).toContainText("Checked");

    await page.locator(`#j_idt87\\:j_idt102`).isDisabled();

    const multiSelect = page.getByRole("list").nth(2);

    await multiSelect.click();

    await page.getByText("Paris").nth(1).click();

    await page.getByText("Amsterdam").nth(1).click();

    await page.getByText("Miami").nth(1).click();

    await page.getByRole("link",  {name : "Close"}).click();

    const selectedContent = await multiSelect.textContent();

    console.log(`Selected cities are : ${selectedContent}`);

})