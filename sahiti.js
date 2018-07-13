const wdio = require("webdriverio");

const opts = {
  port: 4723,
  desiredCapabilities: {
    platformName: "Android",
    platformVersion: "8.1.0",
    deviceName: "oneplus ONEPLUSA5000",
    app: "/home/lokesh/workspace/Sahiti/app-debug.apk",
    automationName: "UiAutomator2"
  }
};



const client = wdio.remote(opts);

client
  .init()
  .click('android=new UiSelector().text("Continue with Facebook")')
  // .end();
