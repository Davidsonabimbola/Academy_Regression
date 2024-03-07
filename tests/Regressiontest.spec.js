const {test, expect} = require('@playwright/test');
const newFeature = require ('../pages/week1Page');

test('First Regression test', async({page})=>{
    const Course = 'Manual Testing'
    const NewFeature = newFeature(page);
    await NewFeature.Url();
    await NewFeature.getStarted();
    await NewFeature.searchCourse(Course);
    await NewFeature.manual();  
})


test('Manual Testing Courses Second Regression test', async ({ page }) => {
    const course = 'Manual Testing';
    await page.goto('https://academy.doyenify.com/');
    await page.locator('[class="ms-5 text-black nav-links2"]').hover();
    const course_div = page.locator('[class="m-2 softwarelink dropend"]');
    await course_div.locator('[id="dropdown-basic-button"]').click(); 

    const Dropdown = await page.locator('[class="dropdown-item"]');
    const DropdownLength = await Dropdown.count();

    for (let i = 0; i < DropdownLength; i++) {
        const text = await Dropdown.nth(i).textContent();
        if (text.includes(course)) {
            await Dropdown.nth(i).click();
            break;
        }
    }
    page.locator('[class="btn btn-success enrollpay2"]').waitFor()
     await page.locator('[class="btn btn-success enrollpay2"]').click()
     page.pause()
});


test('Mobile App Course Second Regression test', async ({ page }) => {
    const course = 'Mobile App Development';
    await page.goto('https://academy.doyenify.com/');
    await page.locator('[class="ms-5 text-black nav-links2"]').hover();
    const course_div = page.locator('[class="m-2 softwarelink dropend"]');
    await course_div.locator('[id="dropdown-basic-button"]').click(); 

    const Dropdown = await page.locator('[class="dropdown-item"]');
    const DropdownLength = await Dropdown.count();

    for (let i = 0; i < DropdownLength; i++) {
        const text = await Dropdown.nth(i).textContent();
        if (text.includes(course)) {
            await Dropdown.nth(i).click();
            break;
        }
    }
    page.locator('[class="btn btn-success enrollpay2"]').waitFor()
     await page.locator('[class="btn btn-success enrollpay2"]').click()
     page.pause()
});


test('@Full-stack Web Development with node Course Second Regression test', async ({ page }) => {
    const course = 'Full-stack Web Development with node';
    await page.goto('https://academy.doyenify.com/');
    await page.locator('[class="ms-5 text-black nav-links2"]').hover();
    const course_div = page.locator('[class="m-2 softwarelink dropend"]');
    await course_div.locator('[id="dropdown-basic-button"]').click(); 
    const payment = page.locator('[class="col-xl-6"]').nth(1)
    const Dropdown = page.locator('[class="dropdown-item"]');
    const DropdownLength = await Dropdown.count();
    const enroll = page.locator('[class="col-md-6"]')
   

    for (let i = 0; i < DropdownLength; i++) {
        const text = await Dropdown.nth(i).textContent();
        if (text.includes(course)) {
            await Dropdown.nth(i).click();
            break;
        }
    }
    
    const enroll_Button = enroll.getByRole('button',{name:'Enroll'})
    // enroll_Button.waitFor()
    console.log( await enroll_Button.textContent())
    
    await enroll_Button.click()
    
        const stripe = await page.locator('div[style="background: rgb(39, 122, 143); padding: 9px; border-radius: 10px; cursor: pointer; text-align: center; margin-top: 10px; color: rgb(255, 255, 255); font-size: 17px;"]')
        await stripe.waitFor()
       const stripe_content = stripe.textContent()
       console.log( await stripe_content)
     page.pause()
});



