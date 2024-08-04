

import landingPage from '../pageobjects/landingPage.js'
import loginPage from '../pageobjects/loginPage.js'
import homePage from '../pageobjects/homePage.js'

describe('Login with valid credentials', () => {
    it('[1] Validate login with valid credentials', async () => {
       await landingPage.clickLoginButton();
       await loginPage.email_Field();
       await loginPage.password_Field();
       await loginPage.clickLoginButton();
       await homePage.getLoggedName();
    })
})

