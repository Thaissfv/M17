class LoginScreen {
    get #storeAddress(){return $('android.widget.EditText')}
   
    get #continue() {return $('id:bottom_buttom')}
   
    async setStoreAddress (url){
        await this.#storeAddress.setValue(url)
    }

    async continue (){
        await this.#continue.click()
    }
}

module.exports = new LoginScreen ()