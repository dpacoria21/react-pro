import './App.css';
import { CounterEffect } from './bases/CounterEffect';

function App() {

    return (
        <>
            <h1>React</h1>
            <hr />

            <CounterEffect initialValue={5}/>

        </>
    );
}

export default App;
