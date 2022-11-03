import loginPage from "../support/pages/loginPage"
import customerFactory from '../factories/CustomerFactory'

describe('Chocolatory - Insert product to cart', () => {

    it('should add product to cart', function (){
        var customer = customerFactory.customer()
        loginPage.go()
        loginPage.fillLoginFields(customer.email, customer.password)
        loginPage.submitLogin()        

    })
})