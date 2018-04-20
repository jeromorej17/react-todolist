import React from 'react';
import { shallow, mount } from 'enzyme';
import AddTodo from './AddTodo';


describe('<AddTodo /> component', () => {
    let component;
    const submitMock = jest.fn();
    
    beforeEach( ()=> {
        component = shallow(<AddTodo />); 
    });

    it('should render successfully', ()=> {
        expect(component.exists()).toEqual(true);
    });

    it('should have one input', ()=> {
        expect(component.find('.todo-input').length).toEqual(1);
    });
   
    describe('Add todo button', ()=> {
        it('should exist', ()=> {
            expect(component.find('.todo-submit').length).toEqual(1);
        });

        it('should call the submitTodo() function when form is submitted', ()=> {
            
            component = mount(<AddTodo submitTodo={submitMock} />);

            expect(submitMock.mock.calls.length).toEqual(0);
            expect(component.find('form').length).toBe(1);
            component.find('form').simulate('submit');
            expect(submitMock.mock.calls.length).toEqual(1);
        });

       
    })
});

