import { test } from "@playwright/test"

test("Radio Button Task ", async ({ page }) => {

    await page.goto("https://leafground.com/radio.xhtml");

    const card = page.locator(`.card`);

    const cardCount = await card.count();

    for (let i = 0; i < cardCount; i) {

        getChecketButton(await card.nth(i++))

    }

    async function getChecketButton(card) {

        const radioLocator = card.locator(`input[type="radio"]:checked`)

        for (let i = 0; i <await radioLocator.count(); i) {

            const selectedButton = await radioLocator.nth(i++).getAttribute("id");

            const selectedValue = await page.locator(`label[for='${selectedButton}']`).textContent();

            console.log(selectedValue)
        }
    }



})