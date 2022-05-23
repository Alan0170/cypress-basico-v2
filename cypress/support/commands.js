
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Alan')
    cy.get('#lastName').type('Michel')
    cy.get('#email').type('alan@exemplo.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button' ,'Enviar').click()
})
