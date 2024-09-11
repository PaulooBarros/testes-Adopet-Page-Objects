const user = {};
import loginPO from '../support/login/loginPO';

describe('Testes Login AdoPet', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl') + Cypress.env('loginPath'));
        user.email = 'teste123456789@protechsolutions.com.br';
        user.emailErrado = 'emailErrado@protechsolutions.com.br';
        user.passwordErrada = 'senhaErrada1';
        user.passwordCerta = 'senhaCorreta1';  
    });

        it.only('Login com dados válidos', () => {
            loginPO.preencherEmail(user.email);
            loginPO.preencherSenha(user.passwordCerta);
            loginPO.clicarBotaoEntrar()
            cy.wait(1000)
            cy.url().should('eq',loginPO.pathHome)
        });

        it('Login com email inválido', () => {
            loginPO.preencherEmail(user.emailErrado);
            loginPO.preencherSenha(user.passwordCerta);
            loginPO.clicarBotaoEntrar()
            cy.get(loginPO.selectors.erroCredenciais).should('be.visible')
        });

        it('Login com senha inválida', () => {
            loginPO.preencherEmail(user.email)
            loginPO.preencherSenha(user.passwordErrada)
            loginPO.clicarBotaoEntrar()
            cy.get(loginPO.selectors.erroCredenciais).should('be.visible')
        });

        it.only('Login com email em branco', () => {
            loginPO.preencherSenha(user.passwordCerta)
            loginPO.clicarBotaoEntrar()
            cy.get(loginPO.selectors.erroCredenciais).should('be.visible')
        });

        it('Login com senha em branco', () => {
            loginPO.preencherEmail(user.email)
            loginPO.clicarBotaoEntrar()
            cy.get(loginPO.selectors.erroCredenciais).should('be.visible')
        });
});
