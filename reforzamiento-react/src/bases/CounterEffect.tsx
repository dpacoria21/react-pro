import { useEffect, useState } from 'react';

interface Props {
    initialValue: number,
}

const MAXIMUN_COUNT: number = 10;

export const CounterEffect = ({initialValue}: Props) => {

    const [counter, setCounter] = useState<number>(initialValue);

    const handleClick = (n: number): void => {
        // if(counter === MAXIMUN_COUNT && n>0) return;
        // setCounter(c => c+n);
        setCounter(c => Math.min(c+n, MAXIMUN_COUNT));
    };

    useEffect(() => {

        if(counter < 10) return;
        console.log('%cSe llego al valor maximo', 'color:red; background-color: black;');

    }, [counter]);

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
