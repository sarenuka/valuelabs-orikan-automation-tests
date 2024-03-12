import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import registration from '../Pages/registration';

Given('The user visit Orikan registration page', () => {
    registration.visitOrikanRegistartionPage();
});

When('The user fill in the registration form with valid credentials', () => {
    registration.fillValidRegistration();
});

Then('Then the user enters the contact details', () => {
    registration.correctContactDetails();
});

Then('The user fill valid payment details', () => {
    registration.validPaymentDetails();
});

Then('The user clicks the check-box for terms&conditions', () => {
    registration.clickCheckbox();
});

Then('The user click on submit', () => {
    registration.clickSubmitButton();
});

When('The user fill in the registration form with invalid credentials', () => {
    registration.fillInValidRegistration();
});

Then('Then the user enters wrong contact details', () => {
    registration.enterInCorrectContactDetails();
});

Then('The user fill invalid payment details', () => {
    registration.invalidPaymentDetails();
});

Then('The user validates the success message', () => {
    registration.validatesConfirmationMessage();
});

Then('The user validates the confirmation message', () => {
    registration.validatesConfirmationMessage();
});



