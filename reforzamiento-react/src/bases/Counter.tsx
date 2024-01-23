import { useState } from 'react';

interface Props {
    initialValue: number,
}

export const Counter = ({initialValue}: Props) => {

    const [counter, setCounter] = useState<number>(initialValue);

    const handleClick = (n: number): void => {
        setCounter(c => c+n);
    };

    return (
        <>
            <button onClick={() => handleClick(1)}>
                Aumentar Contador
            </button>
            <p>
                Contador: {counter}
            </p>
            <button onClick={() => handleClick(-1)}>
                Disminuir Contador
            </button>
        </>
    );
};
