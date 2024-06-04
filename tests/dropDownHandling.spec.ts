import {test,expect} from '@playwright/test';

test('single static dropdown handling',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.selectOption('#Skills',{
        value:'Android'
})
    //await page.pause();
    await page.selectOption('#Skills',{
        label:"Art Design"
})
    //await page.pause();
    await page.selectOption('#Skills',{
        index:3
})
await page.close();
}
)

test('Multi static dropdown handling',async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    await page.selectOption('#multi-select',[
        {value:'New York'},
        {label:'California'},
        {index: 4}
    ]
    )
    // await page.locator('button[value="Print First"]').dblclick();
    // expect(page.locator('.genderbutton')).toHaveText('New York');
    
    // await page.locator('#printAll').click();
    // expect(page.locator('.groupradiobutton')).toHaveText('New York,California,Ohio');
    //await page.pause();
    await page.close();
}
)

test('Dynamic search static dropdown handling',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('span[role="combobox"]').click();
    //await page.pause();
    await page.locator('input[role="textbox"]').fill('India');
    //await page.pause();
    await page.locator('li[role="treeitem"]').click(); //the another locator that we can use here is 'ul#select2-country-results>li'
    //await page.pause();

    await page.close();
}
)

test.only('Dynamic non-searchable static dropdown handling',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('span[role="combobox"]').click();
    await page.locator('#select2-country-results').locator('li',{hasText:'India'}).click();
    //await page.pause();
    await page.close();
}
)