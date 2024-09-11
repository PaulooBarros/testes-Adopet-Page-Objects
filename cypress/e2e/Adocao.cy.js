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
  });

  user.name = faker.name.findName();
  user.phone = faker.phone.phoneNumber().replace(/\D+/g, ''); 
  user.animalName = (faker.animal.type() + ' ' + faker.company.companyName()).substr(0, 25); 
  user.textArea = faker.lorem.paragraphs(2);
  
  context('Page Object', () => {
    const adocao = require('../PageObjects/adocao');

    it('Adoção através de mensagem', () => {
      cy.wait(1000)
      adocao.adocaoPorMensagem(user); // Pass the user object as an argument
    });

    it('Adoção Dunga', () => {
      adocao.adocaoDunga(user)
    });

    it('Adoção Felícia', () => {
      adocao.adocaoFelicia(user)
    });

    it('Adoção Sirius', () => {
      adocao.adocaoSirius(user)
    });

    it('Adoção Fiona', () => {
      adocao.adocaoFiona(user)
    });

    it('Adoção Sid', () => {
      adocao.adocaoSid(user)
    });
    
    it('Adoção Yoda', () => {
      adocao.adocaoYoda(user)
    });
    
    it('Adoção Lua', () => {
      adocao.adocaoLua(user)
    });
    
    it('Adoção Amora', () => {
      adocao.adocaoAmora(user)
    });

    it('Adoção Zelda', () => {
      adocao.adocaoZelda(user)
    });
  });
});