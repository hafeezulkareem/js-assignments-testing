#!/bin/sh
cp -r src/ ../cypress-testing/cypress/fixtures/
cd ../cypress-testing
yarn run test
