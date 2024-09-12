class AdocaoPO {
    preencherNome(nome) {cy.get(this.selectors.nomeMensagem).type(nome, {delay: 0})}
    preencherTelefone(telefone) {cy.get(this.selectors.telefoneMensagem).type(telefone, {delay: 0})}
    preencherPetName(petName) {cy.get(this.selectors.petName).type(petName, {delay: 0});}
    preencherMensagem(mensagem) {cy.get(this.selectors.caixaMsg).type(mensagem, {delay: 0});}
    clicarBotaoEnviar() {cy.get(this.selectors.botaoEnviar).click();}
    preencherEmailLogin() {cy.get(this.selectors.inputEmailLogin).type('emaildeteste@protechsolutions.com.br')}
    preencherSenhaLogin() {cy.get(this.selectors.inputSenhaLogin).type('senhaCorreta1')}
    clicarBotaoMensagem() {cy.get(this.selectors.headerMessagem).click()}
    selecionarDunga() {cy.get(this.selectors.responsavelDunga).click()}
    selecionarFelicia() {cy.get(this.selectors.responsavelFelicia).click()}
    selecionarSirius() {cy.get(this.selectors.responsavelSirius).click()}
    selecionarFiona() {cy.get(this.selectors.responsavelFiona).click()}
    selecionarSid() {cy.get(this.selectors.responsavelSid).click()}
    selecionarYoda() {cy.get(this.selectors.responsavelYoda).click()}
    selecionarLua() {cy.get(this.selectors.responsavelLua).click()}
    selecionarAmora() {cy.get(this.selectors.responsavelAmora).click()}
    selecionarZelda() {cy.get(this.selectors.responsavelZelda).click()}

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
         responsavelDunga: ':nth-child(1) > .card__contact',
         responsavelFelicia: ':nth-child(2) > .card__contact',
         responsavelSirius: ':nth-child(3) > .card__contact',
         responsavelFiona: ':nth-child(4) > .card__contact',
         responsavelSid: ':nth-child(5) > .card__contact',
         responsavelYoda: ':nth-child(6) > .card__contact',
         responsavelLua: ':nth-child(7) > .card__contact',
         responsavelAmora: ':nth-child(8) > .card__contact',
         responsavelZelda :':nth-child(9) > .card__contact'
    }

    
}

const adocaoPO = new AdocaoPO();

export default adocaoPO;