const homeScreen = require ('../screens/home.screen');
const loginScreen = require('../screens/login.screen');
const loginScreeb = require("../screens/login.screen");

let urlLoja = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'

describe ('Acessar o painel de administrador', ()=>{
 
    it ('Fazer login com credenciais válidas', async () => {
        await homeScreen.goToLogin()
        await loginScreen.setStoreAddress(urlLoja)
        await loginScreen.continue()
        await loginScreen.login(usuario, senha)
        await loginScreen.goToTwoFactorAuth()
        await loginScreen.twoFactorLogin(senha)

        expect(await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy()
        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')
     
    });

})