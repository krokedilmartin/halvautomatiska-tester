import { test } from '@playwright/test';

let URL = 'https://kco-test5dec.krokedil.site/'
let userName = 'automaten'
let passWord = 'PQ6m33e%cCOViZ$G@p3XWEve'

test('cart11', async ({ page }) => {

  await page.goto(URL + 'wp-login.php?redirect_to=https%3A%2F%2Fkco-test5dec.krokedil.site%2Fwp-admin%2F&reauth=1');
  await page.getByLabel('Username or Email Address').click();
  await page.getByLabel('Username or Email Address').fill(userName);
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill(passWord);
  await page.getByRole('button', { name: 'Log In' }).click();

  await page.goto(URL);

  await page.getByLabel('Add to cart:  “Downloadable 25%” ').click();
  await page.goto(URL);

  await page.getByLabel('Add to cart:  “Virtual 25%” ').click();
  await page.goto(URL);

  await page.getByLabel('Add to cart:  “Simple 25%” ').click();
  await page.goto(URL);

  await page.getByLabel('Add to cart:  “Simple 12%” ').click();
  await page.goto(URL);

  await page.getByLabel('Add to cart:  “Simple 12%” ').click();
  await page.goto(URL);

  await page.getByLabel('Add to cart:  “Simple 12%” ').click();
  await page.goto(URL);

  await page.getByLabel('Add to cart:  “Simple 12%” ').click();
  await page.goto(URL);

  await page.getByLabel('Add to cart:  “Simple 12%” ').click();
  await page.goto(URL);

  await page.getByLabel('Add to cart:  “Simple 12%” ').click();
  await page.goto(URL);

  await page.getByLabel('Add to cart:  “Simple 12%” ').click();
  await page.goto(URL);  

  await page.getByRole('link', { name: 'Placeholder Variable 25% 100,00 kr' }).click();
  await page.getByRole('row', { name: 'Color', exact: true }).locator('th').click();
  await page.getByLabel('Color').selectOption('Red');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Add to basket' }).click();
  await page.goto(URL + 'checkout/');

});

test('cart22', async ({ page }) => {

  await page.goto(URL + 'wp-login.php?redirect_to=https%3A%2F%2Fkco-test5dec.krokedil.site%2Fwp-admin%2F&reauth=1');
  await page.getByLabel('Username or Email Address').click();
  await page.getByLabel('Username or Email Address').fill(userName);
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill(passWord);
  await page.getByRole('button', { name: 'Log In' }).click();


  await page.goto(URL);
  await page.getByLabel('Add to cart:  “Downloadable Virtual 0%” ').click();
  await page.goto(URL);
  await page.getByLabel('Add to cart:  “Downloadable Virtual 25%” ').click();


  await page.goto(URL + 'checkout/');


});
