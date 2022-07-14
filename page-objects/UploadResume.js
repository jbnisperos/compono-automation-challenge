const { expect } = require("@playwright/test");
exports.UploadResume = class UploadResume {

  constructor(page) 
    {
        this.page = page
        this.uploadCV = page.locator("text=Upload CV")
        this.uploadYourCV = page.locator('[data-test-id="upload-dialog"] >> text=Upload your CV')
        this.uploadingInProgress = page.locator("text=Uploading...")
        this.uploadDialogBox = page.locator('[data-test-id="upload-dialog"]')
        this.dialogBoxCloseButton = page.locator('.CloseIconButton-sc-19wgu2s-0')
    }

  async uploadingYourCV (file) 
    {
        await this.uploadCV.click()
        const [fileChooser] = await Promise.all([
          this.page.waitForEvent("filechooser"),
          this.uploadYourCV.click(),
        ]);
        await fileChooser.setFiles(file);
         await expect(this.uploadingInProgress).toBeVisible()
         await expect(this.uploadingInProgress).toBeHidden()
         await expect(this.uploadDialogBox).toContainText('Your CV has been uploaded, and your profile has been prefilled!')
         await this.dialogBoxCloseButton.click()

    }
}
