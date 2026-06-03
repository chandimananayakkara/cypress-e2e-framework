import usersData from '../fixtures/users.json'
describe('Test Inventory Page', ()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.loginUI(usersData.validUser.username, usersData.validUser.password)
    })
    it('Test Add to Cart Functionality', ()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('contain', '1')
    })
})