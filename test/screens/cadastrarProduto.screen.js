class ProductScreen {
    get iconProducts() {
        return $("id:com.woocommerce.android:id/icon");
    }
    
    get addProduct() {
      return $("id:com.woocommerce.android:id/addProductButton");
    }
  
    get addSimpleProduct() {
      return $(
        "//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]"
      );
    }
  
    get productName() {
      return $("id:com.woocommerce.android:id/editText");
    }
  
    get productDescription() {
      return $(
        "//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.ScrollView/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/androidx.cardview.widget.CardView[1]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[2]"
      );
    }
  
    get editDescription() {
      return $('id:com.woocommerce.android:id/visualEditor')
    }
  
    get back() {
      return $('//android.widget.ImageButton[@content-desc="Navigate up"]');
    }
  
    get addPrice() {
      return $(
        'android=new UiSelector().text("Add price").className("android.widget.TextView")'
      );
    }
  
    get addInventory() {
      return $(
        'android=new UiSelector().text("Inventory").className("android.widget.TextView")'
      );
    }
  
    get sku() {
      return $("id:com.woocommerce.android:id/edit_text");
    }
  
    get publish() {
      return $("id:com.woocommerce.android:id/menu_publish");
    }
  
    get myProduct() {
      return $(
        'android=new UiSelector().text("Teste").className("android.widget.TextView")'
      );
    }
    async clickIconProduct() {
        await this.iconProduct.click();
    }

    async clickAddProduct() {
      await this.addProduct.click();
    }
  
    async clickAddSimpleProduct() {
      await this.addSimpleProduct.click();
    }
  
    async fillProductName(name) {
      await this.productName.setValue(name);
    }
  
    async fillProductDescription(descricao) {
      await this.productDescription.click();
      await this.editDescription.setValue(descricao);
    }
  
    async clickBack() {
      await this.back.click();
    }
  
    async clickAddPrice() {
      await this.addPrice.click();
    }
  
    async clickInventory() {
      await this.addInventory.click();
    }
  
    async fillSku(sku) {
      await this.sku.setValue(sku);
    }
  
    async clickPublish() {
      await this.publish.click();
    }
  
    async displayMyProduct() {
      await this.myProduct.waitForExist();
      return await this.myProduct.isDisplayed();
    }
  
    async getProductName() {
      await this.myProduct.waitForExist();
      return await this.myProduct.getText();
    }
  }
  module.exports = new ProductScreen();
  