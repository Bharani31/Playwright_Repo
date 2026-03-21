import { expect, Locator, test } from "@playwright/test"

test("Radio Button Task ", async ({ page }) => {

    await page.goto("https://leafground.com/radio.xhtml");

    const card = page.locator(`.card`);

    const cardCount = await card.count();

    console.log("Default selected Radio Buttons are : ")

    await cardLoop();

    async function cardLoop() {

        for (let i = 0; i < cardCount; i++) {

            await getChecketButton(card.nth(i));

        }

    }

    async function getChecketButton(card: Locator) {

        const radioLocator = card.locator(`input[type="radio"]:checked`);

        const countRadioButton = await radioLocator.count();

        if (countRadioButton === 1) {

            await expect(radioLocator).toHaveCount(1);

            const selectedButton = await radioLocator.getAttribute("id");

            const selectedValue = await page.locator(`label[for='${selectedButton}']`).textContent();

            console.log(selectedValue)


        }
    }

    await page.locator(`label[for='j_idt87:console1:3']`).click();

    await expect(page.locator(`label[for='j_idt87:console1:3']`)).toBeChecked();

    await page.locator(`label[for='j_idt87:city2:0']`).click();

    await expect(page.locator(`label[for='j_idt87:age:1']`)).toBeChecked();

    console.log("Selected Radio buttons are : ")

    await cardLoop();

})