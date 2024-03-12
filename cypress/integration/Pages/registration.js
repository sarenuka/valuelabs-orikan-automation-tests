/**
 * Represents the Orikan Registration page.
 * This class contains methods to interact with the registration page elements and perform various actions.
 * @class OrikanRegistration
 */
class OrikanRegistration{

    // Defining locators
    emailAddress_css = '#emailAddress';
    password_css = '#password';
    confirmPassword_css = '#confirmPassword';
    rNextButton_css = '.wizard-button';
    popUpMessage_css = '.toast-message';
    confirmMessage_css = '.ng-untouched > :nth-child(2)';
    submitButton_css = '.primary';
    termsCondition_css = '#termsAndConditions';
    agreedToTerms_css = '#agreedToTerms';
    cardName_css = '#cardHolderName';
    firstName_css = '#firstName';
    lastName_css = '#lastName';
    addressLine1_css = '#addressLine1';
    postcode_css = '#postcode';
    city_css = '#city';
    state_css = '#state';
    cardHolderName_css = '#cardHolderName';
    cardTypeMastercard_css = '#cardTypeMastercard';
    cardNumber_css = '#cardNumber';
    cardCVV_css = '#cardCVV';
    cardExpiryMonth_css = '#cardExpiryMonth';
    cardExpiryYear_css = '#cardExpiryYear';
    emailValidation_css = '.validation > span';
    passwordValidation_css = ':nth-child(2) > .validation-messages > .validation > span';
    firstNameValidation_css = ':nth-child(1) > .validation-messages > .validation > span';
    addressValidation_css = ':nth-child(6) > .validation-messages > .validation > span';
    postcodeValidation_css = ':nth-child(9) > .validation-messages > .validation > span';
    cityValidation_css = ':nth-child(10) > .validation-messages > .validation > span';
    stateCodeValidation_css = ':nth-child(11) > .validation-messages > .validation > span';
    cardNameValidation_css = ':nth-child(1) > .validation-messages > .validation > span';
    cardNumberValidation_css = ':nth-child(3) > .validation-messages > .validation > span';
    cardExpiryValidation_css = '.validation > span';



    


    visitOrikanRegistartionPage(){
        // The user visit the Orikan registration page
        cy.visit(Cypress.env("Url"));
       
    }

    fillValidRegistration(){
        // The user enters correct email and password and validates the pop-up message
        // Test data stored in the fixture registrationDetails.json file
        cy.fixture('registrationDetails').then((testData) =>{
            cy.get(this.emailAddress_css).type(testData.ValidEmail);
        cy.get(this.password_css).type(testData.ValidPass);
        cy.get(this.confirmPassword_css).type(testData.validConfirmPass);
        cy.get(this.rNextButton_css).click();
        cy.wait(3000);
        cy.get(this.popUpMessage_css).should('contain.text', testData.EmailPopup);
        })
        
    }

    correctContactDetails(){
        // The user enters correct contact details
        cy.fixture('registrationDetails').then((testData) =>{
        cy.get(this.firstName_css).type(testData.FirstName);
        cy.get(this.lastName_css).type(testData.LastName);
        cy.get(this.addressLine1_css).type(testData.Address);
        cy.get(this.postcode_css).type(testData.PostCode);
        cy.get(this.city_css).type(testData.City);
        cy.wait(2000);
        cy.get(this.state_css).select(testData.State);
        cy.wait(2000);
        cy.get(this.submitButton_css).click();
        })
    }

    validPaymentDetails(){
        // The user enters invalid payment details
        cy.fixture('registrationDetails').then((testData) =>{
            cy.get(this.cardHolderName_css).type(testData.CName);
            cy.get(this.cardTypeMastercard_css).check();
            cy.get(this.cardNumber_css).type(testData.CNumber);
            cy.get(this.cardCVV_css).type(testData.CVV);
            cy.get(this.cardExpiryMonth_css).select(testData.ExpiryMon);
            cy.get(this.cardExpiryYear_css).type(testData.ExpiryYear);
            cy.get(this.submitButton_css).click();
        })
        
    }

    clickCheckbox(){
        // The user clicks the check-box for terms & conditions
        cy.get(this.termsCondition_css).scrollTo('bottom');
        cy.get(this.agreedToTerms_css).click();
    }

    clickSubmitButton(){
        // The user clicks the submit button
        cy.get(this.submitButton_css).click();
        cy.wait(3000);
        cy.get(this.popUpMessage_css).should('be.visible');
    }

    validatesConfirmationMessage(){
        // The user validates the confirmation message
        cy.get(this.confirmMessage_css).invoke('text').then((text) =>{
            cy.log('Confirm Message: ', text);
        })
    }

    fillInValidRegistration(){
        // The user fills the invalid email and password
        cy.fixture('registrationDetails').then((testData) =>{
            cy.get(this.emailAddress_css).type(testData.InvalidEmail);
            cy.get(this.password_css).click();
            cy.get(this.emailValidation_css).invoke('text').then((text) => {
                cy.log('Invalid Email: ', text);
                cy.log("Please enter a valid email address with Orikan domain not exceeding 150 characters");
            })
            cy.get(this.emailAddress_css).clear().type(testData.ValidEmail);
            cy.get(this.password_css).click();
            cy.get(this.passwordValidation_css).invoke('text').then((text) =>{
                cy.log('Password cannot be empty: ', text);
                cy.log("Please enter valid password with minimum 8 characters, including at least one uppercase letter, one lowercase letter, one number and one special character");
            })
            cy.get(this.password_css).clear().type(testData.ValidPass);
            cy.get(this.confirmPassword_css).click();
            cy.get(this.rNextButton_css).click();
            cy.get(':nth-child(3) > .validation-messages > .validation > span').invoke('text').then((text) =>{
                cy.log('Confirm password cannot be empty: ', text);
                cy.log("Please enter confirm password same as password");
            })
            cy.get(this.confirmPassword_css).clear().type(testData.validConfirmPass);
            cy.get(this.rNextButton_css).click();
            cy.wait(3000);
            cy.get(this.popUpMessage_css).should('contain.text', testData.EmailPopup);
        })
    }

    enterInCorrectContactDetails(){
        // The user enters wrong conatct details
        cy.fixture('registrationDetails').then((testData) =>{
            cy.get(this.firstNameValidation_css).invoke('text').then((text) =>{
                cy.log('First name cannot be empty: ', text);
                cy.log("Please enter valid first name");
            })
            cy.get(this.firstName_css).type(testData.FirstName);
            // cy.get(':nth-child(3) > .validation-messages > .validation > span').invoke('text').then((text) =>{
            //     cy.log('Last name cannot be empty: ', text);
            //     cy.log("Please enter valid last name");
            // })
            // The last name field logic is not executed as the error message is not displayed after entering the first name
            cy.get(this.lastName_css).type(testData.LastName);
            cy.get(this.addressValidation_css).invoke('text').then((text) =>{
                cy.log('Address cannot be empty: ', text);
                cy.log("Please enter valid address");
            })
            cy.get(this.addressLine1_css).type(testData.Address);
            cy.get(this.postcodeValidation_css).invoke('text').then((text) =>{
                cy.log('Postcode cannot be empty: ', text);
                cy.log("Please enter valid postcode");
            })
            cy.get(this.postcode_css).type(testData.PostCode);
            cy.get(this.cityValidation_css).invoke('text').then((text) =>{
                cy.log('City cannot be empty: ', text);
                cy.log("Please enter valid city");
            })
            cy.get(this.city_css).type(testData.City);
            cy.get(this.stateCodeValidation_css).invoke('text').then((text) =>{ 
                cy.log('State cannot be empty: ', text);
                cy.log("Please state from the dropdown");
            })
            cy.get(this.state_css).select(testData.State);
            cy.get(this.submitButton_css).click();
    })
    }

    invalidPaymentDetails(){
        // The user enters invalid payment details
        cy.fixture('registrationDetails').then((testData) =>{
            cy.get(this.cardHolderName_css).click();
            //cy.get(this.cardTypeMastercard_css).check();
            cy.get(this.cardNumber_css).click();
            cy.get(this.cardNameValidation_css).invoke('text').then((text) =>{  
                cy.log('Card holder name cannot be empty: ', text);
                cy.log("Please enter valid card holder name");
            })
            cy.get(this.cardHolderName_css).type(testData.CName);
            cy.get(this.cardTypeMastercard_css).check();
            cy.get(this.cardName_css).click();
            cy.get(this.cardCVV_css).click();
            cy.get(this.cardNumberValidation_css).invoke('text').then((text) =>{  
                cy.log('Card number cannot be empty: ', text);
                cy.log("Please enter valid card number");
            })
            cy.get(this.cardNumber_css).type(testData.CNumber);
            cy.get(':nth-child(4) > .validation-messages > .validation > span').invoke('text').then((text) =>{  
                cy.log('Card CVV cannot be empty: ', text);
                cy.log("Please enter valid card CVV");
            })
            cy.get(this.cardCVV_css).type(testData.CVV);
            cy.get(this.cardExpiryMonth_css).select(testData.ExpiryMon);
            cy.get(this.submitButton_css).click();
            cy.get(this.cardExpiryValidation_css).invoke('text').then((text) =>{ 
                cy.log('Card expiry year cannot be empty: ', text);
                cy.log("Please enter card expiry year");
            })
            cy.get(this.cardExpiryYear_css).type(testData.ExpiryYear);
            cy.get(this.submitButton_css).click();
    })
}
}

const registration = new OrikanRegistration();
export default registration;