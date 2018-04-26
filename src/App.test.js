import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { initialState } from './reducers/reducer';


describe('<App /> component', ()=> { 

  it('renders without crashing', () => {
    const submitMock = jest.fn();
    const component = shallow(<App 
                                state={initialState} 
                                submitTodo={submitMock} 
                              /> 
                             );
    expect(component.exists()).toEqual(true);
  });

});

