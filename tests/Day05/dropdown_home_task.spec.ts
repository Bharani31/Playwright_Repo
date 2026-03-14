import test from "@playwright/test";

test("Dropdown home task", async ({page}) =>{

    await page.goto("https://leafground.com/select.xhtml");
    await page.selectOption(`//select[@class="ui-selectonemenu"]`, {label : "Playwright"});

    let allAutomationTool = page.locator(`//select[@class="ui-selectonemenu"]/option`);
    const toolCount = await allAutomationTool.count();

    for(let i = 1; i < toolCount ; i++){
        const toolName = await allAutomationTool.nth(i).textContent();
        console.log(`tool ${i} : ${toolName}`)
    }

    await page.locator(`//label[@id="j_idt87:country_label"]`).click();
    await page.locator(`//li[@id ='j_idt87:country_3']`).click();
    
    let allcountry = page.locator(`//select[@id="j_idt87:country_input"]/option`);
    const countryCount = await allcountry.count();

    for(let i = 1; i < countryCount ; i++){
        const countryName = await allcountry.nth(i).textContent();
        console.log(`Country ${i} : ${countryName}`)
    }
    
    await page.locator(`//label[@id='j_idt87:city_label']`).click();

    if (await page.locator(`//li[@id='j_idt87:city_2']`).isVisible()){
        await page.locator(`//li[@id='j_idt87:city_2']`).click();
        console.log(`Cities belongs to Country is loaded as expected`)
    }else{
        console.log(`Cities belongs to Country is not loaded`)
    }

    const courses = ["AWS", "Playwright", "PostMan"];

    for (const course of courses){

        await page.locator(`//div[@id="j_idt87:auto-complete"]/button`).click();
        await page.locator(`//li[@data-item-label='${course}']`).click();
    }

    await page.locator(`//label[@id='j_idt87:lang_label']`).click();
    await page.locator(`//li[@id='j_idt87:lang_2']`).click();

    await page.locator(`//label[@id='j_idt87:value_label']`).click();
    await page.locator(`//li[@id='j_idt87:value_1']`).click();

})