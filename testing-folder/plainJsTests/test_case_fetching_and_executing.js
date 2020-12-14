const testUtils = require('./test_global_util')

const fetchTestCases = (id) => {
    // NOTE: fetch testcases based on id
    return [{
        display_text: 'Should Pass',
        criteria: `assert(convertToUpperCase('sadfasd') === 'SADFASD')`,
    }, {
        display_text: 'Should Fail',
        criteria: `assert(convertToUpperCase('sadfasd') === 'sADFASD')`,
    }]
}

const fetchTestCasesAndExecuteThem = async (id) => {
    const testCases = fetchTestCases(id)
    const results = await testUtils.runTests(testCases)
    console.log('results', results);
    return results
}

fetchTestCasesAndExecuteThem('1')