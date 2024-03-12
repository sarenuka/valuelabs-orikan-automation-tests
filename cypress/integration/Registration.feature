Feature: Registration Page

    Allows the user to register in Orikan website with email address, contact information
    and payment details

    Background:
        Given The user visit Orikan registration page


    @registration
    Scenario: Successful Registration
        When The user fill in the registration form with valid credentials
        Then Then the user enters the contact details
        Then The user fill valid payment details
        Then The user clicks the check-box for terms&conditions
        Then The user click on submit
        Then The user validates the success message

    @registration
    Scenario: Unsuccessful Registration
        When The user fill in the registration form with invalid credentials
        Then Then the user enters wrong contact details
        Then The user fill invalid payment details
        Then The user clicks the check-box for terms&conditions
        Then The user click on submit
        Then The user validates the confirmation message


