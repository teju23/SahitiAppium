const getElementByText = text => {
  return `android=new UiSelector().text("{$text}")`;
};
module.exports = {
  getElementByText
};
