import { test, expect } from '@playwright/test';

test('Login-page testing', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  expect(page.url('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'));
})


test('Check Performance at Home Page', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
    
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/dashboard/);

  await page.getByRole('link', { name: 'Performance' }).click();
  await expect(page).toHaveURL(/performance/);

   await page.getByPlaceholder('Type for hints...').fill('naina');

  await page.locator('.oxd-select-text').nth(0).click();
  await page.getByRole('option', { name: 'Automaton Tester' }).click();

  // Sub Unit dropdown
  await page.locator('.oxd-select-text').nth(1).click();
  await page.getByRole('option', { name: 'Administration' }).click();

  // Status dropdown
  // Status dropdown
await page.locator('.oxd-select-text').nth(2).click();
await page.waitForSelector('.oxd-select-dropdown', { state: 'visible' });
await page.getByText('Activated', { exact: true }).click();

  // Date picker (To Date)
  await page.getByPlaceholder('yyyy-dd-mm').nth(1).click();
  await page.getByRole('gridcell', { name: '31' }).click();

  // Assertion
  await expect(
    page.getByText('No Records Found')
  ).toBeVisible();
});




test('Logout test', async({page})=>{
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
    
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/dashboard/);
  await page.locator('.oxd-userdropdown-tab').click();
await page.getByRole('menuitem', { name: 'Logout' }).click();

   await expect(page).toHaveURL(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  );

})
