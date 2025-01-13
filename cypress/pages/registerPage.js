/// <reference types="cypress" />

class registerPage
{
    weblocators={

        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        passwordConfirm: '#input-confirm',
        policyCheckbox: 'input[type="checkbox"]',
        continue: '.btn.btn-primary'
    }
    openURL(){
        cy.visit(Cypress.env('URL'))
        
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    }

    enterFirstName(FName)
    {
        cy.get(this.weblocators.firstName).type(FName)
    }

    enterLastName(LName)
    {
        cy.get(this.weblocators.lastName).type(LName)
    }

    enterEmail(email)
    {
        cy.get(this.weblocators.email).type(email)
    }
    enterTelephone(phoneno)
    {
        cy.get(this.weblocators.telephone).type(phoneno)
    }
    enterPassword(password)
    {
        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.passwordConfirm).type(password)
    }

    selectCheckbox()
    {
        cy.get(this.weblocators.policyCheckbox).check()
    }
    clickOnContinue()
    {
        cy.get(this.weblocators.continue).click()
    }



}

export default registerPage;
