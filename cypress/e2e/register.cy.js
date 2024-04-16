/// <reference types="cypress" />

describe ('Test DemoQa Website', () =>{

    before('', () =>{
        

    });

    beforeEach('visit page', () =>{
        cy.visit('');
    });

    it('Resgiter Form', () =>{ 
       // cy.get('.category-cards > :nth-child(1)').click();
        cy.xpath('//h5[text()="Forms"]').click();
        //cy.get(':nth-child(2) > .group-header > .header-wrapper').click();
        cy.xpath('//span[text()="Practice Form"]').click();
        //cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click();
        //cy.get('#firstName').type('Evelio');
        cy.xpath('//input[@id="firstName"]').type('Evelio');
        //cy.get('#lastName').type('Sanchez');
        cy.xpath('//input[@id="lastName"]').type('Sanchez');
        //cy.get('#userEmail').type('evelio@gmail.com');
        cy.xpath('//input[@id="userEmail"]').type('evelio12342@gmail.com');
        //cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
        cy.xpath('//input//following-sibling::label[@for="gender-radio-1"]').click();
        //cy.get('#userNumber').type('1234567');
        cy.xpath('//div//descendant::input[@id="userNumber"]').type('1234567890');
        //cy.get('.react-datepicker__month-select').select('April');
        cy.xpath('//input[@id="dateOfBirthInput"]').click();
        //cy.get('.react-datepicker__year-select').select('1994');
        cy.xpath('//div//descendant::select[@class="react-datepicker__month-select"]').select('April');
        //cy.get('.react-datepicker__day react-datepicker__day--006').click();
        cy.xpath('//select[@class="react-datepicker__year-select"]').select('1994');
        //cy.get('.custom-control-label > p.Sports').check();
        cy.xpath('//div[@class="react-datepicker__day react-datepicker__day--006"]').click();
        //cy.xpath('//input[@id="subjectsInput"]').type('C');
        //cy.xpath('//input//descendant::div[text()="Commerce"]').click();
        //cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click();
        cy.xpath('//label[@for="hobbies-checkbox-1"]').click();
        //cy.get('#currentAddress').type('This is a message');
        cy.xpath('//textarea[@id="currentAddress"]').type('This is a message');
        //cy.get('#stateCity-wrapper > :nth-child(2)').select('Uttar Pradesh');
        cy.xpath('//div[@id="state"]').click();
        cy.xpath('//div[text()="Uttar Pradesh"]').click();
        //cy.get('.css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer')
        cy.xpath('//div[@id="city"]').click();
        cy.xpath('//div[text()="Agra"]').click();
        cy.xpath('//button[@id="submit"]').click();
        cy.xpath('//div[text()="Thanks for submitting the form"]').should('exist');
    
    });

    it('Validate fields error messages', () => {


    });
});