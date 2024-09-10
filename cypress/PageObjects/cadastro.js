const cadastroElements = require('./cadastroElements');

const cadastro = {
    preenchendoDadosValidos: (user) => {
        cy.get(cadastroElements.inputName).type(user.name)
        cy.get(cadastroElements.inputEmail).type(user.email)
        cy.get(cadastroElements.inputSenha).type(user.password)
        cy.get(cadastroElements.inputConfirmarSenha).type(user.password)
        cy.get(cadastroElements.botaoCadastrar).click()
        cy.url().should('be.eq',Cypress.env('baseUrl') + ('login'))
    },

    preenchendoSemCampoNome: (user) => {
        cy.get(cadastroElements.inputEmail).type(user.email)
        cy.get(cadastroElements.inputSenha).type(user.password)
        cy.get(cadastroElements.inputConfirmarSenha).type(user.password)
        cy.get(cadastroElements.botaoCadastrar).click()
        cy.url().should('be.eq', Cypress.env('baseUrl') + Cypress.env('cadastroPath'))
    },

    preenchendoSemCampoEmail: (user) => {
        cy.get(cadastroElements.inputName).type(user.name)
        cy.get(cadastroElements.inputSenha).type(user.password)
        cy.get(cadastroElements.inputConfirmarSenha).type(user.password)
        cy.get(cadastroElements.botaoCadastrar).click()
        cy.get(cadastroElements.msgErro).should('be.visible')
    },

    preenchendoSemCampoSenha: (user) => {
        cy.get(cadastroElements.inputName).type(user.name)
        cy.get(cadastroElements.inputEmail).type(user.email)
        cy.get(cadastroElements.inputConfirmarSenha).type(user.password)
        cy.get(cadastroElements.botaoCadastrar).click()
        cy.contains('Crie uma senha').should('be.visible')
    },

    preenchendoSemConfirmarSenha: (user) => {
        cy.get(cadastroElements.inputName).type(user.name)
        cy.get(cadastroElements.inputEmail).type(user.email)
        cy.get(cadastroElements.inputSenha).type(user.password)
        cy.get(cadastroElements.botaoCadastrar).click()
        cy.contains('Repita a senha criada acima').should('be.visible')
    },

    preenchendoSenhaDiferente: (user) => {
        cy.get(cadastroElements.inputName).type(user.name)
        cy.get(cadastroElements.inputEmail).type(user.email)
        cy.get(cadastroElements.inputSenha).type(user.password)
        cy.get(cadastroElements.inputConfirmarSenha).type(user.password + '.')
        cy.get(cadastroElements.botaoCadastrar).click()
        cy.contains('As senhas não batem').should('be.visible')
    }
}

module.exports = cadastro;


