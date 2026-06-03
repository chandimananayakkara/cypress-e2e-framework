import LoginPage from '../pages/LoginPage'
import usersData from '../fixtures/users.json'

describe('Test Login Functionality', ()=>{

    const loginPage = new LoginPage()

    beforeEach(()=>{
        cy.visit('/')
    })
    it('Should login successfully with valid credentials', ()=>{
        loginPage.login(usersData.validUser.username, usersData.validUser.password)
        cy.url().should('include', '/inventory.html')
    })
    it('Should show error message for locked out user', ()=>{
        loginPage.login(usersData.lockedUser.username, usersData.lockedUser.password)
        loginPage.errorMessage.should('be.visible').and('contain', 'Sorry, this user has been locked out')
    })
})