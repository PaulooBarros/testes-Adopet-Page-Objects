const faker = require('faker');
faker.locale = 'pt_BR';
const user = {};
import adocaoPO from '../support/adocao/adocaoPO';
user.name = faker.name.findName();
user.phone = faker.phone.phoneNumber().replace(/\D+/g, ''); 
user.animalName = (faker.animal.type() + ' ' + faker.company.companyName()).substr(0, 25); 
user.textArea = faker.lorem.paragraphs(2);

describe('Testes Login AdoPet', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl') + Cypress.env('loginPath'));
    adocaoPO.preencherEmailLogin()
    adocaoPO.preencherSenhaLogin()
    adocaoPO.clicarBotaoEnviar()
    //cy.wait(3000)
  });

  it('Adoção através de mensagem', () => {
    cy.wait(3000)
    adocaoPO.clicarBotaoMensagem()
    //cy.wait(3000)
    //adocaoPO.clicarBotaoMensagem()
    adocaoPO.preencherNome(user.name);
    adocaoPO.preencherTelefone(user.phone);
    adocaoPO.preencherPetName(user.animalName);
    adocaoPO.preencherMensagem(user.textArea);
    adocaoPO.clicarBotaoEnviar();
    cy.url().should('be.eq', 'https://adopet-frontend-cypress.vercel.app/home')
    });

  it('Adoção Dunga', () => {
    adocaoPO.selecionarDunga()
    adocaoPO.preencherNome(user.name);
    adocaoPO.preencherTelefone(user.phone);
    adocaoPO.preencherPetName(user.animalName);
    adocaoPO.preencherMensagem(user.textArea);
    adocaoPO.clicarBotaoEnviar();
    cy.url().should('be.eq', 'https://adopet-frontend-cypress.vercel.app/home')
  });

  it('Adoção Felícia', () => {
    adocaoPO.selecionarFelicia()
    adocaoPO.preencherNome(user.name);
    adocaoPO.preencherTelefone(user.phone);
    adocaoPO.preencherPetName(user.animalName);
    adocaoPO.preencherMensagem(user.textArea);
    adocaoPO.clicarBotaoEnviar();
    cy.url().should('be.eq', 'https://adopet-frontend-cypress.vercel.app/home')
  });

  it('Adoção Sirius', () => {
    cy.wait(2000)
    adocaoPO.selecionarSirius()
    adocaoPO.preencherNome(user.name);
    adocaoPO.preencherTelefone(user.phone);
    adocaoPO.preencherPetName(user.animalName);
    adocaoPO.preencherMensagem(user.textArea);
    adocaoPO.clicarBotaoEnviar();
    cy.url().should('be.eq', 'https://adopet-frontend-cypress.vercel.app/home')
  });

  it('Adoção Fiona', () => {
    adocaoPO.selecionarFiona()
    adocaoPO.preencherNome(user.name);
    adocaoPO.preencherTelefone(user.phone);
    adocaoPO.preencherPetName(user.animalName);
    adocaoPO.preencherMensagem(user.textArea);
    adocaoPO.clicarBotaoEnviar();
    cy.url().should('be.eq', 'https://adopet-frontend-cypress.vercel.app/home')
  });

  it('Adoção Sid', () => {
    adocaoPO.selecionarSid()
    adocaoPO.preencherNome(user.name);
    adocaoPO.preencherTelefone(user.phone);
    adocaoPO.preencherPetName(user.animalName);
    adocaoPO.preencherMensagem(user.textArea);
    adocaoPO.clicarBotaoEnviar();
    cy.url().should('be.eq', 'https://adopet-frontend-cypress.vercel.app/home')
  });
    
  it('Adoção Yoda', () => {
    adocaoPO.selecionarYoda()
    adocaoPO.preencherNome(user.name);
    adocaoPO.preencherTelefone(user.phone);
    adocaoPO.preencherPetName(user.animalName);
    adocaoPO.preencherMensagem(user.textArea);
    adocaoPO.clicarBotaoEnviar();
    cy.url().should('be.eq', 'https://adopet-frontend-cypress.vercel.app/home')
  });
    
  it('Adoção Lua', () => {
    adocaoPO.selecionarLua()
    adocaoPO.preencherNome(user.name);
    adocaoPO.preencherTelefone(user.phone);
    adocaoPO.preencherPetName(user.animalName);
    adocaoPO.preencherMensagem(user.textArea);
    adocaoPO.clicarBotaoEnviar();
    cy.url().should('be.eq', 'https://adopet-frontend-cypress.vercel.app/home')
  });
    
  it('Adoção Amora', () => {
    adocaoPO.selecionarAmora()
    adocaoPO.preencherNome(user.name);
    adocaoPO.preencherTelefone(user.phone);
    adocaoPO.preencherPetName(user.animalName);
    adocaoPO.preencherMensagem(user.textArea);
    adocaoPO.clicarBotaoEnviar();
    cy.url().should('be.eq', 'https://adopet-frontend-cypress.vercel.app/home')
  });

  it('Adoção Zelda', () => {
    adocaoPO.selecionarZelda()
    adocaoPO.preencherNome(user.name);
    adocaoPO.preencherTelefone(user.phone);
    adocaoPO.preencherPetName(user.animalName);
    adocaoPO.preencherMensagem(user.textArea);
    adocaoPO.clicarBotaoEnviar();
    cy.url().should('be.eq', 'https://adopet-frontend-cypress.vercel.app/home')
  });
});
