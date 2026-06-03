/// <reference types="cypress" />
import LoginPage from "../pages/LoginPage"

const loginPage = new LoginPage()
declare namespace Cypress {
    interface Chainable{
        loginUI(username: string, password: string): Chainable<void>
    }
}

Cypress.Commands.add('loginUI', (username: string, password: string)=>{
    loginPage.usernameField.type(username),
    loginPage.passwordField.type(password),
    loginPage.loginButton.click()

})