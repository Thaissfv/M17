const homeScreen = require ('../screens/home.screen');


describe ('Acessar o painel de administrador', ()=>{
 
    it ('Fazer login com credencias válidas', async () => {
        await homeScreen.goToLogin()
     
    });

})