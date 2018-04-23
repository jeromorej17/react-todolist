import { reducer, initialState } from './reducer';
import types from '../constants/constants';

describe('Reducer', ()=>{
    const toodText = 'A text';

    it('should return the initial state when no action is passed', ()=>{
        expect(reducer(undefined, {})).toEqual(initialState);
    })

    describe('Submit todo', ()=>{
        it('should return the correct state', ()=>{
            const action = {
                type: types.SUBMIT_TODO,
                id: 1,
                text: toodText
            };

            const expectedState = {
                todos: [
                    {
                        id: 1,
                        text: toodText
                    },
                ],
            };

            expect(reducer(undefined, action)).toEqual(expectedState);
        })
    })
})