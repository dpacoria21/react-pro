import { useState } from 'react';

interface Props {
    initialValue: number,
}

interface CounterState {
    value: number,
    clicks: number,
}

export const Counter = ({initialValue}: Props) => {

    const [counter, setCounter] = useState<CounterState>({
        value: initialValue,
        clicks: 0
    });

    const handleClick = (n: number): void => {
        setCounter( ({value, clicks}) => ({
            value: value+n,
            clicks: clicks+1,
        }));
    };

    return (
        <>
            <button onClick={() => handleClick(1)}>
                Aumentar Contador
            </button>
            <p>
                Contador: {counter.value}
            </p>
            <p>
                Clicks: {counter.clicks}
            </p>
            <button onClick={() => handleClick(-1)}>
                Disminuir Contador
            </button>
        </>
    );
};
