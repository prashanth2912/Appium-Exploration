import {test,expect} from '@playwright/test';

test('Clicking on the simple alert',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.locator('button[onclick="jsAlert()"]').click();
    page.on('dialog',async(alert)=>{
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS Alert');
        await alert.accept();
        await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
    }
    )
}
)

test('Clicking Ok and cancel in confirmation alert',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    //Clicking on Okay from alert box
    await page.locator('button[onclick="jsConfirm()"]').click();
    page.on('dialog',async(alert)=>{
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS Confirm');
        await alert.accept();
        await expect(page.locator('#result')).toHaveText('You clicked: Ok');
    }
    )
    //Clicking on cancel from alert box
    await page.locator('button[onclick="jsConfirm()"]').click();
    page.on('dialog',async(alert)=>{
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS Confirm');
        await alert.dismiss();
        await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
    }
    )
}
)

test('Prompt alert textboxes example',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    //Clicking on Okay from alert box
    await page.locator('button[onclick="jsPrompt()"]').click();
    page.on('dialog',async(alert)=>{
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS prompt');
        await alert.accept('Prasanth');
        await expect(page.locator('#result')).toHaveText('You entered: Prasanth');
    }
    )
    //Clicking on cancel from alert box
    await page.locator('button[onclick="jsPrompt()"]').click();
    page.on('dialog',async(alert)=>{
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS prompt');
        await alert.dismiss();
        await expect(page.locator('#result')).toHaveText('You entered: null');
    }
    )
}
)


