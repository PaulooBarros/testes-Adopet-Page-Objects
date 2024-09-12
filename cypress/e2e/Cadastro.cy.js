const faker = require('faker'); 
const user = {};
import cadastroPO from '../support/cadastro/cadastroPO';

describe('Testes Cadastro Adopet', () => {
  
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl') + Cypress.env('cadastroPath'));
    user.name = faker.name.findName();
    user.email = faker.internet.email();
    user.password = faker.internet.password(); 
  });

  it('Cadastro com dados válidos',()=>{
        cadastroPO.preencherNome(user.name)
        cadastroPO.preencherEmail(user.email)
        cadastroPO.preencherSenha(user.password)
        cadastroPO.confirmarSenha(user.password)
        cadastroPO.clicarBotaoCadastrar()
        cy.url().should('be.eq', Cypress.env('baseUrl') + Cypress.env('loginPath'))
  })

  it('Cadastro sem o campo Nome',()=>{
        cadastroPO.preencherEmail(user.email)
        cadastroPO.preencherSenha(user.password)
        cadastroPO.confirmarSenha(user.password)
        cadastroPO.clicarBotaoCadastrar()
        cy.url().should('be.eq', Cypress.env('baseUrl') + Cypress.env('cadastroPath'))
       
  })
   
  it('Cadastro sem o campo Email', ()=> {
        cadastroPO.preencherNome(user.name)
        cadastroPO.preencherSenha(user.password)
        cadastroPO.confirmarSenha(user.password)
        cadastroPO.clicarBotaoCadastrar()
        cy.url().should('be.eq', Cypress.env('baseUrl') + Cypress.env('cadastroPath'))
        cy.get(cadastroPO.selectors.erroCredenciais).should('be.visible')
  })

  it('Cadastro sem o campo Senha', ()=> {
        cadastroPO.preencherNome(user.name)
        cadastroPO.preencherEmail(user.email)
        cadastroPO.confirmarSenha(user.password)
        cadastroPO.clicarBotaoCadastrar()
        cy.url().should('be.eq', Cypress.env('baseUrl') + Cypress.env('cadastroPath'))
        cy.get(cadastroPO.selectors.erroCredenciais).should('be.visible')
  })

  it('Cadastro sem confirmar Senha', ()=> {
        cadastroPO.preencherNome(user.name)
        cadastroPO.preencherEmail(user.email)
        cadastroPO.preencherSenhaErrada(user.password)
        cadastroPO.confirmarSenha(user.password)
        cadastroPO.clicarBotaoCadastrar()
        cy.url().should('be.eq', Cypress.env('baseUrl') + Cypress.env('cadastroPath'))
        cy.get(cadastroPO.selectors.erroCredenciais).should('be.visible')
  })

  it('Cadastro com senha diferente da confirmada', ()=>{
        cadastroPO.preencherNome(user.name)
        cadastroPO.preencherEmail(user.email)
        cadastroPO.preencherSenha(user.password)
        cadastroPO.preencherSenhaErrada(user.password)
        cadastroPO.clicarBotaoCadastrar()
        cy.url().should('be.eq', Cypress.env('baseUrl') + Cypress.env('cadastroPath'))
        cy.get(cadastroPO.selectors.erroCredenciais).should('be.visible')
  })
})
