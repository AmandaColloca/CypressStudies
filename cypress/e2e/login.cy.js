import loginPage from "../support/pages/loginPage"
import customerFactory from '../factories/CustomerFactory'

describe('Chocolatory - Login', () => {
  beforeEach(() =>{
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('https://www.kitkatchocolatory.com.br.integration-5ojmyuq-25ekit3rbnddg.us-2.platformsh.site/login')

  })

  it('should redirect to "Break Society" page after login ', function () {
    var customer = customerFactory.customer()
    loginPage.fillLoginFields(customer.email, customer.password)
    loginPage.submitLogin()

  })

  it('"should error for an invalid password for existing user"', function () {
    var customer = customerFactory.customer()
    var expectedMessage = 'Usuário e/ou senha inválidos.'

    loginPage.fillLoginFields('wrong@user.com', 'INVALID')
    loginPage.submitLogWithError(expectedMessage)
  })
})