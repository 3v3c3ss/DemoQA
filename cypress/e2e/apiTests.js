describe('', () => {

    it('test api rquest GET method', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then(respuesta => {
            cy.log(respuesta);
            expect(respuesta.status).is.equal(200);
        });
    });

    it('test api rquest GET using destructuring', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then(({ body, status, statusText }) => {
            cy.log(body);
            cy.log(status);
            expect(status).is.equal(200);
            cy.log(statusText);
            expect(statusText).is.equal('OK');
        });
    });

    it('test api rquest GET agregando objetos', () => {
        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/pet/',
            qs: {
                id: 5
            }            
        }).then((respuesta) => {
            cy.log(respuesta);
            expect(respuesta.body[0].id).is.equal(5);
        });
    });

    it('test api rquest HTTP tipo GET y ordenar de forma descendente', () => {
        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/pet/',
            qs: {
                _sort: 'id',
                _order: 'desc'
            }            
        }).then((respuesta) => {
            cy.log(respuesta);
        });
    });

    it('test api rquest tipo GET using slice', () => {
        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/pet/',
            qs: {
                star: '5', //remember system counts after this numbrer
                end: '10' // system takes before this number
            }            
        }).then((respuesta) => {
            cy.log(respuesta);
        });
    });

    it('test api rquest tipo GET using range', () => {
        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/pet/',
            qs: {
                id_gte: '5', //this will be a range between these numbers
                id_lte: '10' 
            }            
        }).then((respuesta) => {
            cy.log(respuesta);
        });
     });

     it('test api rquest tipo GET excluding a parameter', () => {
        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/pet/',
            qs: {
                id_ne: '5' //this won't show the id: 5
            }            
        }).then((respuesta) => {
            cy.log(respuesta);
        });
     });

     it('test api rquest tipo POST', () => {
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/pet/',
            body: {
                "id": 16, 
                "title": "titulo",
                "author": "Evelio"
            }
            
        }).then((respuesta) => {
            cy.log(respuesta);
        });
     });
     
     it('test api rquest tipo DELETE', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://petstore.swagger.io/v2/pet/18',          
        }).then((respuesta) => {
            cy.log(respuesta);
        });
     });

    // a way to create a POST method using ID with the purpose of using it always,
    //we can delete it and add it again

    it('test api rquest tipo POST', () => {
        const id = 18
        cy.request({
            method: 'DELETE',
            url: `https://petstore.swagger.io/v2/pet/${id}`,          
        }).then((respuesta) => {
            cy.log(respuesta);
        });

        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/pet/',
            body: {
                "id": id, 
                "title": "titulo",
                "author": "Evelio"
            }
            
        }).then((respuesta) => {
            cy.log(respuesta);
        });
     });

     it.only('test api rquest PUT', () => {
        cy.request({
            method: 'PUT',
            url: 'https://petstore.swagger.io/v2/pet/10',
            body: {
                "id": 14, 
                "title": "titulo",
                "author": "Evelio"
            }            
        }).then((respuesta) => {
            cy.log(respuesta);
        });
    });

    it.only('test api requests POST methofd in pushingIt', () => {
        const username = 'usuario' + Math.floor(Math.random() * 1000);
        const password = '123456!';
        const gender = 'Male';
        const day = '10';
        const month = 'October';
        const year = '1980';

        cy.request({
            method: 'POST',
            url: 'https://pushing-it-backend.herokuapp.com/api/register',
            body: {
                "username": username, 
                "password": password,
                "gender": gender,
                "year": day,
                "month": month,
                "day": year
            }
            
        }).then((respuesta) => {
            cy.log(respuesta);
        });
     });

    });