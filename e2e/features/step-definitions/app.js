const {Given, When, Then} = require('@cucumber/cucumber');
const {navigateToPage,confirmMultipleTextVisibility,click,confirmSelectionValidity} = require('../common/action');

Given('A user visits localhost:3000', navigateToPage);
Then('the user should see the following', confirmMultipleTextVisibility);
When('clicks on a checkbox', click);
Then('the user should see selected', confirmSelectionValidity);
