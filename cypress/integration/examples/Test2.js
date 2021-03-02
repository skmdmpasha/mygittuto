/* add a triple-slash directive to the head of your JavaScript or TypeScript testing file.
This will turn the IntelliSense on a per file basis. */
/// <reference types="Cypress" />

describe('My Second Test Suite', () => {
    it('Add to cart', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.wait(2000)
        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').find('.product').each(($el, index, $list) => {
            let productName = $el.find('h4.product-name').text()
            if (productName.includes('Capsicum')) {
                cy.log(productName + "  " + index)
                $el.find('button').click()
            }
        })

        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()

        
        // cy.wait(6000)
        // cy.contains('Place Order').click()

    })
    it('Place Order', () => {
        cy.wait(6000)
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/cart")
        cy.contains('Place Order').click()

    })
})