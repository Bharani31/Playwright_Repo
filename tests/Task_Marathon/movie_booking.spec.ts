import { expect, Locator, test } from "@playwright/test"

test.use({ permissions: ['geolocation'] })

test("Movie Booking task", async ({ page, context }) => {

    // await context.grantPermissions(['geolocation'], {origin: 'https://www.pvrcinemas.com'});

    await page.goto("https://www.pvrcinemas.com/")

    await page.getByRole("heading", { name: "Chennai" }).click();

    // await page.getByRole("listitem", {name : "1"}).click();

    await page.getByRole("button", { name: "Book" }).first().click();

    // await page.getByAltText("DHURANDHAR THE REVENGE").click();

    // await page.getByRole("button", { name: "Book Now" }).click();

    await expect(page.locator('#language')).toBeVisible();

    await page.locator('#language').click();

    console.log("Trigger selected");

    await expect(page.getByRole("option", {name : "Tamil"})).toBeVisible();

    await page.getByRole("option", {name : "Tamil"}).click();

    await page.getByRole("heading", {name: "22"}).click();

    await page.getByRole("heading", {name : "PVR Grand Galada Chennai"}).click();

    await page.getByRole("heading", {name : "10:45 PM"}).last().click();

    await page.getByRole("button", {name : "Accept"}).click();

    await page.getByRole("heading", {name : "Terms & Conditions"}).waitFor( {state : "visible"})

    await page.getByText("Accept").click();

    let count = 0;

    for (let i = 9 ; i < 18 ; i++){

        const seat = page.locator(`#PE\\.PRIME\\|C\\:${i}`);

        if (await seat.isEnabled()){
            await seat.click();
            count++;
        }

        if(count === 3) {
            break;
        }

    }

    const ticketPrice = await page.locator(".grand-prices").textContent();

    console.log(`Total Amount is ${ticketPrice}`);

    await page.waitForTimeout(3000);

})