const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");
const priceScreen = require("../screens/price.screen");
const productScreen = require("../screens/cadastrarProduto.screen");
const checkNewProductScreen = require('../screens/ checkNewProduct.screen.js');

let urlLoja = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'
let newProduct = `Blusa de moletom modelo ${Math.floor(Math.random() * 100)}`;
let descricao = "Exercício M17";
let regularPrice = 190;
let salePrice = 220;
let sku = 123;

describe('Acessar o painel de administrador', () => {

    it('Cadastrar Produto depois de fazer login', async () => {
       //fazer login
        await homeScreen.goToLogin()
        await loginScreen.setStoreAddress(urlLoja)
        await loginScreen.continue()
        await loginScreen.login(usuario, senha)
        await loginScreen.goToTwoFactorAuth()
        await loginScreen.twoFactorLogin(senha)
        
        //cadastrar novo produto
       await productScreen.iconProducts()
        await productScreen.clickAddProduct()
        await productScreen.clickAddSimpleProduct()
        await productScreen.fillProductName(newProduct)
        await productScreen.fillProductDescription(descricao)
        await productScreen.clickBack()
        await productScreen.clickAddPrice()
        await priceScreen.fillRegularPrice(regularPrice)
        await priceScreen.fillSalePrice(salePrice)
        await productScreen.clickBack()
        await productScreen.clickInventory()
        await productScreen.fillSku(sku)
        await productScreen.clickBack()
        
        //checar se o cadastro funcionou
        await checkNewProductScreen.navigationUp()
        await checkNewProductScreen.searchMenu()
        await checkNewProductScreen.setSearchProduct(newProduct)

        
        expect(await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy()
        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')
        expect(await CheckNewProductScreen.confirmProduct()).toBeClickable()

    });

})