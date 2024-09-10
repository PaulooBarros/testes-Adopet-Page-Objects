const faker = require('faker');
faker.locale = 'pt_BR';
const user = {};
const adocaoElements = require('../PageObjects/Elements/adocaoElements');



describe('Testes Login AdoPet', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl') + Cypress.env('loginPath'));
    cy.get(adocaoElements.inputEmailLogin).type('teste123456789@protechsolutions.com.br', {delay:0})
    cy.get(adocaoElements.inputSenhaLogin).type('senhaCorreta1', {delay:0})
    cy.get(adocaoElements.botaoEnviar).click()
    user.name = faker.name.findName();
    user.phone = faker.phone.phoneNumber().replace(/\D+/g, ''); 
    user.animalName = (faker.animal.type() + ' ' + faker.company.companyName()).substr(0, 25); 
    user.textArea = faker.lorem.paragraphs(2); 
  });

  context('Page Object', () => {
    const adocao = require('../PageObjects/adocao');

    it.only('Adoção através de mensagem', () => {
      cy.wait(2000)
      adocao.adocaoPorMensagem(user); // Pass the user object as an argument
    });

    it('Adoção Dunga', () => {
      
    });

    it('Adoção Felícia', () => {
      
    });

    it('Adoção Sirius', () => {
      
    });

    it('Adoção Fiona', () => {
      
    });

    it('Adoção Sid', () => {
      
    });
    
    it('Adoção Yoda', () => {
      
    });
    
    it('Adoção Lua', () => {
      
    });
    
    it('Adoção Amora', () => {
      
    });

    it('Adoção Zelda', () => {
      
    });
  });
});