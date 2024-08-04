
const email = '//android.widget.EditText[@resource-id="emailTextField"]'
const password = '//android.widget.EditText[@resource-id="passwordTextField"]'
const loginButton = '//android.view.View[@resource-id="loginBtn"]'
const homeIcon = '//android.widget.FrameLayout[@content-desc="Home"]'

    class loginPage{
        async email_Field () {
            await $(email).click()
            await $(email).setValue("royal_pharma_2+24@proton.me")
        }
 
        async password_Field () {
            await $(password).click()
            await $(password).setValue("Shehab@1234")
        }

        async clickLoginButton () {
            await $(loginButton).click()
            await expect($(homeIcon)).toBeDisplayed()
        }
    }
    export default new loginPage()