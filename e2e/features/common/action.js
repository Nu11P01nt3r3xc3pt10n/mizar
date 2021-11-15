const {baseURL, email, password} = require('../../config');
const helper = require('./browser');
const selector = require('./selector');
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
const action = {
  navigateToPage: function() {
    return this.driver.get(baseURL);
  },

  confirmMultipleTextVisibility: async function(dataTable) {
    const arrayOfObjects = dataTable.hashes();
    const locateText = [];

    arrayOfObjects.forEach((value) => {
      const textArray = Object.values(value);
      const [text] = textArray;
      locateText.push(helper(this.driver).waitAndLocateByXpath(`//*[text()="${text}"]`));
    });

    await Promise.all(locateText);
  },

  click: async function() {
    await sleep(1500);
    const itemSelector = selector['input'];
    await helper(this.driver).waitAndLocateByXpath(itemSelector).click()
 
  },

  confirmSelectionValidity:async function() {
    await sleep(1500);
    return await  helper(this.driver).waitAndLocateByCSS(".selectedItem");    
  }
};

module.exports = action;