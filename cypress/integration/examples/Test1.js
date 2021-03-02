/* add a triple-slash directive to the head of your JavaScript or TypeScript testing file.
This will turn the IntelliSense on a per file basis. */
/// <reference types="Cypress" />

describe('My First Test Suite', () => {
    it('My First Test case', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.wait(2000)
        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length', 4)

        /* parent child chaining */
        // cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        // cy.get('.product').eq(2).contains('ADD TO CART').click()
        // cy.get('.product:eq(2)').contains('ADD TO CART').click() //jquery selector

        // Iterate through an array like structure (arrays or objects with a length property).
        cy.get('.products').find('.product').each(($el, index, $list) => {
            let productName = $el.find('h4.product-name').text()

            // javascript 'includes' method to find substring
            if (productName.includes('Capsicum')) {
                cy.log(productName + "  " + index)
                // wrap this element so we can use cypress commands on it
                // cy.wrap($el).contains('ADD TO CART').click()

                // Get the descendent DOM elements of a specific selector.
                $el.find('button').click()
            }
        })

    })
})