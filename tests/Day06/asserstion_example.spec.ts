import test, { expect } from "@playwright/test"


test("Learn Assertions", async ({ page }) => {


    await page.goto('http://leaftaps.com/opentaps/control/main');


 //   await expect.soft(page.locator(`//input[@id="username"]`)).toBeDisabled({timeout:8000}); // locator assertion => auto retry assertions


    //page.locator(`//input[@id="username"]`) => locator object on which the validation has to be done


    const textBoxStatus = await page.locator(`//input[@id="username"]`).isEditable()


    console.log(textBoxStatus);    


    await page.locator(`//input[@id="username"]`).fill("demosalesmanager");


    await expect(page.locator(`//input[@id="password"]`)).toBeEmpty() // // locator assertion


    await page.locator(`//input[@id="password"]`).fill("crmsfa");


    await expect(page.locator(`//input[@class="decorativeSubmit"]`)).toBeEnabled(); // locator assertion


    await page.locator(`//input[@class="decorativeSubmit"]`).click();


    await page.locator(`//a[contains(text(),"CRM")]`).click();


    await page.locator(`//a[text()="Leads"]`).click();


    await page.locator(`//a[text()="Create Lead"]`).click();


    await page.locator(`//input[@id="createLeadForm_companyName"]`).fill("Testleaf");


    await page.locator(`//input[@id="createLeadForm_firstName"]`).fill("Ravindran");


    await page.locator(`//input[@id="createLeadForm_lastName"]`).fill("R");
//alt + shift + f => format document


    await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{value:"LEAD_DIRECTMAIL"}) // Method 1 : Using value


    // await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{label:"Direct Mail"}) // Method 2 : Using Visible text


    // await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{index:3}) // Method 3 : Using index text


    const alldropdownValues = page.locator(`(//select[@id="createLeadForm_dataSourceId"]/option)`); //13 webelements


    const dropDownCount = await alldropdownValues.count(); // Number of webeelement present in the dropdown
 
   // expect.soft(dropDownCount).toBeGreaterThan(15)
    
    for (let index = 0; index <dropDownCount; index++) {
       console.log( await alldropdownValues.nth(index).innerText());
    }


    // console.log( await alldropdownValues.nth(0).innerText()); //  blank
    // console.log(await alldropdownValues.nth(1).innerText()); //  Coldcall
  
    
    


    /* Step 1 : Locate the dropdown
    Steo2 : Choose the value from the dropdown by using the value attribute */


    /* Notes : When the DOM has select tag to handle a dropdown we should use selectOption method */
    
    await page.waitForTimeout(3000)// Note : Only for demo  purpose
    await page.locator(`//input[@name="submitButton"]`).click();
        await page.waitForTimeout(3000)// Note : Only for demo  purpose


    await expect(page.locator(`#viewLead_statusId_sp`)).toContainText("Assigned"); // locator assertion 



})