#!/bin/bash
# set -x
npm install
npm run test-unit
FILE_LOCATIONS="./test/unit-test.json"
TEST_TYPES="unittest"