const {
    green,
    red,
    gray,
    cyan,
    white,
} = require('chalk');

const { log } = console;

class JestCustomReporter {
    constructor(globalConfig, options) {
        this._globalConfig = globalConfig;
        this._options = options;
    }

    recursivelyReport(prevTitle, testResults, resultsIndex, titlesIndex) {
        const testResult = testResults[resultsIndex];

        if (!testResult) {
            // exit at end of testResults array
            return;
        }

        const { ancestorTitles, status, title } = testResult;
        const currentTitle = ancestorTitles[titlesIndex];

        if (!currentTitle) {
            // if past the end of ancestorTitles, go back one index
            this.recursivelyReport(prevTitle, testResults, resultsIndex, --titlesIndex);
            return;
        }

        if (prevTitle !== currentTitle && titlesIndex < ancestorTitles.length) {
            // if new title encountered and not yet at the end of ancestorTitles, check next ancestorTitle
            log(white(currentTitle));
            this.recursivelyReport(currentTitle, testResults, resultsIndex, ++titlesIndex);
        } else {
            // otherwise log actual test and go onto next test
            this.recursivelyReport(currentTitle, testResults, ++resultsIndex, titlesIndex);
        }
    }

    onRunComplete(_test, results) {
        const {
            numFailedTests,
            numPassedTests,
            numPendingTests,
            testResults,
        } = results;

        log()

        testResults.forEach(({ testFilePath, testResults, failureMessage }) => {
            this.recursivelyReport(testFilePath, testResults, 0, 0);

            if (failureMessage) {
                log(failureMessage);
            }
        });

        if (numPassedTests) {
            log(green(`${numPassedTests} passed`));
        }

        if (numFailedTests) {
            log(red(`${numFailedTests} test failed`));
        }

        if (numPendingTests) {
            log(cyan(`${numPendingTests} are pending`));
        }
    }
}

module.exports = JestCustomReporter;