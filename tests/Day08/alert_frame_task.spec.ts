import { expect, test } from "@playwright/test"

test("Task for Alert and Frame handle", async ( {page} ) => {

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

    const resultFrame = page.frameLocator("#iframeResult");

    page.on("dialog", async(alert) => {

        console.log(alert.message());
        console.log(alert.type());
        alert.accept();

    })

    await resultFrame.getByRole("button", {name : "Try it"}).click();

    await expect(resultFrame.locator("#demo").first()).toContainText("You pressed OK!");

})