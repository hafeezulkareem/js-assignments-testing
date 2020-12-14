const fs = require("fs");
const chalk = require("chalk");

const { log } = console;
const failed = chalk.bold.grey.bgRed;
const passed = chalk.bold.grey.bgGreenBright;
const white = chalk.white;
const redBright = chalk.redBright;
const greenBright = chalk.greenBright;

const getTestFileName = (filePath) => {
    const items = filePath.split("/");
    return items[items.length - 1];
};

const showTestCaseResult = (testCase) => {
    const { title, status } = testCase;
    if (status === "passed") {
        log(`-> ${greenBright(title)}`);
    } else {
        log(`-> ${redBright(title)}`);
    }
};

const results = fs.readFileSync("./output.json");
const parsedResults = JSON.parse(results);

const { testResults: testSuitsResults } = parsedResults;

testSuitsResults.forEach((testSuit) => {
    const { name, status, assertionResults } = testSuit;
    if (status === "passed") {
        console.log(`${passed("PASS")} ${white(getTestFileName(name))}`);
    } else {
        console.log(`${failed("FAIL")} ${white(getTestFileName(name))}`);
    }

    assertionResults.forEach((testCase) => {
        showTestCaseResult(testCase);
    });
});
