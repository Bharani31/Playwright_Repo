import { test, chromium, expect, firefox } from "@playwright/test"

test("Launiching 2 browsers with 2 diff task : ", async( ) =>{

    const edgeBrowser = await chromium.launch({ channel : 'msedge', headless: false})
    const edgeContext = await edgeBrowser.newContext()
    const edgePage = await edgeContext.newPage()

    await edgePage.goto("https://www.redbus.in/")
    await expect(edgePage).toHaveTitle(/redBus/)

    const edgeTitle = await edgePage.title()
    const edgeURL = edgePage.url()

    console.log(`Sucessfully navigated to the RedBus page in Edge browser. Page title is ${edgeTitle} and page URL is ${edgeURL}`)

    const foxBrowser = await firefox.launch()
    const foxContext = await foxBrowser.newContext()
    const foxPage = await foxContext.newPage()

    await foxPage.goto("https://www.flipkart.com/")
    await expect(foxPage).toHaveTitle(/Shopping/)
    
    const foxTitle = await foxPage.title()
    const foxURL = foxPage.url()

    console.log(`Sucessfully navigated to the Flipkart page in FireFox browser. Page title is ${foxTitle} and page URL is ${foxURL}`)

})