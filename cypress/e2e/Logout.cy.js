const user = {};
import loginPO from '../support/login/loginPO';
import logoutPO from '../support/logout/logoutPO';

describe('Testes Login AdoPet', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl') + Cypress.env('loginPath'));
        user.email = 'emaildeteste@protechsolutions.com.br';
        user.passwordCerta = 'senhaCorreta1';  
        logoutPO.preencherEmail(user.email)
        logoutPO.preencherSenha(user.passwordCerta)
        logoutPO.clicarBotaoEntrar()
        cy.url().should('be.eq',logoutPO.pathHome)
    });

    it('Fazendo o Logout',() => {
        logoutPO.clicarNoHeaderUsuario()
        logoutPO.clicarBotaoLogout()
        logoutPO.verificarUrlInicial()
    })

    it('Fazendo visualização do perfil', () => {
        logoutPO.clicarNoHeaderUsuario()
        logoutPO.clicarbotaoVerPerfil()
        logoutPO.verificarUrlPerfil()
        cy.contains('Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.').should('be.visible')
    });
})