class LoginPage {

    visit() {

        cy.visit('https://example.cypress.io')

    }
    

    clickCommands() {
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(3) > a').click()
        
    
    }
    verifyCommandsPage() {

    cy.url().should('include', '/commands/actions')

    }
}

export default new LoginPage()