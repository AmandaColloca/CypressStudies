

export default {
    customer: function () {
        var data = {
            firstName: "Test",
            lastName: "Test",
            email: "leonora@putsbox.com",
            password: "Leonora123@@",
            confirmPassword: "Leonora123@@",
            numberCPF: "929.538.860-79",
            dateOfBirth: "15/01/1982"
        }
    return data
    },

  
    guest: function () {
        var data = {
            first_name: "Not",
            last_name: "Client",
            email: "not_client@putsbox.com",
            password: "Wrong123@@"
        }
    return data
    },

}