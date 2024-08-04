
const skipButton = '//android.widget.TextView[@text="Skip"]'
const languageButton = 'android = new UiSelector().className("android.view.View").index(1)'
const nextButton = '//android.widget.TextView[@text="Next"]'
const loginButton = '//android.widget.TextView[@text="Login"]'
class landingPage{

    async swipeScreen () {
        //TODO
    }
    async clickNextButton () {
        //TODO
    }
    async clickLoginButton () {
        await $(loginButton).click()
    }
}
export default new landingPage();