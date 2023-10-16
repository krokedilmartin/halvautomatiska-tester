import { test } from '@playwright/test';

let URL = 'https://okt-test-resurs.krokedil.site/'
let userName = 'replace'
let passWord = 'replace'

test('cart1', async ({ page }) => {

  await page.goto(URL + 'wp-login.php?redirect_to=https%3A%2F%2Fautomat-martin.krokedil.site%2Fwp-admin%2F&reauth=1');
  await page.getByLabel('Username or Email Address').fill(userName);
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill(passWord);
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.goto(URL);

  await page.goto(URL);
  await page.getByLabel('Add “Downloadable 25%” to your basket').click();
  await page.goto(URL);

  await page.getByLabel('Add “Virtual 25%” to your basket').click();
  await page.goto(URL);

  await page.getByLabel('Add “Simple 25%” to your basket').click();
  await page.goto(URL);

  await page.getByLabel('Add “Simple 12%” to your basket').click();
  await page.goto(URL);

  await page.getByLabel('Add “Simple 12%” to your basket').click();
  await page.goto(URL);

  await page.getByLabel('Add “Simple 12%” to your basket').click();
  await page.goto(URL);

  await page.getByLabel('Add “Simple 12%” to your basket').click();
  await page.goto(URL);

  await page.getByLabel('Add “Simple 12%” to your basket').click();
  await page.goto(URL);

  await page.getByLabel('Add “Simple 12%” to your basket').click();
  await page.goto(URL);

  await page.getByLabel('Add “Simple 12%” to your basket').click();
  await page.goto(URL);  

  await page.goto(URL + 'product/variable-25/?attribute_color=Red');
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Add to basket' }).click();
  await page.goto(URL + 'checkout/');


});

test('cart2', async ({ page }) => {

  await page.goto(URL + 'wp-login.php?redirect_to=https%3A%2F%2Fautomat-martin.krokedil.site%2Fwp-admin%2F&reauth=1');
  await page.getByLabel('Username or Email Address').fill(userName);
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill(passWord);
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.goto(URL);

  await page.goto(URL);
  await page.getByLabel('Add “Downloadable Virtual 0%” to your basket').click();
  await page.goto(URL);
  await page.getByLabel('Add “Downloadable Virtual 25%” to your basket').click();


  await page.goto(URL + 'checkout/');


});
