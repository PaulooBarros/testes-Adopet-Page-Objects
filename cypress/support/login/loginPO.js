class LoginPO {
    preencherEmail(email) {cy.get(this.selectors.inputEmailLogin).type(email)}
    preencherSenha(senha) {cy.get(this.selectors.inputSenhaLogin).type(senha)}
    clicarBotaoEntrar() {cy.get(this.selectors.botaoEntrarLogin).click()}
    
    
    pathHome = `${Cypress.env('baseUrl')}/home` 
    selectors = {
        inputEmailLogin: '[data-test="input-loginEmail"]',
        inputSenhaLogin: '[data-test="input-loginPassword"]',
        botaoEntrarLogin: '[data-test="submit-button"]',
        erroCredenciais: '.error',
    }
};

const loginPO = new LoginPO();

export default loginPO;
