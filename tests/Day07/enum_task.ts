
enum Environment  {
    LOCAL,
    DEVELOPMENT,
    STAGING,
    PRODUCTION
}

function runTests( env : Environment) : void{
    console.log(Environment[env]);
    return;
}

runTests(Environment.LOCAL);
runTests(Environment.STAGING);
runTests(Environment.PRODUCTION);