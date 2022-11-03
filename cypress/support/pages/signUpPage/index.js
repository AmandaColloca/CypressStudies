
import {ELEMENTS as signupElements} from './elements'
import {ELEMENTS as accountElements} from '../accountPage/elements'

class SignUpPage{

    go(){
        cy.visit(signupElements.url)
        cy.get(signupElements.title)
            .should('exist')
            .should('have.text', 'FAÇA PARTE DO BREAK SOCIETY')
    }

    fillRegisterFields(firstName, lastName, email, password, confirmPassword, numberCPF, dateOfBirth){
        cy.get(signupElements.firstName)
            .type(firstName)
        cy.get(signupElements.lastName)
            .type(lastName)
        cy.get(signupElements.userEmail)
            .type(email)
        cy.get(signupElements.userPassword)
            .type(password)
        cy.get(signupElements.confirmPassword)
            .type(confirmPassword)
        cy.get(signupElements.numberCPF)
            .type(numberCPF)
        cy.get(signupElements.dateOfBirth)
            .type(dateOfBirth)  
        

    }   
    checkTermsBox(){
        cy.get(signupElements.termsAndConditionsBox)
        .check({force: true})
    }

    submitSignUp() {

        cy.get(signupElements.submitButton)
        .should('exist').click()
        cy.get(signupElements.successfulTitle)
            .should('exist')
            .should('have.text', 'BEM-VINDO(A), TEMOS APENAS MAIS UM PASSO PARA UM BREAK PERFEITO.')


    }

    submitErrorSignUp() {

        cy.get(signupElements.submitButton)
        .should('exist').click()
        cy.get(signupElements.unsuccessfulTitle)
            .should('exist')
            .should('have.text', 'Houve um erro...Identificamos que você já possui um cadastro. Vá para o login e utilize os dados já existentes para entrar.')


    }

    alertMessageShouldBe(expectMessageAlertError) {
        cy.contains('Register_error', expectMessageAlertError).should('be.visible');
    }
}
export default new SignUpPage();