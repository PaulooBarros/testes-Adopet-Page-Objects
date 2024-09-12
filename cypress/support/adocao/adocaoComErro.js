class AdocaoComErroPO {
    preencherNome(nome) {cy.get(this.selectors.nomeMensagem).type(nome, {delay: 0})}
    preencherTelefone(telefone) {cy.get(this.selectors.telefoneMensagem).type(telefone, {delay: 0})}
    preencherPetName(petName) {cy.get(this.selectors.petName).type(petName, {delay: 0});}
    preencherMensagem(mensagem) {cy.get(this.selectors.caixaMsg).type(mensagem, {delay: 0});}
    clicarBotaoEnviar() {cy.get(this.selectors.botaoEnviar).click();}
    preencherEmailLogin() {cy.get(this.selectors.inputEmailLogin).type('emaildeteste@protechsolutions.com.br')}
    preencherSenhaLogin() {cy.get(this.selectors.inputSenhaLogin).type('senhaCorreta1')}
    clicarBotaoMensagem() {cy.get(this.selectors.headerMessagem).click()}
    selecionarResponsavel(index = 1) {cy.get(this.selectors.responsavel(index)).click()}  

    pathHome = `${Cypress.env('baseUrl')}/home`
    selectors = {
         inputEmailLogin: '[data-test="input-loginEmail"]',
         inputSenhaLogin: '[data-test="input-loginPassword"]',
         headerMessagem: '.header__message',
         telefoneMensagem: '#phone',
         nomeMensagem: '#name'     ,   
         petName:  '#petName',
         caixaMsg: '#msg',
         botaoEnviar: '[data-test="submit-button"]',
         responsavel: (index = 1) => `:nth-child(${index}) > .card__contact`,
    }
}

const adocaoComErroPO = new AdocaoComErroPO();

export default adocaoComErroPO;