const homeScreen = require ('../screens/home.screen');
const loginScreeb = require("../screens/login.screen");

describe ('Acessar o painel de administrador', ()=>{
 
    it ('Fazer login com credenciais válidas', async () => {
        await homeScreen.goToLogin()
        await loginScreen.setStoreAddress('http://lojaebac.ebaconline.art.br/')
        await loginScreen.continue()
     
    });

})