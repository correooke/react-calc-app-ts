/* globals context cy */
/// <reference types="Cypress" />
context('Calculator', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    
    it('Carga inicial', () => {
        cy.contains('Calculator');
    });

    it('Presionar botones por posición', () => {
        cy.get(".numbers > :nth-child(5)").click() // 5
        cy.get(".numbers").click('topLeft'); // 1
        cy.get(".numbers").click('top'); // 2
        cy.get(".editable-field").should('have.text', "512");
    })

    it('Presionar botones por número', () => {
        cy.get(".numbers").within(() => {
            cy.contains('9').click();
            cy.contains('0').click();
            cy.contains('7').click();
        });

        cy.get(".editable-field").should('have.text', "907");
        cy.screenshot();
    })

    it('Test con server', () => {
        cy.server(); // esto puede ir en el beforeEach
        cy.route('POST', '/api/todos', { /* response */ });
        cy.route({ url: '/api/todos', method: 'POST', status: 500, response: {}});
        
        // Utilizando los fixtures
        cy.route('GET', '/api/todos', 'fixture:todos');
    })

    it('Test con server utilizando commands', () => {
        cy.seedAndVisit();
    }) 
    
    it('Utilización de alias', () => {
        /*
        cy.get('.todo-').as("alias")

        cy.get('@alias'
        .should())
        */
    })        

});