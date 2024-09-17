const { expect} = require("@playwright/test");
exports.DeleteAll = class DeleteAll{

    constructor(page)
    {
        this.page = page
        this.editExperienceAndSkills = page.locator('[href="/profile/experience-and-skills"]')
        this.editQualifications = page.locator('[href="/profile/qualifications"]')
        this.deleteButton = page.getByRole('button', { name: 'Delete this item' }).first()
        this.backToProfile = page.locator('a:has-text("Back to profile")')
        this.deleteCV = page.getByTestId('upload-status-trash-icon').locator('path')
        this.deletingInProgress = page.locator("text=Deleting...")
        this.countList = page.getByText('NEEDS REVIEW')
        
    }
    async deleteEditExperienceAndSkills()
    {
        await this.editExperienceAndSkills.click()
        await expect(this.page).toHaveURL(/\/experience-and-skills/)
        await this.page.waitForLoadState('networkidle')
        await this.page.waitForTimeout(2000)
        const count = await this.countList.count()
        console.log(count)
        for(let i =0; i < count; ++i)
            {
              await this.deleteButton.first().click()
              await this.page.waitForTimeout(2000)
            }      
        await this.backToProfile.click()
        await expect(this.page).toHaveURL(/\/profile/)
        await this.page.waitForLoadState('networkidle')

    }

    async deleteEditQualifications()
    {
        await this.editQualifications.click()
        await expect(this.page).toHaveURL(/\/qualifications/)
        await this.page.waitForLoadState('networkidle')
        await this.page.waitForTimeout(2000)
        const count = await this.countList.count()
        console.log(count)
        for(let i =0; i < count; ++i)
            {
                  await this.deleteButton.first().click()
                  await this.page.waitForTimeout(2000)
            }      
        await this.backToProfile.click()
        await expect(this.page).toHaveURL(/\/profile/)
        await this.page.waitForLoadState('networkidle')
    }

    async deleteUploadedCV()
    {
          await this.deleteCV.click()
          await this.page.waitForTimeout(2000)  
    }


}


