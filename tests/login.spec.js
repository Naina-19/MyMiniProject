import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/login'

test('Login-page testing', async ({ page }) => {
    const Login=new LoginPage(page);

    await Login.gotoLoginPage()
    await Login.login('Admin','admin123')
    })
    
    
//   await page.getByRole('textbox', { name: 'Username' }).click();
//   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.waitForURL('**/dashboard/**');
//   await expect(page.getByText('Dashboard')).toBeVisible();
