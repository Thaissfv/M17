const { join } = require('path')
//const allure = require('allure-commandline')
//const video = require('wdio-video-reporter')

exports.config = {
   hostname: 'localhost',
    port: 4723,
   path: '/wd/hub',
   services: ['appium'],
    specs: [
        './test/specs/**/*.js',
    ],
    framework: 'mocha',
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
   /*reporters: ['spec',
    ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: truenpm install wdio-video-reporter,
    }], 
    [video, {
      saveAllVideos: true, 
      videoSlowdownMultiplier: 50, 
    }]],
    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterStep: async function (step, scenario, { error, duration, passed }, context) {
          driver.takeScreenshot()
      }*/
}