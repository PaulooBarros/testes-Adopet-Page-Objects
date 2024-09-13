class LogoutPO {
    preencherEmail(email) {cy.get(this.selectors.inputEmailLogin).type(email)}
    preencherSenha(senha) {cy.get(this.selectors.inputSenhaLogin).type(senha)}
    clicarBotaoEntrar() {cy.get(this.selectors.botaoEntrarLogin).click()}
    clicarNoHeaderUsuario() {cy.get(this.selectors.headerUsuario).click()}
    clicarBotaoLogout() {cy.get(this.selectors.botaoLogout).click()}
    clicarbotaoVerPerfil() {cy.get(this.selectors.botaoVerPerfil).click()}
    verificarUrlInicial() {cy.url().should('be.eq', this.selectors.urlInicial)}
    verificarUrlPerfil() {cy.url().should('be.eq', this.selectors.urlPerfil)}


    pathHome = `${Cypress.env('baseUrl')}/home` 
    selectors = {
        inputEmailLogin: '[data-test="input-loginEmail"]',
        inputSenhaLogin: '[data-test="input-loginPassword"]',
        botaoEntrarLogin: '[data-test="submit-button"]',
        erroCredenciais: '.error',
        headerUsuario: '.header__user',
        botaoLogout: '[data-test="submit-button"]',
        botaoVerPerfil: '.button',
        urlInicial: 'https://adopet-frontend-cypress.vercel.app/',
        urlPerfil: 'https://adopet-frontend-cypress.vercel.app/perfil'
    }
}

const logoutPO = new LogoutPO();
export default logoutPO;