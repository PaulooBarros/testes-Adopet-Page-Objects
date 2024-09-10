const faker = require('faker'); 
const user = {};


describe('Testes Cadastro Adopet', () => {
  
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl') + Cypress.env('cadastroPath'));
    user.name = faker.name.findName();
    user.email = faker.internet.email();
    user.password = faker.internet.password(); 
  });

  context('Page Object',()=>{
    const cadastro = require('../PageObjects/cadastro');

    it('Cadastro com dados válidos',()=>{
      cadastro.preenchendoDadosValidos(user)
    })

    it('Cadastro sem o campo Nome',()=>{
      cadastro.preenchendoSemCampoNome(user)
    })
   
    it('Cadastro sem o campo Email', ()=> {
      cadastro.preenchendoSemCampoEmail(user)
    })

    it('Cadastro sem o campo Senha', ()=> {
      cadastro.preenchendoSemCampoSenha(user)
    })

    it.only('Cadastro sem confirmar Senha', ()=> {
      cadastro.preenchendoSemConfirmarSenha(user)
    })

    it.only('Cadastro com senha diferente da confirmada', ()=>{
      cadastro.preenchendoSenhaDiferente(user)
    })
  })

});