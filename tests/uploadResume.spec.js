const { test } = require("@playwright/test")
const { LoginPage } = require("../page-objects/LoginPage")
const {UploadResume} = require("../page-objects/UploadResume")
const {DeleteAll} = require("../page-objects/DeleteAll")
let webContext


test.beforeAll(async ({browser}) => {
    const context = await browser.newContext()
    const page = await context.newPage()

    const email = "tomlaurence.2000@gmail.com"
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
    const file = './fixtures/CV1.docx'
    const uploadResume = new UploadResume(page)
    await loginPage.goTo()
    //await expect(page.getByRole('heading', { name: 'Upload CV / Resume' })).toBeVisible();
    await uploadResume.uploadingYourCV(file)
  })

  test("Upload a Resume CV2 doc format", async () => {
    const page = await webContext.newPage()
    const loginPage = new LoginPage(page);
    const file = './fixtures/CV1.docx'
    const uploadResume = new UploadResume(page)
    await loginPage.goTo()
    //await expect(page.getByRole('heading', { name: 'Upload CV / Resume' })).toBeVisible();
    await uploadResume.uploadingYourCV(file)
  })

  test("Upload a Resume CV3 txt format", async () => {
    const page = await webContext.newPage()
    const loginPage = new LoginPage(page);
    const file = './fixtures/CV1.docx'
    const uploadResume = new UploadResume(page)
    await loginPage.goTo()
    //await expect(page.getByRole('heading', { name: 'Upload CV / Resume' })).toBeVisible();
    await uploadResume.uploadingYourCV(file)
  })

  test("Upload a Resume CV4 pdf format", async () => {
    const page = await webContext.newPage()
    const loginPage = new LoginPage(page);
    const file = './fixtures/CV1.docx'
    const uploadResume = new UploadResume(page)
    await loginPage.goTo()
    //await expect(page.getByRole('heading', { name: 'Upload CV / Resume' })).toBeVisible();
    await uploadResume.uploadingYourCV(file)
  })

  test("Upload a Resume CV5 rft format", async () => {
    const page = await webContext.newPage()
    const loginPage = new LoginPage(page);
    const file = './fixtures/CV1.docx'
    const uploadResume = new UploadResume(page)
    await loginPage.goTo()
    //await expect(page.getByRole('heading', { name: 'Upload CV / Resume' })).toBeVisible();
    await uploadResume.uploadingYourCV(file)
  })

test.afterEach(async () => {
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

