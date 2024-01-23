import './App.css';
import { CounterEffect } from './bases/CounterEffect';
import { CounterHook } from './bases/CounterHook';

function App() {

    return (
        <>
            <h1>React</h1>
            <hr />

            <CounterEffect initialValue={5}/>
            <CounterHook />

        </>
    );
}

export default App;
