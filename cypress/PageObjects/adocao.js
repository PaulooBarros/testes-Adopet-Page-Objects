// adocao.js file
const adocaoElements = require('./adocaoElements');

const adocao = {
  adocaoPorMensagem: (user) => {
    cy.get(adocaoElements.headerMessagem).click()
    cy.get(adocaoElements.nomeMensagem).type(user.name, {delay:0})
    cy.get(adocaoElements.telefoneMensagem).type(user.phone, {delay:0})
    cy.get(adocaoElements.petName).type(user.animalName, {delay:0})
    cy.get(adocaoElements.caixaMsg).type(user.textArea, {delay:0})
    cy.get(adocaoElements.botaoEnviar).click()
    cy.url().should('be.eq', Cypress.env('baseUrl') + ('home'))
  }
}

module.exports = adocao;