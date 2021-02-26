describe('CustomeCommand Suite', function () {
    it('Login', function () {
        cy.login('admin@yourstore.com','admin')
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
    })

    it('Add Customers', function () {
       cy.login('admin@yourstore.com','admin')
        cy.title().should('eq', 'Dashboard / nopCommerce administration')
        //cy.login('admi1n@yourstore.com','admin')
       // cy.title().should('eq', 'Your store. Login')
        
    })

    it('Edit Customer', function () {
        cy.login('admin@yourstore.com','admin')
        cy.title().should('eq', 'Dashboard / nopCommerce administration')
    })
})