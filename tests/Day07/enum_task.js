var Environment;
(function (Environment) {
    Environment[Environment["LOCAL"] = 0] = "LOCAL";
    Environment[Environment["DEVELOPMENT"] = 1] = "DEVELOPMENT";
    Environment[Environment["STAGING"] = 2] = "STAGING";
    Environment[Environment["PRODUCTION"] = 3] = "PRODUCTION";
})(Environment || (Environment = {}));
function runTests(env) {
    console.log(Environment[env]);
    return;
}
runTests(Environment.LOCAL);
runTests(Environment.STAGING);
runTests(Environment.PRODUCTION);
