import './App.css';
import { Counter } from './bases/Counter';

function App() {

    return (
        <>
            <h1>React</h1>
            <hr />

            <Counter initialValue={10}/>

        </>
    );
}

export default App;
