const { join } = require('path')
const allure = require('allure-commandline')

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.js',
    ],
    framework: 'mocha',
    services: ['appium'],
    capabilities: [{
        'platformName': 'Android',
        'platformVersion': '11',
        'deviceName': 'android-11',
        'automationName': 'UiAutomator2',
        'app': join(process.cwd(), './app/android/loja-ebac.apk'),
        'appPackage': 'com.woocommerce.android',
        'appActivity': 'com.woocommerce.android.ui.main.MainActivity',
        'appWaitActivity': 'com.woocommerce.android.ui.login.LoginActivity'
    }],
    maxInstances: 1,
    waitForTimeout: 20000,
    mochaOpts: {
        timeout: 300000
    }
}