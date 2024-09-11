// adocao.js file
const adocaoElements = require('./Elements/adocaoElements');

const adocao = {
  adocaoPorMensagem: (user) => {

    cy.get(adocaoElements.headerMessagem).click()
    cy.get(adocaoElements.nomeMensagem).type(user.name, {delay:0})
    cy.get(adocaoElements.telefoneMensagem).type(user.phone, {delay:0})
    cy.get(adocaoElements.petName).type(user.animalName, {delay:0})
    cy.get(adocaoElements.caixaMsg).type(user.textArea, {delay:0})
    cy.get(adocaoElements.botaoEnviar).click()
    cy.url().should('be.eq', Cypress.env('baseUrl') + ('home'))
  },

  adocaoDunga: (user) => {
 
    cy.get(adocaoElements.responsavelDunga).click()
    cy.get(adocaoElements.nomeMensagem).type(user.name, {delay:0})
    cy.get(adocaoElements.telefoneMensagem).type(user.phone, {delay:0})
    cy.get(adocaoElements.petName).type('Dunga', {delay:0})
    cy.get(adocaoElements.caixaMsg).type(user.textArea, {delay:0})
    cy.get(adocaoElements.botaoEnviar).click()
  },

  adocaoFelicia: (user) => {

    cy.get(adocaoElements.responsavelFelicia).click()
    cy.get(adocaoElements.nomeMensagem).type(user.name, {delay:0})
    cy.get(adocaoElements.telefoneMensagem).type(user.phone, {delay:0})
    cy.get(adocaoElements.petName).type('Felicia', {delay:0})
    cy.get(adocaoElements.caixaMsg).type(user.textArea, {delay:0})
    cy.get(adocaoElements.botaoEnviar).click()
  },

  adocaoSirius: (user) => {

    cy.get(adocaoElements.responsavelSirius).click()
    cy.get(adocaoElements.nomeMensagem).type(user.name, {delay:0})
    cy.get(adocaoElements.telefoneMensagem).type(user.phone, {delay:0})
    cy.get(adocaoElements.petName).type('Sirius', {delay:0})
    cy.get(adocaoElements.caixaMsg).type(user.textArea, {delay:0})
    cy.get(adocaoElements.botaoEnviar).click()
  },

  adocaoFiona: (user) => {
    
    cy.get(adocaoElements.responsavelFiona).click()
    cy.get(adocaoElements.nomeMensagem).type(user.name, {delay:0})
    cy.get(adocaoElements.telefoneMensagem).type(user.phone, {delay:0})
    cy.get(adocaoElements.petName).type('Fiona', {delay:0})
    cy.get(adocaoElements.caixaMsg).type(user.textArea, {delay:0})
    cy.get(adocaoElements.botaoEnviar).click()
  },

  adocaoSid: (user) => {
  
    cy.get(adocaoElements.responsavelSid).click()
    cy.get(adocaoElements.nomeMensagem).type(user.name, {delay:0})
    cy.get(adocaoElements.telefoneMensagem).type(user.phone, {delay:0})
    cy.get(adocaoElements.petName).type('Sid', {delay:0})
    cy.get(adocaoElements.caixaMsg).type(user.textArea, {delay:0})
    cy.get(adocaoElements.botaoEnviar).click()
  },

  adocaoYoda: (user) => {
  
    cy.get(adocaoElements.responsavelYoda).click()
    cy.get(adocaoElements.nomeMensagem).type(user.name, {delay:0})
    cy.get(adocaoElements.telefoneMensagem).type(user.phone, {delay:0})
    cy.get(adocaoElements.petName).type('Yoda', {delay:0})
    cy.get(adocaoElements.caixaMsg).type(user.textArea, {delay:0})
    cy.get(adocaoElements.botaoEnviar).click()
  },

  adocaoLua: (user) => {
   
    cy.get(adocaoElements.responsavelLua).click()
    cy.get(adocaoElements.nomeMensagem).type(user.name, {delay:0})
    cy.get(adocaoElements.telefoneMensagem).type(user.phone, {delay:0})
    cy.get(adocaoElements.petName).type('Lua', {delay:0})
    cy.get(adocaoElements.caixaMsg).type(user.textArea, {delay:0})
    cy.get(adocaoElements.botaoEnviar).click()
  },

  adocaoAmora: (user) => {
   
    cy.get(adocaoElements.responsavelAmora).click()
    cy.get(adocaoElements.nomeMensagem).type(user.name, {delay:0})
    cy.get(adocaoElements.telefoneMensagem).type(user.phone, {delay:0})
    cy.get(adocaoElements.petName).type('Amora', {delay:0})
    cy.get(adocaoElements.caixaMsg).type(user.textArea, {delay:0})
    cy.get(adocaoElements.botaoEnviar).click()
  },

  adocaoZelda: (user) => {
  
    cy.get(adocaoElements.responsavelZelda).click()
    cy.get(adocaoElements.nomeMensagem).type(user.name, {delay:0})
    cy.get(adocaoElements.telefoneMensagem).type(user.phone, {delay:0})
    cy.get(adocaoElements.petName).type('Zelda', {delay:0})
    cy.get(adocaoElements.caixaMsg).type(user.textArea, {delay:0})
    cy.get(adocaoElements.botaoEnviar).click()
  }

  
}

module.exports = adocao;