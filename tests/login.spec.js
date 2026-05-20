const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CheckoutPage = require('../pages/CheckoutPage');

const userData = require('../test-data/userData');


// auto login before every test
test.beforeEach(async ({ page }) => {

  // open website
  await page.goto('https://www.saucedemo.com');

  // login page object
  const loginPage = new LoginPage(page);

  // login
  await loginPage.login(
    userData.validUser.username,
    userData.validUser.password
  );

});



// valid login test
test('Valid Login Test', async ({ page }) => {

  // verify inventory page loaded
  await expect(page).toHaveURL(/inventory/);

});



// add product to cart
test('Add Product To Cart', async ({ page }) => {

  // inventory page object
  const inventoryPage = new InventoryPage(page);

  // add product
  await inventoryPage.addProductToCart();

  // open cart
  await inventoryPage.openCart();

  // verify product added
  await expect(page.locator('.inventory_item_name'))
    .toHaveText('Sauce Labs Backpack');

});



// remove product from cart
test('Remove Product From Cart', async ({ page }) => {

  // inventory page object
  const inventoryPage = new InventoryPage(page);

  // add product
  await inventoryPage.addProductToCart();

  // open cart
  await inventoryPage.openCart();

  // remove product
  await inventoryPage.removeProduct();

  // verify product removed
  await expect(page.locator('.inventory_item_name'))
    .toHaveCount(0);

});



// complete checkout flow
test('Complete Checkout Flow', async ({ page }) => {

  // page objects
  const inventoryPage = new InventoryPage(page);

  const checkoutPage = new CheckoutPage(page);

  // add product
  await inventoryPage.addProductToCart();

  // open cart
  await inventoryPage.openCart();

  // start checkout
  await checkoutPage.startCheckout();

  // fill checkout information
  await checkoutPage.fillInformation(
    userData.checkoutInfo.firstName,
    userData.checkoutInfo.lastName,
    userData.checkoutInfo.postalCode
  );

  // continue checkout
  await checkoutPage.continueCheckout();

  // finish order
  await checkoutPage.finishOrder();

  // verify success message
  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');

});



// invalid login test
test('Invalid Login Test', async ({ page }) => {

  // open login page again
  await page.goto(process.env.BASE_URL);

  // login page object
  const loginPage = new LoginPage(page);

  // invalid login
  await loginPage.login(
    userData.invalidUser.username,
    userData.invalidUser.password
  );

  // verify error message
  await expect(page.locator('[data-test="error"]'))
    .toBeVisible();

});