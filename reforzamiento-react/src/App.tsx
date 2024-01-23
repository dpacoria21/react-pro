import './App.css';
import { CounterEffect } from './bases/CounterEffect';
import { CounterHook } from './bases/CounterHook';
import { CounterReducerComponent } from './counter-reducer/CounterReducer';

function App() {

    return (
        <>
            <h1>React</h1>
            <hr />

            <CounterEffect initialValue={5}/>
            <CounterHook />
            <CounterReducerComponent />

        </>
    );
}

export default App;
