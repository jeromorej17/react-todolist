import actions from './actions';
import types from '../constants/constants';

describe('Actions', ()=> {
    const todoText =  'A todo';

    it('should create an action to add a todo', ()=>{
        const expectedAction = {
            type: types.SUBMIT_TODO,
            id: 1,
            text: todoText
        }

        expect(actions.submitTodo(todoText)).toEqual(expectedAction);
    });

    it('should create an action to delete a todo', ()=>{
        const expectedAction = {
            type: types.DELETE_TODO,
            id: 1           
        }

        expect(actions.deleteTodo(1)).toEqual(expectedAction);
    })
})