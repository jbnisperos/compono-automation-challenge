const { expect} = require("@playwright/test");
exports.DeleteAll = class DeleteAll{

    constructor(page)
    {
        this.page = page
        this.editExperienceAndSkills = page.locator('[href="/profile/experience-and-skills"]')
        this.editQualifications = page.locator('[href="/profile/qualifications"]')
        this.deleteButton = page.locator('button.ActionStyled-sc-od5jif-3.ezDNse')
        this.backToProfile = page.locator('a:has-text("Back to profile")')
        this.deleteCV = page.locator('[class="SVGIcon-sc-1w8loah-0 kwJeya sc-1w8loah-1 StyledTrashIcon-sc-lkjdzb-0 gVnzNB"]')
        this.deletingInProgress = page.locator("text=Deleting...")
        this.countList = page.locator("text=NEEDS REVIEW")
        
    }
    async deleteEditExperienceAndSkills()
    {
        await this.editExperienceAndSkills.click()
        await expect(this.page).toHaveURL('https://candidate--latest.reviews.compono.dev/profile/experience-and-skills')
        await this.page.waitForLoadState('networkidle')
        await this.page.waitForTimeout(1000)
        const count = await this.countList.count()
        console.log(count)
        for(let i =0; i < count; ++i)
            {
              await this.deleteButton.first().click()
              await this.page.waitForTimeout(2000)
            }      
        await this.backToProfile.click()
        await expect(this.page).toHaveURL('https://candidate--latest.reviews.compono.dev/profile')
        await this.page.waitForLoadState('networkidle')

    }

    async deleteEditQualifications()
    {
        await this.editQualifications.click()
        await expect(this.page).toHaveURL('https://candidate--latest.reviews.compono.dev/profile/qualifications')
        await this.page.waitForLoadState('networkidle')
        await this.page.waitForTimeout(1000)
        const count = await this.countList.count()
        console.log(count)
        for(let i =0; i < count; ++i)
            {
                  await this.deleteButton.first().click()
                  await this.page.waitForTimeout(2000)
            }      
        await this.backToProfile.click()
        await expect(this.page).toHaveURL('https://candidate--latest.reviews.compono.dev/profile')
        await this.page.waitForLoadState('networkidle')
    }

    async deleteUploadedCV()
    {
          await this.deleteCV.click()
          await this.page.waitForTimeout(2000)  
    }


}


