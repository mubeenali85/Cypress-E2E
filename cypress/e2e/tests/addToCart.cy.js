/// <reference types="cypress" />
import homePage from "../../pages/homePage";
const homePageObj = new homePage()

import testData from '../../fixtures/testData.json';




describe('test suite', function () {

    before(() =>{
       // homePageObj.logins(testData.login.email,testData.login.password)
        cy.login(testData.login.username,testData.login.password)
    })
   
    it('Add to Cart flow', () => {
        homePageObj.searchProduct(testData.product.productName)
        homePageObj.addToCart()
        homePageObj.verifySuccessMessage().should('contain',testData.message.successMessage)

    })

})