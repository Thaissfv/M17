const homeScreen = require ('../screens/home.screen');


describe ('Acessar o painel de administrador', ()=>{
 
    it ('Fazer login com credenciais válidas', async () => {
        await homeScreen.goToLogin()
        await driver.pause(5000)
     
    });

})