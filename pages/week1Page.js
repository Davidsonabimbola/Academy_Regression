const { expect } = require("@playwright/test")


    const newFeature =(page)=> ({   
        

   async  Url(){
        await page.goto('https://academy.doyenify.com/')
    },

    async getStarted(){
     page.locator(".herobtn").click()
       
    },

    async searchCourse(Course){
        page.locator('[class="me-2 search-input form-control"]').waitFor()
        page.locator('[class="me-2 search-input form-control"]').fill(Course)
        // await page.locator('[class="manual-color start-btn"]').waitFor()
    },

    async manual (){
        await page.locator('[class="manual-color start-btn"]').waitFor()
    }

    


})
// class newFeature{
// constructor(page){
//     this.page = page
// }
// async  Url(){
//              await page.goto('https://academy.doyenify.com/')
//         }

//         async getStarted(){
//                   page.locator(".herobtn").click()
                   
//                  }

// }

module.exports = newFeature