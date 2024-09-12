describe('Testes de adoção que devem ser mal sucedidos.', () => {
    
    beforeEach('IniciandoComErroPO',() => {
        cy.visit(Cypress.env('baseUrl') + Cypress.env('loginPath'));
        adocaoComErroPO.preencherEmailLogin()
        adocaoComErroPO.preencherSenhaLogin()
        adocaoComErroPO.clicarBotaoEnviar()
    })
    
    it('Adoção Dunga sem informar Nome', () => {
        adocaoComErroPO.selecionarDunga()
        adocaoComErroPO.preencherTelefone(user.phone)
        adocaoComErroPO.preencherPetName(user.animalName)
        adocaoComErroPO.preencherMensagem(user.textArea)
        adocaoComErroPO.clicarBotaoEnviar()
        cy.get('.error').should('be.visible')
    })

    it('Adoção Dunga sem informar Telefone', () => {
        adocaoComErroPO.selecionarDunga()
        adocaoComErroPO.preencherNome(user.name)
        adocaoComErroPO.preencherPetName(user.animalName)
        adocaoComErroPO.preencherMensagem(user.textArea)
        adocaoComErroPO.clicarBotaoEnviar()
        cy.get('.error').should('be.visible')
    });

    it('Adoção Dunga sem informar Nome do Animal', () => {
        adocaoComErroPO.selecionarDunga()
        adocaoComErroPO.preencherNome(user.name)
        adocaoComErroPO.preencherTelefone(user.phone)
        adocaoComErroPO.preencherMensagem(user.textArea)
        adocaoComErroPO.clicarBotaoEnviar()
        cy.get('.error').should('be.visible')
    });

    it('Adoção Dunga sem informar caixa de mensagem', () => {
        adocaoComErroPO.selecionarDunga()
        adocaoComErroPO.preencherNome(user.name)
        adocaoComErroPO.preencherTelefone(user.phone)
        adocaoComErroPO.preencherPetName(user.animalName)
        adocaoComErroPO.clicarBotaoEnviar()
        cy.get('.error').should('be.visible')
    });

    it('Adoção Felicia sem informar Nome', () => {
        adocaoComErroPO.selecionarFelicia()
        adocaoComErroPO.preencherTelefone(user.phone)
        adocaoComErroPO.preencherPetName(user.animalName)
        adocaoComErroPO.preencherMensagem(user.textArea)
        adocaoComErroPO.clicarBotaoEnviar()
        cy.get('.error').should('be.visible')
    });

    it('Adoção Felícia sem informar Telefone', () => {
        adocaoComErroPO.selecionarFelicia()
        adocaoComErroPO.preencherNome(user.name)
        adocaoComErroPO.preencherPetName(user.animalName)
        adocaoComErroPO.preencherMensagem(user.textArea)
        adocaoComErroPO.clicarBotaoEnviar()
        cy.get('.error').should('be.visible')
    });

    it('Adoção Felicia sem informar Nome do Animal', () => {
        adocaoComErroPO.selecionarFelicia()
        adocaoComErroPO.preencherNome(user.name)
        adocaoComErroPO.preencherTelefone(user.phone)
        adocaoComErroPO.preencherMensagem(user.textArea)
        adocaoComErroPO.clicarBotaoEnviar()
        cy.get('.error').should('be.visible')
    });

    it('Adoção Felicia sem informar caixa de mensagem', () => {
        adocaoComErroPO.selecionarFelicia()
        adocaoComErroPO.preencherNome(user.name)
        adocaoComErroPO.preencherTelefone(user.phone)
        adocaoComErroPO.preencherPetName(user.animalName)
        adocaoComErroPO.clicarBotaoEnviar()
        cy.get('.error').should('be.visible')
    });

    it('Adoção Sirius sem informar Nome', () => {
        adocaoComErroPO.selecionarSirius();
        adocaoComErroPO.preencherTelefone(user.phone);
        adocaoComErroPO.preencherPetName(user.animalName);
        adocaoComErroPO.preencherMensagem(user.textArea);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Sirius sem informar Telefone', () => {
        adocaoComErroPO.selecionarSirius();
        adocaoComErroPO.preencherNome(user.name);
        adocaoComErroPO.preencherPetName(user.animalName);
        adocaoComErroPO.preencherMensagem(user.textArea);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Sirius sem informar Nome do Animal', () => {
        adocaoComErroPO.selecionarSirius();
        adocaoComErroPO.preencherNome(user.name);
        adocaoComErroPO.preencherTelefone(user.phone);
        adocaoComErroPO.preencherMensagem(user.textArea);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Sirius sem informar caixa de mensagem', () => {
        adocaoComErroPO.selecionarSirius();
        adocaoComErroPO.preencherNome(user.name);
        adocaoComErroPO.preencherTelefone(user.phone);
        adocaoComErroPO.preencherPetName(user.animalName);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Fiona sem informar Nome', () => {
        adocaoComErroPO.selecionarFiona();
        adocaoComErroPO.preencherTelefone(user.phone);
        adocaoComErroPO.preencherPetName(user.animalName);
        adocaoComErroPO.preencherMensagem(user.textArea);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Fiona sem informar Telefone', () => {
        adocaoComErroPO.selecionarFiona();
        adocaoComErroPO.preencherNome(user.name);
        adocaoComErroPO.preencherPetName(user.animalName);
        adocaoComErroPO.preencherMensagem(user.textArea);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Fiona sem informar Nome do Animal', () => {
        adocaoComErroPO.selecionarFiona();
        adocaoComErroPO.preencherNome(user.name);
        adocaoComErroPO.preencherTelefone(user.phone);
        adocaoComErroPO.preencherMensagem(user.textArea);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Sid sem informar caixa de mensagem', () => {
        adocaoComErroPO.selecionarSid();
        adocaoComErroPO.preencherNome(user.name);
        adocaoComErroPO.preencherTelefone(user.phone);
        adocaoComErroPO.preencherPetName(user.animalName);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });

    it('Adoção Sid sem informar Nome', () => {
        adocaoComErroPO.selecionarSid();
        adocaoComErroPO.preencherTelefone(user.phone);
        adocaoComErroPO.preencherPetName(user.animalName);
        adocaoComErroPO.preencherMensagem(user.textArea);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Sid sem informar Telefone', () => {
        adocaoComErroPO.selecionarSid();
        adocaoComErroPO.preencherNome(user.name);
        adocaoComErroPO.preencherPetName(user.animalName);
        adocaoComErroPO.preencherMensagem(user.textArea);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Sid sem informar Nome do Animal', () => {
        adocaoComErroPO.selecionarSid();
        adocaoComErroPO.preencherNome(user.name);
        adocaoComErroPO.preencherTelefone(user.phone);
        adocaoComErroPO.preencherMensagem(user.textArea);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Sid sem informar caixa de mensagem', () => {
        adocaoComErroPO.selecionarSid();
        adocaoComErroPO.preencherNome(user.name);
        adocaoComErroPO.preencherTelefone(user.phone);
        adocaoComErroPO.preencherPetName(user.animalName);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Yoda sem informar Nome', () => {
        adocaoComErroPO.selecionarYoda();
        adocaoComErroPO.preencherTelefone(user.phone);
        adocaoComErroPO.preencherPetName(user.animalName);
        adocaoComErroPO.preencherMensagem(user.textArea);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Yoda sem informar Telefone', () => {
        adocaoComErroPO.selecionarYoda();
        adocaoComErroPO.preencherNome(user.name);
        adocaoComErroPO.preencherPetName(user.animalName);
        adocaoComErroPO.preencherMensagem(user.textArea);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Yoda sem informar Nome do Animal', () => {
        adocaoComErroPO.selecionarYoda();
        adocaoComErroPO.preencherNome(user.name);
        adocaoComErroPO.preencherTelefone(user.phone);
        adocaoComErroPO.preencherMensagem(user.textArea);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Yoda sem informar caixa de mensagem', () => {
        adocaoComErroPO.selecionarYoda();
        adocaoComErroPO.preencherNome(user.name);
        adocaoComErroPO.preencherTelefone(user.phone);
        adocaoComErroPO.preencherPetName(user.animalName);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Lua sem informar Nome', () => {
        adocaoComErroPO.selecionarLua();
        adocaoComErroPO.preencherTelefone(user.phone);
        adocaoComErroPO.preencherPetName(user.animalName);
        adocaoComErroPO.preencherMensagem(user.textArea);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Lua sem informar Telefone', () => {
        adocaoComErroPO.selecionarLua();
        adocaoComErroPO.preencherNome(user.name);
        adocaoComErroPO.preencherPetName(user.animalName);
        adocaoComErroPO.preencherMensagem(user.textArea);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Lua sem informar Nome do Animal', () => {
        adocaoComErroPO.selecionarLua();
        adocaoComErroPO.preencherNome(user.name);
        adocaoComErroPO.preencherTelefone(user.phone);
        adocaoComErroPO.preencherMensagem(user.textArea);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Lua sem informar caixa de mensagem', () => {
        adocaoComErroPO.selecionarLua();
        adocaoComErroPO.preencherNome(user.name);
        adocaoComErroPO.preencherTelefone(user.phone);
        adocaoComErroPO.preencherPetName(user.animalName);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });

    it('Adoção Amora sem informar Nome', () => {
        adocaoComErroPO.selecionarAmora();
        adocaoComErroPO.preencherTelefone(user.phone);
        adocaoComErroPO.preencherPetName(user.animalName);
        adocaoComErroPO.preencherMensagem(user.textArea);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Amora sem informar Telefone', () => {
        adocaoComErroPO.selecionarAmora();
        adocaoComErroPO.preencherNome(user.name);
        adocaoComErroPO.preencherPetName(user.animalName);
        adocaoComErroPO.preencherMensagem(user.textArea);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Amora sem informar Nome do Animal', () => {
        adocaoComErroPO.selecionarAmora();
        adocaoComErroPO.preencherNome(user.name);
        adocaoComErroPO.preencherTelefone(user.phone);
        adocaoComErroPO.preencherMensagem(user.textArea);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Amora sem informar caixa de mensagem', () => {
        adocaoComErroPO.selecionarAmora();
        adocaoComErroPO.preencherNome(user.name);
        adocaoComErroPO.preencherTelefone(user.phone);
        adocaoComErroPO.preencherPetName(user.animalName);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });

    it('Adoção Zelda sem informar Nome', () => {
        adocaoComErroPO.selecionarZelda();
        adocaoComErroPO.preencherTelefone(user.phone);
        adocaoComErroPO.preencherPetName(user.animalName);
        adocaoComErroPO.preencherMensagem(user.textArea);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Zelda sem informar Telefone', () => {
        adocaoComErroPO.selecionarZelda();
        adocaoComErroPO.preencherNome(user.name);
        adocaoComErroPO.preencherPetName(user.animalName);
        adocaoComErroPO.preencherMensagem(user.textArea);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Zelda sem informar Nome do Animal', () => {
        adocaoComErroPO.selecionarZelda();
        adocaoComErroPO.preencherNome(user.name);
        adocaoComErroPO.preencherTelefone(user.phone);
        adocaoComErroPO.preencherMensagem(user.textArea);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Zelda sem informar caixa de mensagem', () => {
        adocaoComErroPO.selecionarZelda();
        adocaoComErroPO.preencherNome(user.name);
        adocaoComErroPO.preencherTelefone(user.phone);
        adocaoComErroPO.preencherPetName(user.animalName);
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
});







const faker = require('faker');
faker.locale = 'pt_BR';
const user = {};
import adocaoComErroPO from '../support/adocao/adocaoComErro';
user.name = faker.name.findName();
user.phone = faker.phone.phoneNumber().replace(/\D+/g, ''); 
user.animalName = (faker.animal.type() + ' ' + faker.company.companyName()).substr(0, 25); 
user.textArea = faker.lorem.paragraphs(2);
