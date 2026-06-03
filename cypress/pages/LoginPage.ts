export default class LoginPage{

    public get usernameField(){
        return cy.get('[data-test="username"]')
    }

    public get passwordField(){
        return cy.get('[data-test="password"]')
    }

    public get loginButton(){
        return cy.get('[data-test="login-button"]')
    }

    public login(username: string, password: string){
        this.usernameField.type(username)
        this.passwordField.type(password)
        this.loginButton.click()
    }

    public get errorMessage(){
        return cy.get('h3[data-test="error"]')

    }
}