const faker = require('faker');
const user = {};

describe('Testes Login AdoPet', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl') + Cypress.env('loginPath'));
        user.email = 'teste123456789@protechsolutions.com.br';
        user.passwordCerta = 'senhaCorreta1';  
    });

    context('Page Object', () => {
        const login = require('../PageObjects/login');

        it('Login com dados válidos', () => {
            login.loginComDadosValidos(user);
        });

        it('Login com email inválido', () => {
            login.loginComEmailInvalido(user);
        });

        it('Login com senha inválida', () => {
            login.loginComSenhaInvalida(user);
        });

        it('Login com email em branco', () => {
            login.loginComEmailEmBranco(user);
        });

        it('Login com senha em branco', () => {
            login.loginComSenhaEmBranco(user);
        });
    });
});
