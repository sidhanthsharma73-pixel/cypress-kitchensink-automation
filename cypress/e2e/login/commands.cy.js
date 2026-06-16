import loginPage from '../../pages/LoginPage'

describe('Commands Page Tests', () => {

    beforeEach(() => {

    cy.openHomePage()

})

    it('should navigate to Commands page', () => {

        loginPage.clickCommands()

        loginPage.verifyCommandsPage()

    })

})