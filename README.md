# ReactNative_JobSkills
Follow below steps to run this project:-

1) open terminal
2) run "npm install"
3) run "cd ios && pod install && cd .."
4) To run on Android "react-native run-android" or To run on ios "react-native run-ios"


Testing

Just run yarn test. This will run jest with any parameters you give the command. Currently snapshots are being used only to identify changes.

Coverage

When run on the CI, jest will output coverage reports of how much of the code is being tested. This will be improved and maintained at or above 90% coverage.

Output Coverage: yarn test --coverage

Coverage reports will be output to the console in text format and to the coverage folder in an LCOV based html format. Once coverage is run, you can check the coverage report found in the coverage/lcov-report/index.html file in the project, or you CodeClimate as the results are also reported there.
