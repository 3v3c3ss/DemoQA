/// <reference types="cypress" />

describe('', () => {
    
    it('test api requests POST methofd in pushingIt', () => {

        cy.request({
            url: 'https://pushing-it.onrender.com/api/login',
            method: 'POST',
            body: {
              username : "pushingit",
              password : "123456!" 
            }
        }).then((respuesta) => {
            window.localStorage.setItem('token', respuesta.body.token);
            window.localStorage.setItem('user', respuesta.body.user.username);
        });

        cy.visit('https://pushing-front.vercel.app/');
    });

    it('test api requests, should add, edit, delete and validate that the element has been deleted', () => {
        const username = 'pushingit';
        const password = '123456!';
        cy.request({
            url: 'https://pushing-it.onrender.com/api/login',
            method: 'POST',
            body: {
              username : username,
              password : password 
            }
        }).then((respuesta) => {
            window.localStorage.setItem('token', respuesta.body.token);
            window.localStorage.setItem('user', respuesta.body.user.username);
            expect(respuesta.status).is.equal(201)
            expect(respuesta.body.user.username).is.equal(username)

            cy.resquest({
                method: "PUT",
                url: `https://pushing-it.onrender.com/${respuesta.body.id}`,
                body: {
                    id: respuesta.body.id,
                    author: `${respuesta.body.author} + edited`,
                    title: `${respuesta.body.title} + 'edited`
                }
            }).then(respuesta => {
                expect(respuesta.status).is.equal(200)
                expect(respuesta.body.id).is.equal(id)
                expect(respuesta.body.title).is.equal(title = 'edited')
                expect(respuesta.body.author).is.equal(author = 'edited')

                cy.request({
                    method: "DELETE",
                    url: `https://pushing-it.onrender.com/${respuesta.body.id}`
                }).then(respuesta => {
                    expect(respuesta.status).is.equal(200)
                })
            });

        });

        cy.visit('https://pushing-front.vercel.app/');
    });

    it.only('test api rquest PUT', () => {
        cy.request({
            method: 'GET',
            url: 'petstore.swagger.io/v2/user/',
            body: {
                day: "3",
                gender: "Male",
                month: "April",
                password: "123456!",
                username: "Evelio93643dad513",
                year: "1994"
            }            
        }).then((respuesta) => {
            cy.log(respuesta);
        });
    });

})   