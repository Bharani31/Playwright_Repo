// BaseUrl=http://leaftaps.com/opentaps/control/main
// LF_Username=demosalesmanager
// LF_Password=crmsfa


import { expect, test } from "@playwright/test"


test("Merge Lead using Page Handling" , async( {page, context} ) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.getByRole("textbox", {name : "Username"}).fill("demosalesmanager");

    await page.getByRole("textbox", {name : "Password"}).fill("crmsfa");

    await page.getByRole("button", {name : "Login"}).click();

    await page.locator("#button").click();

    await page.getByRole("link", {name : "Leads"}).click();

    await page.getByRole("link", {name: "Merge Leads"}).click();



    const leadSub = context.waitForEvent("page");

    await page.getByAltText("Lookup").first().click();

    const leadFirstPage = await leadSub;

    await leadFirstPage.waitForEvent("domcontentloaded");

    const firstLead = await leadFirstPage.locator(".linktext").first().innerText();

    await leadFirstPage.locator(".linktext").first().click();

    const content = await page.locator("#ComboBox_partyIdFrom").inputValue();

    expect(content).toBe(firstLead);

    console.log(content);



    const [toLeadPage] = await Promise.all([ context.waitForEvent("page"), page.getByAltText("Lookup").last().click()]);

    await toLeadPage.waitForEvent("domcontentloaded")

    const secondLeadValue = await toLeadPage.locator(".linktext").nth(5).innerText();

    console.log(secondLeadValue);

    await toLeadPage.locator(".linktext").nth(5).click();

    const toLeadContent = await page.locator("#ComboBox_partyIdTo").inputValue();

    expect(toLeadContent).toBe(secondLeadValue);



    page.on("dialog",async(alert) => {
        alert.accept()
    })

    await page.locator(".buttonDangerous").click();

    await page.waitForEvent("load");
    
    const finalTitle = await page.title();

    console.log(finalTitle);

    expect(finalTitle).toBe("View Lead | opentaps CRM")

})


