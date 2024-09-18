const { expect } = require("@playwright/test");
exports.UploadResume = class UploadResume {

  constructor(page) 
    {
        this.page = page
        this.uploadCV = page.getByTestId('upload-cv-input')
        this.uploadYourCV = page.locator('[data-test-id="upload-dialog"] >> text=Upload your CV')
        this.uploadingInProgress = page.locator("text=Uploading...")
        this.uploadDialogBox = page.getByTestId('upload-dialog').getByTestId('upload-cv-button')
        this.dialogBoxCloseButton = page.locator('.CloseIconButton-sc-19wgu2s-0')
    }

    async uploadingYourCV (file) {
      // Click the upload CV button to open the dialog box
      await this.uploadCV.setInputFiles(file);
  
      // Validate the upload progress
      
      await expect(this.uploadingInProgress).toBeVisible();
      await expect(this.uploadingInProgress).toBeHidden();
  
      // Close the dialog box
      await this.dialogBoxCloseButton.click();
  }
  
}
