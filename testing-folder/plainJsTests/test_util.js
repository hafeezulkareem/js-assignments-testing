const rewire = require('rewire')
const chai = require('chai')
const stringUtils = rewire('../src/stringUtils.js')

const runTest = async (testCase) => {
    const { display_text: displayText, criteria, functionName } = testCase
    // eslint-disable-next-line
    eval(`var ${functionName} = ${stringUtils.__get__(functionName)};`);
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
        responseObject['err'] = {
            message: err.message,
            stack: err.stack,
        }
        return responseObject
    }
}

const runTests = async (tests) => {
    const testResults = tests.map(async (eachTest) => await runTest(eachTest))
    const testsPromise = await Promise.all(testResults).then(values => values)
    return testsPromise
}

module.exports = { runTests }

