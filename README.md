# valuelabs-orikan-automation-tests
Automation testscripts for Orikan Software Tester Aptitude Test.This project uses BDD approach by utilizing cucumber framework

### Downloading Dependecies
    Download latest Cypress version, currently using Cypress version 12.12.0
        npm install cypress@latest
    	npm install -D @bahmutov/cypress-esbuild-preprocessor
        npm install -D @badeball/cypress-cucumber-preprocessor
    Successful download can be verified on package.json
 
### Configuration
Update the configuration file cypress.json to customize the Cypress settings according to your needs.     
 
## Running Test
    Running Headless browser
        npx cypress run --spec "cypress/e2e/<fileName>.cy.js"
	Running with traditional browser
        npx cypress run --headed --spec "cypress/e2e/<fileName>.cy.js"	
        npx cypress run --headed --spec "cypress/integration/<filename>.feature"	
## Project Structure
 
	valuelabs-orikan-automation-tests/
	└── cypress/
	    ├── fixtures/
	    │   └── testdata
	    │	    
	    ├── integration/
	    │	└──
	    │   	├── stepDefinitions
	    │   	├── pages
	    │   	├── features
	    │   ├── support/
	    │   │   └── 
	    │   │       ├── commands
	    │   │       ├── e2e
	    ├── node_modules   
	    ├── plugins
	    ├── config
	    ├── env	
	    ├── package
	    ├── package-lock
	    └── readme

 
## Directory Guidelines
*  `cypress/fixtures/testdata`: Conatins the testdata for logics written
*  `cypress/integration`: Contains the feature files written in Gherkin syntax and steps and page classes.
*  `cypress/support`: Contains commands related to plugins and e2e file.
*  `cypress/node_modules`: Contains node libraries.
*  `cypress/plugins`: Contains downloaded plugin details
*  `cypress/config`: Conatins configuration details for cypress, framework, sqlserver and specpattern.
*  `cypress/env`: Contains environment details with url and credentials
*  `cypress/package`: Contains details about cypress dependencies
*  `cypress/package-lock`: Conatins details about node_modules dependencies
