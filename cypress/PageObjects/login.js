const loginElements = require('./loginElements');

const login =  {
    loginComDadosValidos:(user)=> {
        cy.get(loginElements.inputEmailLogin).type(user.email);
        cy.get(loginElements.inputSenhaLogin).type(user.passwordCerta);
        cy.get(loginElements.botaoEntrarLogin).click();
        cy.url().should('be.eq',Cypress.env('baseUrl') + Cypress.env('homePath'))
        cy.contains('Olá').should('be.visible')
    },

    loginComEmailInvalido: (user) => {
        cy.get(loginElements.inputEmailLogin).type('emailinvalido@dominio.com');
        cy.get(loginElements.inputSenhaLogin).type(user.passwordCerta);
        cy.get(loginElements.botaoEntrarLogin).click();
        cy.get(loginElements.erroCredenciais).should('be.visible')
    },

    loginComSenhaInvalida: (user) => {
        cy.get(loginElements.inputEmailLogin).type(user.email);
        cy.get(loginElements.inputSenhaLogin).type('senhaIncorreta1');
        cy.get(loginElements.botaoEntrarLogin).click();
        cy.get(loginElements.erroCredenciais).should('be.visible')
    },

    loginComEmailEmBranco: (user) => {
        cy.get(loginElements.inputSenhaLogin).type(user.passwordCerta);
        cy.get(loginElements.botaoEntrarLogin).click();
        cy.get(loginElements.erroCredenciais).should('be.visible')
    },

    loginComSenhaEmBranco: (user) => {
        cy.get(loginElements.inputEmailLogin).type(user.email);
        cy.get(loginElements.botaoEntrarLogin).click();
        cy.get(loginElements.erroCredenciais).should('be.visible')
    }
};

module.exports = login;
