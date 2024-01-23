import { useReducer } from 'react';
import { counterReducer } from './state/counterReducer';
import { CounterState } from './interfaces/interface';
import * as actions from './actions/actions';

const INITIAL_STATE: CounterState = {
    counter: 3,
    previous: 2,
    changes: 3,
};

export const CounterReducerComponent = () => {

    const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const increaseBy = (value: number): void => {
        dispatch(actions.doIncreaseBy(value));
    };

    const onReset = () => {
        dispatch(actions.doReset());
    };

    return (
        <>
            <h1>Counter Reducer: {state.counter}</h1>
            <button style={{marginRight: 10}} onClick={() => increaseBy(1)}>
                +1
            </button>
            <button style={{marginRight: 10}} onClick={() => increaseBy(5)}>
                +5
            </button>
            <button style={{marginRight: 10}} onClick={() => increaseBy(10)}>
                +10
            </button>
            <button onClick={onReset}>
                Reset
            </button>
        </>
    );
};