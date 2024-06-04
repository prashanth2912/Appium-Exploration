import {test, expect} from '@playwright/test'

test('Element visible or hidden assertion',async({page})=>{
    await page.goto('https://www.letskodeit.com/practice');
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();
    await page.locator('#show-textbox').click();
    await expect(page.locator('#displayed-text')).toBeVisible();

    await page.close();
}
)

test('Element enabled or disabled assertion',async({page})=>{
    await page.goto('https://www.letskodeit.com/practice');
    await expect(page.locator('#enabled-example-input')).toBeEnabled();
    await page.locator('#disabled-button').click();
   // await (!expect(page.locator('#enabled-example-input').fill('test')));
    await expect(page.locator('#enabled-example-input')).toBeDisabled();
    await page.locator('#enabled-button').click();
    await expect(page.locator('#enabled-example-input')).toBeEnabled();
    await page.close();
}
)

test('Text match/Mismatch',async({page})=>{
    await page.goto('https://www.letskodeit.com/practice');
    await expect(page.locator('.dynamic-link[href="/home"]')).toHaveText('HOME');
    await expect(page.locator('.dynamic-link[href="/home"]')).not.toHaveText('test');
    
    await page.close();
}
)

test('Attribute assertion',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await expect(page.locator('input[placeholder="Username"]')).toHaveAttribute('name','username');
    await expect(page.locator('input[placeholder="Username"]')).toHaveAttribute('class',/.*oxd-input/);
    await page.close();
}
)

test('Url assertion',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); //For full url
    await expect(page).toHaveURL(/orangehrmlive/); // For partial url
    await page.close();
}
)

test('Title assertion',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await expect(page).toHaveTitle('OrangeHRM'); // For full title
    await expect(page).toHaveTitle(/.*HRM/); // For partial title
    await page.close();
}
)

test('Screenshot assertion',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    //await page.locator('button[type="submit"]');
    await page.waitForTimeout(3000);
    await expect(page).toHaveScreenshot();
    await page.close();
}
)