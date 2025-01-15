
/// <reference types="cypress" />

import registerPage from "../../pages/registerPage";
import registerData from '../../fixtures/registerData.json';

const registerObj = new registerPage()

describe('Test automation',function(){

    it('register flow',function(){
        registerObj.openURL()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.selectCheckbox()
        registerObj.clickOnContinue()
    })

})
