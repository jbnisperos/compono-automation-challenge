const { test } = require("@playwright/test")
const { LoginPage } = require("../page-objects/LoginPage")
const {UploadResume} = require("../page-objects/UploadResume")
const {DeleteAll} = require("../page-objects/DeleteAll")
let webContext


test.beforeAll(async ({browser}) => {
    const context = await browser.newContext()
    const page = await context.newPage()

    const email = "jbnisperos07@gmail.com"
    const password = "Password!"
    const loginPage = new LoginPage(page)

    await loginPage.goTo()
    await loginPage.login(email,password)
    await context.storageState({path: "state.json"})
    webContext = await browser.newContext({storageState: "state.json"})
})

test("Upload a Resume CV1 docx format", async () => {
    const page = await webContext.newPage()
    const loginPage = new LoginPage(page);
    const file = './fixtures/Muditha_CV.docx'
    const uploadResume = new UploadResume(page)
    await loginPage.goTo()
    await uploadResume.uploadingYourCV(file)
  
  })

test.afterAll(async () => {
    const page = await webContext.newPage()
    const loginPage = new LoginPage(page)
    const deleteAll = new DeleteAll(page)

    await loginPage.goTo()
    await page.on('dialog', async dialog => {
        //console.log(dialog.message())
        await dialog.accept()
      })
    await deleteAll.deleteEditExperienceAndSkills()
    await deleteAll.deleteEditQualifications()
    await deleteAll.deleteUploadedCV()
  });

