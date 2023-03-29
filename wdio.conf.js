exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.js',
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "9.0",
        "deviceName": "aula_17",
        "automationName": "UiAutomator2",
        "app": "C:\Users\isaac\Desktop\EBAC\Exercícios\M17\testes-mobile-ebac-shop\app\android\loja-ebac.apk",
        "appPackage": "com.woocommerce.android",
        "appActivity": ".ui.main.MainActivity",
        "appWaitActivity": ".ui.login.LoginActivity"
    }]

}
