const { opts } = require('../config');
const { fbLoginButton } = require('../screens/login');
const { getElementByText } = require('../helper');

describe('AndroidTest', () => {
  const wdio = require('webdriverio');
  const client = wdio.remote(opts);

  it('allows User to login with facebook', async () => {
    await client.init().click(getElementByText(fbLoginButton));
    done();
  });
});
