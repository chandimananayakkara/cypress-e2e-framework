import LoginPage from '../pages/LoginPage'

describe('Test Login Functionality', ()=>{

    const loginPage = new LoginPage()
    it('Should login successfully with valid credentials', ()=>{
        cy.visit('/')
        loginPage.login('standard_user', 'secret_sauce')
        cy.url().should('include', '/inventory.html')
    })
})