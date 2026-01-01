import { test, expect } from '@playwright/test';

test('Login-page testing', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.pause()
    
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  expect(page.url('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'));
})


test.only('Check Performance at Home Page', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.pause()
    
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  //expect(page.url('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'));
    await page.getByRole('link', { name: 'Performance' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('naina');
  await page.getByText('-- Select --').first().click();
  await page.getByText('Automaton Tester').click();
  await page.getByText('-- Select --').first().click();
  await page.getByText('Administration').click();
  await page.locator('.oxd-grid-item.oxd-grid-item--gutters.--offset-row-2 > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
  await page.getByRole('option', { name: 'Activated' }).click();
  await page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first().click();
  await page.getByText('1', { exact: true }).click();
  await page.getByRole('textbox', { name: 'yyyy-dd-mm' }).nth(1).click();
  await page.getByText('31').click();
  expect( page.locator('div').filter({ hasText: /^No Records Found$/ }));
  //await page.getByRole('listitem').filter({ hasText: 'manda user' }).locator('i').click();
  //await page.getByRole('menuitem', { name: 'Logout' }).click();
})

test.only('Logout test', async({page})=>{
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.pause()
    
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('listitem').filter({ hasText: 'manda user' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  expect( page.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'))

})
