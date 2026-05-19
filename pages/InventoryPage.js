class InventoryPage {

  constructor(page) {

    this.page = page;

    this.addBackpackButton = '#add-to-cart-sauce-labs-backpack';

    this.removeBackpackButton = '#remove-sauce-labs-backpack';

    this.cartButton = '.shopping_cart_link';

  }


  // add product
  async addProductToCart() {

    await this.page.click(this.addBackpackButton);

  }


  // remove product
  async removeProduct() {

    await this.page.click(this.removeBackpackButton);

  }


  // open cart
  async openCart() {

    await this.page.click(this.cartButton);

  }

}

module.exports = InventoryPage;