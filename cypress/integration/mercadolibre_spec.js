describe('Mercadolibre Home Page', () => {
  it('Should go to Home page', () => {
    cy.visit('/');

    const toTypeValue = 'Portátil lenovo';

    cy.get('input[type="text"][ placeholder="buscar"]')
      .type(`${toTypeValue}{enter}`)
      .should('have.value', toTypeValue);

    cy.get('.items-container > div').should(($p) => {
      expect($p).to.have.length.of.at.least(1);
    });

    cy.contains(toTypeValue, { matchCase: false });
  });
});
