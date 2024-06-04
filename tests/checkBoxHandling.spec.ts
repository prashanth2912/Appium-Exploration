import {test, expect} from '@playwright/test';
import exp from 'constants';

test('Check boxes handling',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html');

    const cricketBox = page.locator('#checkbox1');
    const movieBox = page.locator('#checkbox2');
    const hockeyBox = page.locator('#checkbox3');

    //way 1 of assertion
    expect(cricketBox).not.toBeChecked();
    expect(movieBox).not.toBeChecked();
    expect(hockeyBox).not.toBeChecked();

    //way 2 of assertion
    expect(await cricketBox.isChecked()).toBeFalsy();
    expect(await movieBox.isChecked()).toBeFalsy();
    expect(await hockeyBox.isChecked()).toBeFalsy();

    await cricketBox.check();
    await movieBox.check();
    await hockeyBox.check();
    //await page.waitForTimeout(3000);

    expect(cricketBox).toBeChecked();
    expect(await movieBox.isChecked()).toBeTruthy();
    expect(await hockeyBox.isChecked()).toBeTruthy();

    await page.close();
}
)