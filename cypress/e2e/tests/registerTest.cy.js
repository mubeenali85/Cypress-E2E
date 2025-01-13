
/// <reference types="cypress" />

import registerPage from "../../pages/registerPage";
import { registerData } from "../../fixtures/registerData";

const registerObj = new registerPage()

describe('Test automation',function(){

    it('register flow',function(){
        registerObj.openURL()

        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName("Mubeen Ali")
        registerObj.enterEmail("Mubeen@gmail.com")
        registerObj.enterTelephone("501111111")
        registerObj.enterPassword("Test123")
        registerObj.selectCheckbox()
        //registerObj.clickOnContinue()
        /*
        registerObj.enterFirstName("Mubeen Ali")
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.selectCheckbox()
        registerObj.clickOnContinue()
        */

    })

})
