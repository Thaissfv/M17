const { join } = require('path')

exports.config = {
    hostname: '127.0.0.1',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.js',
    ],
    framework: 'mocha',
    capabilities: [{
        'platformName': 'Android',
        'platformVersion': '9',
        'deviceName': 'aula_17',
        'automationName': 'UiAutomator2',
        'app': join(process.cwd(), './app/android/loja-ebac.apk'),
        //'appPackage': 'com.woocommerce.android',
        //'appActivity': '.ui.main.MainActivity',
        'appWaitActivity': 'com.woocommerce.android.ui.login.LoginActivity',
        "systemPort": 8202
    }],
    maxInstances: 1

}