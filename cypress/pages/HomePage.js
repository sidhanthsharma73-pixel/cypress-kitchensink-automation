class HomePage {

    visit() {
        cy.visit('https://example.cypress.io')
    }

    clickCommands() {
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(3) > a').click()
    }

    verifyCommandsPage() {
        cy.url().should('include', '/commands/actions')
        cy.contains('Actions').should('be.visible')
    }

    typeEmail(email) {
        cy.get('.action-email')
          .type(email)
          .should('have.value', email)
    }

}

export default new HomePage()