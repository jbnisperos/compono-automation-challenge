exports.LoginPage = class LoginPage{

    constructor(page)
    {
        this.page = page
        this.email = page.locator('[placeholder="yours\\@example\\.com"]')
        this.password = page.locator('[placeholder="your password"]')
        this.loginButton = page.locator('[aria-label="Log In"]')
    }
async goTo()
{
    await Promise.all([
    this.page.waitForNavigation(),
    this.page.goto("https://candidate-qa-test.dev.platform.compono.dev/"),
  ])
  await this.page.waitForLoadState('networkidle')
}

async login(email,password)
{
    await this.email.fill(email)
    await this.password.fill(password)
    await Promise.all([
        this.page.waitForNavigation(),
        this.loginButton.click()
    ])
    await this.page.waitForLoadState('networkidle')

}
}