
function launchBrowsers(browserName){
    if(browserName == "chrome"){
        console.log(`Browser name is ${browserName}`)
    }
    else if(browserName == "edge"){
        console.log(`Browser name is ${browserName}`)
    }
    else if(browserName == "firefox"){
        console.log(`Browser name is ${browserName}`)
    }
}

function runTests(testName){
    switch(testName){
        case "smoke":
            console.log("Running Smoke Tests")
            break;
        case "sanity":
            console.log("Running Sanity Tests")
            break;
        case "regression":
            console.log("Running Regression Tests")
            break;
        default:
            console.log("Running Smoke Tests")
    }
}


let browserName = "chrome";
let testName = "sanity";

launchBrowsers(browserName);
runTests(testName);