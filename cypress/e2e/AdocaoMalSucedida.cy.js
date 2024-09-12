import faker from 'faker';
import adocaoComErroPO from '../support/adocao/adocaoComErro';
faker.locale = 'pt_BR';

describe('Testes de adoção que devem ser mal sucedidos.', () => {
    
    beforeEach('IniciandoComErroPO',() => {
        cy.visit(Cypress.env('baseUrl') + Cypress.env('loginPath'));
        adocaoComErroPO.preencherEmailLogin()
        adocaoComErroPO.preencherSenhaLogin()
        adocaoComErroPO.clicarBotaoEnviar()
        cy.wrap({
            name: faker.name.findName(),
            phone: faker.phone.phoneNumber().replace(/\D+/g, ''),
            animalName: (faker.animal.type() + ' ' + faker.company.companyName()).substr(0, 25),
            textArea: faker.lorem.paragraphs(2)
        }).as('user')
        
    })
    
    it('Adoção Dunga sem informar Nome', () => {
        cy.wait(3000)
        adocaoComErroPO.selecionarResponsavel(1)
        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherTelefone(user.phone)
            adocaoComErroPO.preencherPetName(user.animalName)
            adocaoComErroPO.preencherMensagem(user.textArea)
        })

        adocaoComErroPO.clicarBotaoEnviar()
        cy.get('.error').should('be.visible')
    })

    it('Adoção Dunga sem informar Telefone', () => {
        adocaoComErroPO.selecionarResponsavel(1)

        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name)
            adocaoComErroPO.preencherPetName(user.animalName)
            adocaoComErroPO.preencherMensagem(user.textArea)
        })
        adocaoComErroPO.clicarBotaoEnviar()
        cy.get('.error').should('be.visible')
    });

    it('Adoção Dunga sem informar Nome do Animal', () => {
        adocaoComErroPO.selecionarResponsavel(1)
        
        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name)
            adocaoComErroPO.preencherTelefone(user.phone)
            adocaoComErroPO.preencherMensagem(user.textArea)
        })
        adocaoComErroPO.clicarBotaoEnviar()    
        cy.get('.error').should('be.visible')
    });

    it('Adoção Dunga sem informar caixa de mensagem', () => {
        adocaoComErroPO.selecionarResponsavel(1)
        
        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name)
            adocaoComErroPO.preencherTelefone(user.phone)
            adocaoComErroPO.preencherPetName(user.animalName)
        })
        adocaoComErroPO.clicarBotaoEnviar()  
        cy.get('.error').should('be.visible')
    });

    it('Adoção Felicia sem informar Nome', () => {
        adocaoComErroPO.selecionarResponsavel(2)
        
        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherTelefone(user.phone)
            adocaoComErroPO.preencherPetName(user.animalName)
            adocaoComErroPO.preencherMensagem(user.textArea)
        })
        adocaoComErroPO.clicarBotaoEnviar()
        cy.get('.error').should('be.visible')
    });

    it('Adoção Felícia sem informar Telefone', () => {
        adocaoComErroPO.selecionarResponsavel(2)

        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name)
            adocaoComErroPO.preencherPetName(user.animalName)
            adocaoComErroPO.preencherMensagem(user.textArea)
        })
        adocaoComErroPO.clicarBotaoEnviar()
        cy.get('.error').should('be.visible')
    });

    it('Adoção Felicia sem informar Nome do Animal', () => {
        adocaoComErroPO.selecionarResponsavel(2)

        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name)
            adocaoComErroPO.preencherTelefone(user.phone)
            adocaoComErroPO.preencherMensagem(user.textArea)
        })
        adocaoComErroPO.clicarBotaoEnviar()
        cy.get('.error').should('be.visible')
    });

    it('Adoção Felicia sem informar caixa de mensagem', () => {
        adocaoComErroPO.selecionarResponsavel(2)

        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name)
            adocaoComErroPO.preencherTelefone(user.phone)
            adocaoComErroPO.preencherPetName(user.animalName)
        })
        adocaoComErroPO.clicarBotaoEnviar()
        cy.get('.error').should('be.visible')
    });

    it('Adoção Sirius sem informar Nome', () => {
        adocaoComErroPO.selecionarResponsavel(3)

        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherTelefone(user.phone);
            adocaoComErroPO.preencherPetName(user.animalName);
            adocaoComErroPO.preencherMensagem(user.textArea);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Sirius sem informar Telefone', () => {
        adocaoComErroPO.selecionarResponsavel(3)

        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name);
            adocaoComErroPO.preencherPetName(user.animalName);
            adocaoComErroPO.preencherMensagem(user.textArea);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Sirius sem informar Nome do Animal', () => {
        adocaoComErroPO.selecionarResponsavel(3)

        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name);
            adocaoComErroPO.preencherTelefone(user.phone);
            adocaoComErroPO.preencherMensagem(user.textArea);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Sirius sem informar caixa de mensagem', () => {
        adocaoComErroPO.selecionarResponsavel(3)
        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name);
            adocaoComErroPO.preencherTelefone(user.phone);
            adocaoComErroPO.preencherPetName(user.animalName);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Fiona sem informar Nome', () => {
        adocaoComErroPO.selecionarResponsavel(4)
        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherTelefone(user.phone);
            adocaoComErroPO.preencherPetName(user.animalName);
            adocaoComErroPO.preencherMensagem(user.textArea);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Fiona sem informar Telefone', () => {
        adocaoComErroPO.selecionarResponsavel(4)
        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name);
            adocaoComErroPO.preencherPetName(user.animalName);
            adocaoComErroPO.preencherMensagem(user.textArea);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Fiona sem informar Nome do Animal', () => {
        adocaoComErroPO.selecionarResponsavel(4)

        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name);
            adocaoComErroPO.preencherTelefone(user.phone);
            adocaoComErroPO.preencherMensagem(user.textArea);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Sid sem informar caixa de mensagem', () => {
        adocaoComErroPO.selecionarResponsavel(4)

        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name);
            adocaoComErroPO.preencherTelefone(user.phone);
            adocaoComErroPO.preencherPetName(user.animalName);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });

    it('Adoção Sid sem informar Nome', () => {
        adocaoComErroPO.selecionarResponsavel(4)
        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherTelefone(user.phone);
            adocaoComErroPO.preencherPetName(user.animalName);
            adocaoComErroPO.preencherMensagem(user.textArea);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Sid sem informar Telefone', () => {
        adocaoComErroPO.selecionarResponsavel(4)

        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name);
            adocaoComErroPO.preencherPetName(user.animalName);
            adocaoComErroPO.preencherMensagem(user.textArea);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Sid sem informar Nome do Animal', () => {
        adocaoComErroPO.selecionarResponsavel(4)

        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name);
            adocaoComErroPO.preencherTelefone(user.phone);
            adocaoComErroPO.preencherMensagem(user.textArea);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Sid sem informar caixa de mensagem', () => {
        adocaoComErroPO.selecionarResponsavel(4)

        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name);
            adocaoComErroPO.preencherTelefone(user.phone);
            adocaoComErroPO.preencherPetName(user.animalName);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Yoda sem informar Nome', () => {
        adocaoComErroPO.selecionarResponsavel(5)

        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherTelefone(user.phone);
            adocaoComErroPO.preencherPetName(user.animalName);
            adocaoComErroPO.preencherMensagem(user.textArea);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Yoda sem informar Telefone', () => {
        adocaoComErroPO.selecionarResponsavel(5)

        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name);
            adocaoComErroPO.preencherPetName(user.animalName);
            adocaoComErroPO.preencherMensagem(user.textArea);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Yoda sem informar Nome do Animal', () => {
        adocaoComErroPO.selecionarResponsavel(5)

        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name);
            adocaoComErroPO.preencherTelefone(user.phone);
            adocaoComErroPO.preencherMensagem(user.textArea);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Yoda sem informar caixa de mensagem', () => {
        adocaoComErroPO.selecionarResponsavel(5)

        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name);
            adocaoComErroPO.preencherTelefone(user.phone);
            adocaoComErroPO.preencherPetName(user.animalName);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Lua sem informar Nome', () => {
        adocaoComErroPO.selecionarResponsavel(6)

        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherTelefone(user.phone);
            adocaoComErroPO.preencherPetName(user.animalName);
            adocaoComErroPO.preencherMensagem(user.textArea);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Lua sem informar Telefone', () => {
        adocaoComErroPO.selecionarResponsavel(6)
        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name);
            adocaoComErroPO.preencherPetName(user.animalName);
            adocaoComErroPO.preencherMensagem(user.textArea);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Lua sem informar Nome do Animal', () => {
        adocaoComErroPO.selecionarResponsavel(6)
        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name);
            adocaoComErroPO.preencherTelefone(user.phone);
            adocaoComErroPO.preencherMensagem(user.textArea);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Lua sem informar caixa de mensagem', () => {
        adocaoComErroPO.selecionarResponsavel(6)

        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name);
            adocaoComErroPO.preencherTelefone(user.phone);
            adocaoComErroPO.preencherPetName(user.animalName);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });

    it('Adoção Amora sem informar Nome', () => {
        adocaoComErroPO.selecionarResponsavel(7)
        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherTelefone(user.phone);
            adocaoComErroPO.preencherPetName(user.animalName);
            adocaoComErroPO.preencherMensagem(user.textArea);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Amora sem informar Telefone', () => {
        adocaoComErroPO.selecionarResponsavel(7)
        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name);
            adocaoComErroPO.preencherPetName(user.animalName);
            adocaoComErroPO.preencherMensagem(user.textArea);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Amora sem informar Nome do Animal', () => {
        adocaoComErroPO.selecionarResponsavel(7)
        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name);
            adocaoComErroPO.preencherTelefone(user.phone);
            adocaoComErroPO.preencherMensagem(user.textArea);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Amora sem informar caixa de mensagem', () => {
        adocaoComErroPO.selecionarResponsavel(7)

        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name);
            adocaoComErroPO.preencherTelefone(user.phone);
            adocaoComErroPO.preencherPetName(user.animalName);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });

    it('Adoção Zelda sem informar Nome', () => {
        adocaoComErroPO.selecionarResponsavel(8);
        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherTelefone(user.phone);
            adocaoComErroPO.preencherPetName(user.animalName);
            adocaoComErroPO.preencherMensagem(user.textArea);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Zelda sem informar Telefone', () => {
        adocaoComErroPO.selecionarResponsavel(8)

        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name);
            adocaoComErroPO.preencherPetName(user.animalName);
            adocaoComErroPO.preencherMensagem(user.textArea);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Zelda sem informar Nome do Animal', () => {
        adocaoComErroPO.selecionarResponsavel(8)

        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name);
            adocaoComErroPO.preencherTelefone(user.phone);
            adocaoComErroPO.preencherMensagem(user.textArea);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
    
    it('Adoção Zelda sem informar caixa de mensagem', () => {
        adocaoComErroPO.selecionarResponsavel(7)
        cy.get("@user").then((user) => {
            adocaoComErroPO.preencherNome(user.name);
            adocaoComErroPO.preencherTelefone(user.phone);
            adocaoComErroPO.preencherPetName(user.animalName);
        })
        adocaoComErroPO.clicarBotaoEnviar();
        cy.get('.error').should('be.visible');
    });
});


