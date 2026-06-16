import homePage from '../../pages/HomePage'

describe('Commands Page Tests', () => {

    beforeEach(() => {

        cy.openHomePage()

        homePage.clickCommands()

    })

    it('should navigate to Commands page', () => {

        homePage.verifyCommandsPage()

    })

    it('should enter email successfully', () => {

        homePage.typeEmail('sidhanth@test.com')

    })

})