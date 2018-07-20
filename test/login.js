const { opts } = require('../config');
const { facebookButton } = require('../screens/login');
const { getElementByText } = require('../helper');

describe('AndroidTest', () => {
  const wdio = require('webdriverio');
  const client = wdio.remote(opts);
  console.log("'" + getElementByText(facebookButton) + "'");
  console.log(facebookButton);
  it('allows User to login with facebook', () => {
    // client
    //   .init()
    //   .click('android=new UiSelector().text("Continue with Facebook")');
    client
      .init()
      .click("'" + getElementByText(facebookButton) + "'")
      .pause(2000)
      .end();
  });
});
