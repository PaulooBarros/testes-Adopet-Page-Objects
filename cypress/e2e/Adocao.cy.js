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
  });

  it('Adoção através de mensagem', () => {
    cy.wait(3000)
    adocaoPO.clicarBotaoMensagem()
    adocaoPO.preencherNome(user.name);
    adocaoPO.preencherTelefone(user.phone);
    adocaoPO.preencherPetName(user.animalName);
    adocaoPO.preencherMensagem(user.textArea);
    adocaoPO.clicarBotaoEnviar();
    cy.url().should('be.eq', 'https://adopet-frontend-cypress.vercel.app/home')
    });

  it('Adoção Dunga', () => {
    adocaoPO.selecionarResponsavel(1)
    adocaoPO.preencherNome(user.name);
    adocaoPO.preencherTelefone(user.phone);
    adocaoPO.preencherPetName(user.animalName);
    adocaoPO.preencherMensagem(user.textArea);
    adocaoPO.clicarBotaoEnviar();
    cy.url().should('be.eq', 'https://adopet-frontend-cypress.vercel.app/home')
  });

  it('Adoção Felícia', () => {
    adocaoPO.selecionarResponsavel(2)
    adocaoPO.preencherNome(user.name);
    adocaoPO.preencherTelefone(user.phone);
    adocaoPO.preencherPetName(user.animalName);
    adocaoPO.preencherMensagem(user.textArea);
    adocaoPO.clicarBotaoEnviar();
    cy.url().should('be.eq', 'https://adopet-frontend-cypress.vercel.app/home')
  });

  it('Adoção Sirius', () => {
    cy.wait(2000)
    adocaoPO.selecionarResponsavel(3)
    adocaoPO.preencherNome(user.name);
    adocaoPO.preencherTelefone(user.phone);
    adocaoPO.preencherPetName(user.animalName);
    adocaoPO.preencherMensagem(user.textArea);
    adocaoPO.clicarBotaoEnviar();
    cy.url().should('be.eq', 'https://adopet-frontend-cypress.vercel.app/home')
  });

  it('Adoção Fiona', () => {
    adocaoPO.selecionarResponsavel(4)
    adocaoPO.preencherNome(user.name);
    adocaoPO.preencherTelefone(user.phone);
    adocaoPO.preencherPetName(user.animalName);
    adocaoPO.preencherMensagem(user.textArea);
    adocaoPO.clicarBotaoEnviar();
    cy.url().should('be.eq', 'https://adopet-frontend-cypress.vercel.app/home')
  });

  it('Adoção Sid', () => {
    adocaoPO.selecionarResponsavel(5)
    adocaoPO.preencherNome(user.name);
    adocaoPO.preencherTelefone(user.phone);
    adocaoPO.preencherPetName(user.animalName);
    adocaoPO.preencherMensagem(user.textArea);
    adocaoPO.clicarBotaoEnviar();
    cy.url().should('be.eq', 'https://adopet-frontend-cypress.vercel.app/home')
  });
    
  it('Adoção Yoda', () => {
    adocaoPO.selecionarResponsavel(6)
    adocaoPO.preencherNome(user.name);
    adocaoPO.preencherTelefone(user.phone);
    adocaoPO.preencherPetName(user.animalName);
    adocaoPO.preencherMensagem(user.textArea);
    adocaoPO.clicarBotaoEnviar();
    cy.url().should('be.eq', 'https://adopet-frontend-cypress.vercel.app/home')
  });
    
  it('Adoção Lua', () => {
    adocaoPO.selecionarResponsavel(7)
    adocaoPO.preencherNome(user.name);
    adocaoPO.preencherTelefone(user.phone);
    adocaoPO.preencherPetName(user.animalName);
    adocaoPO.preencherMensagem(user.textArea);
    adocaoPO.clicarBotaoEnviar();
    cy.url().should('be.eq', 'https://adopet-frontend-cypress.vercel.app/home')
  });
    
  it('Adoção Amora', () => {
    adocaoPO.selecionarResponsavel(8)
    adocaoPO.preencherNome(user.name);
    adocaoPO.preencherTelefone(user.phone);
    adocaoPO.preencherPetName(user.animalName);
    adocaoPO.preencherMensagem(user.textArea);
    adocaoPO.clicarBotaoEnviar();
    cy.url().should('be.eq', 'https://adopet-frontend-cypress.vercel.app/home')
  });

  it('Adoção Zelda', () => {
    adocaoPO.selecionarResponsavel(9)
    adocaoPO.preencherNome(user.name);
    adocaoPO.preencherTelefone(user.phone);
    adocaoPO.preencherPetName(user.animalName);
    adocaoPO.preencherMensagem(user.textArea);
    adocaoPO.clicarBotaoEnviar();
    cy.url().should('be.eq', 'https://adopet-frontend-cypress.vercel.app/home')
  });
});
