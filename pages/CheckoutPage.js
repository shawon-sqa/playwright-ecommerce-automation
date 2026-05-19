class CheckoutPage {

  constructor(page) {

    this.page = page;

    this.checkoutButton = '#checkout';

    this.firstNameInput = '#first-name';

    this.lastNameInput = '#last-name';

    this.postalCodeInput = '#postal-code';

    this.continueButton = '#continue';

    this.finishButton = '#finish';

    this.successMessage = '.complete-header';

  }


  // start checkout
  async startCheckout() {

    await this.page.click(this.checkoutButton);

  }


  // fill user information
  async fillInformation(firstName, lastName, postalCode) {

    await this.page.fill(this.firstNameInput, firstName);

    await this.page.fill(this.lastNameInput, lastName);

    await this.page.fill(this.postalCodeInput, postalCode);

  }


  // continue checkout
  async continueCheckout() {

    await this.page.click(this.continueButton);

  }


  // finish order
  async finishOrder() {

    await this.page.click(this.finishButton);

  }

}

module.exports = CheckoutPage;