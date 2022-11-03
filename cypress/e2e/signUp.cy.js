import signUpPage from "../support/pages/signUpPage"
import customerFactory from '../factories/CustomerFactory'
import userFactory from '../functions/UserFactory'

describe('Chocolatory - SignUp', () => {
    beforeEach(() =>{
      cy.clearCookies()
      cy.clearLocalStorage()
      cy.visit('https://www.kitkatchocolatory.com.br.integration-5ojmyuq-25ekit3rbnddg.us-2.platformsh.site/registro')
  
    });
  
    it('should create a new customer', function () {
      var user = userFactory.user()
      signUpPage.fillRegisterFields(user.firstName, user.lastName, user.email, user.password, user.confirmPassword, user.numberCPF, user.dateOfBirth)
      signUpPage.checkTermsBox()
      signUpPage.submitSignUp()
  
    });

    it('should error for an existing customer', function () {
      var customer = customerFactory.customer()
      signUpPage.fillRegisterFields(customer.firstName, customer.lastName, customer.email, customer.password, customer.confirmPassword, customer.numberCPF, customer.dateOfBirth)
      signUpPage.checkTermsBox()
      signUpPage.submitErrorSignUp()
  
    });
  
});

describe('Validate required fields', () => {
    before(() => {
      cy.visit('http://www.kitkatchocolatory.com.br.integration-5ojmyuq-25ekit3rbnddg.us-2.platformsh.site/registro')
      cy.get('button[class="button button-white"][type="submit"]')
      .click()
    });
  
    context('Validate messages', () => {
        const messages = [
            { field: 'firstName', output: 'Favor inserir seu primeiro nome.' },
            { field: 'lastname', output: 'Favor inserir seu sobrenome.' },
            { field: 'userEmail', output: 'Favor inserir um e-mail válido.' },
            { field: 'userPassword', output: 'Senha obrigatória.'},
            { field: 'numberCPF', output: 'CPF obrigatório.' },
            { field: 'dateOfBirth', output: 'Data de nascimento obrigatório.' },
            { field: 'termsAndConditionsBox', output: 'Você deve acordar com os Termos & Condições.' },
            
          ];
  
        messages.forEach((msg) => {
            it(`${msg.field} is required`, async () => {
                await signUpPage.alertMessageShouldBe(msg.output);
            });
        });
    });
});