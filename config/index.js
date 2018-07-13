const opts = {
  port: 4723,
  desiredCapabilities: {
    platformName: 'Android',
    platformVersion: '8.1.0',
    deviceName: 'OnePlus5',
    app: '/home/lokesh/workspace/Sahiti/app-debug.apk',
    automationName: 'UiAutomator2'
  }
};
module.exports = {
  opts
};
