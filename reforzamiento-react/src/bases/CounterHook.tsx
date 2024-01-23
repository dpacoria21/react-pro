import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {

    const {counter, elementToAnimate, handleClick} = useCounter({
        initialValue: 5,
        maxCount: 10
    });

    return (
        <>
            <h1>useCounter: </h1>
            <h2 ref={elementToAnimate}>{counter}</h2>
            <button onClick={() => handleClick(1)}>
                +1
            </button>
        </>
    );
};
