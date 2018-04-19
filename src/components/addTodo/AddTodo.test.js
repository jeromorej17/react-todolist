import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from './AddTodo';

describe('<AddTodo /> component', () => {
    it('should render successfully', ()=> {
        const component = shallow(<AddTodo />);
        expect(component.exists).toEqual(true);
    });
});