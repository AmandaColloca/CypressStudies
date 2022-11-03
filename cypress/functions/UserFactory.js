import { faker } from '@faker-js/faker';
import { generate } from 'gerador-validador-cpf';
var cpf = require('gerador-validador-cpf')

export default {

    user: function () {
        var firstName = faker.name.firstName();
        var lastName = faker.name.lastName();

        var data = {
            firstName: `${firstName}`,
            lastName:  `${lastName}`,
            email: faker.internet.email(firstName),
            password: "Amanda123@@",
            confirmPassword: "Amanda123@@",
            numberCPF: cpf.generate(),
            dateOfBirth: "15/01/1982"
        };
        return data;
    },
};