const expect = require('chai').expect;

describe('TodoList App', ()=> {
    it('should load with the right title', ()=>{
        browser.url('http://localhost:3000/');
        const actualTitle = browser.getTitle();

        expect(actualTitle).to.eql('Todo List');
    });

    it('should allow me to create a Todo', ()=>{
        const todoText = 'Get better at testing';
        browser.url('http://localhost:3000/');
        browser.element('.todo-input').setValue(todoText);
        browser.click('.todo-submit');
        const actual = browser.element('.todo-text').getText();

        expect(actual).to.equal(todoText);

    });

    it('should allow me to delete a Todo', ()=> {
        const todoText = 'Get better at testing';
        browser.url('http://localhost:3000');
        browser.element('.todo-input').setValue(todoText);
        browser.click('.todo-submit');
        browser.click('.todo-delete');
        const actual = browser.element('.todo-text');

        expect(actual.state).to.equal('failure');
    });
});