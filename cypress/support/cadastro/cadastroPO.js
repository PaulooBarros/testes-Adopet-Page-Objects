class CadastroPO {
    preencherNome(nome)  {cy.get(this.selectors.inputName).type(nome)}
    preencherEmail(email) {cy.get(this.selectors.inputEmail).type(email)}
    preencherSenha(senha)  {cy.get(this.selectors.inputSenha).type(senha)}
    confirmarSenha(senha)  {cy.get(this.selectors.inputConfirmarSenha).type(senha)}
    clicarBotaoCadastrar() {cy.get(this.selectors.botaoCadastrar).click()}
    preencherSenhaErrada (senha) {cy.get(this.selectors.inputConfirmarSenha).type(senha + '1')}

    pathCadastro = `${Cypress.env('baseUrl')}/cadastro` 
    selectors = {
        inputName: '[data-test="input-name"]',
        inputEmail: '[data-test="input-email"]',
        inputSenha :'[data-test="input-password"]',
        inputConfirmarSenha :'[data-test="input-confirm-password"]',
        botaoCadastrar: '[data-test="submit-button"]',
        erroCredenciais: '.error',
        senhaErrada: 'senhaErrada1'
    }
}

const cadastroPO = new CadastroPO();

export default cadastroPO;