class MyStoreScreen {
    get #myStoreLogo(){
        return $('~My store')
    }

    get #myStoreName(){
        return $('id:toolbar_subtitle')
    }

    get productScreen() {
        return $('id:com.woocommerce.android:id/products')
    }

    async getStoreName (){
        return await this.#myStoreName.getText()
    }

    async myStoreLogoIsDisplayed (){
        await this.#myStoreLogo.waitForExist()
        return await this.#myStoreLogo.isDisplayed()
    }

    async clickProductScreen() {
        await this.productScreen.click()
    }

}

module.exports = new MyStoreScreen ()