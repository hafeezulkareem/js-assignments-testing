const chai = require('chai');
const fs = require('fs');
const vm = require('vm');

var window = window || undefined;

if (window) {
    GLOBAL = window;
} else {
    const functionsFile = fs.readFileSync(process.cwd() + '/src/stringUtils.js');
    vm.runInThisContext(functionsFile); // file runs and it's contents has access to GLOBAL
}

const runTest = async (testCase) => {
    const { display_text: displayText, criteria } = testCase

    const assert = chai.assert
    const responseObject = {
        displayText: displayText,
        criteria: criteria,
    }

    try {
        // eslint-disable-next-line
        const testResult = eval(criteria)
        responseObject['status'] = 'PASS'
        responseObject['result'] = testResult
        if (testResult === undefined) {
            responseObject['result'] = true
        }
        return responseObject
    } catch (err) {
        if (!(err instanceof chai.AssertionError)) {
            console.error(err)
        }
        responseObject['status'] = 'FAIL'
        responseObject['err'] = { message: err.message }
        return responseObject
    }
}

const runTests = async (tests) => {
    const testResults = tests.map(async (eachTest) => await runTest(eachTest))
    const testsPromise = await Promise.all(testResults).then(values => values)
    return testsPromise
}

module.exports = { runTests }

