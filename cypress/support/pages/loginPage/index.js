// simport common from '../commonPage'
import {ELEMENTS as loginElements} from './elements'
import {ELEMENTS as accountElements} from '../accountPage/elements'



class LoginPage {
    go() {
        cy.visit(loginElements.url)
        cy.get(loginElements.title)
            .should('exist')
            .should('have.text', 'LOG IN NA SUA CONTA DO BREAK SOCIETY')
    }

    fillLoginFields(email, password) {
        cy.get(loginElements.emailField)
            .should('exist')
            .clear()
            .type(email)
        cy.get(loginElements.passwordField)
            .clear()
            .type(password)

    }

    submitLogin() {

        cy.get(loginElements.submitButton)
            .should('exist').click()
        cy.location('pathname').should('eq', '/breaksociety')

    }


    submitLogWithError(expectedMessage) {

        cy.get(loginElements.submitButton)
            .should('exist').click()
        cy.get(loginElements.errorMessage)
            .should('have.text', expectedMessage)
    }
}
export default new LoginPage();