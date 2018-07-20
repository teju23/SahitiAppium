const getElementByText = function(text) {
  return `android=new UiSelector().text("${text}")`;
};
module.exports = {
  getElementByText
};
