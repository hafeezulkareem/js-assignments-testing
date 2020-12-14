#!/bin/sh
cp -r src/ ../cypress-testing/cypress/fixtures/
cd ../cypress-testing
yarn run test
# node ../testing-folder/generate_test_report.js
# node ../testing-folder/plainJsTests/test_case_fetching_and_executing.js