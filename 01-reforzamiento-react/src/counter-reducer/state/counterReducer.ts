import { CounterAction } from '../actions/actions';
import { CounterState } from '../interfaces/interface';

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {

    switch(action.type) {

        case 'increaseBy': {
            return {
                changes: state.changes+1,
                previous: state.counter,
                counter: state.counter+action.payload.value,
            };
        }
        case 'reset':
            return {
                changes: 0,
                counter: 0,
                previous: 0,
            };
        default:
            return state;
        
    }
    
};