import {expect, test} from "@playwright/test";

test("Launch a Browser : ", async( {page} ) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("Demosalesmanager");
    await page.locator("#password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.locator("#button").click();
    await page.getByRole('link', {name:'Leads'}).click();
    await page.getByRole('link', { name: 'Create Lead' }).click();
    await page.locator("#createLeadForm_companyName").fill("XCS");
    await page.locator("#createLeadForm_firstName").fill("Bharanidharan");
    await page.locator("#createLeadForm_lastName").fill("Kandasamy");
    await page.locator("#createLeadForm_personalTitle").fill("Testleaf");
    await page.locator("#createLeadForm_generalProfTitle").fill("BharaniTestLeaf");
    await page.locator("#createLeadForm_annualRevenue").fill("450000");
    await page.locator("#createLeadForm_departmentName").fill("ECE");
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9080238888");
    await page.locator(".smallSubmit").click();
    await expect(page).toHaveTitle(/View Lead/);

    const title = await page.title();
    console.log(title)


})