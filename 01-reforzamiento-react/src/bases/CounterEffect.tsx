import { useEffect, useRef, useState } from 'react';
import {gsap} from 'gsap';

interface Props {
    initialValue: number,
}

const MAXIMUN_COUNT: number = 10;

export const CounterEffect = ({initialValue}: Props) => {

    const [counter, setCounter] = useState<number>(initialValue);
    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = (n: number): void => {
        // if(counter === MAXIMUN_COUNT && n>0) return;
        // setCounter(c => c+n);
        setCounter(c => Math.min(c+n, MAXIMUN_COUNT));
    };

    useEffect(() => {

        if(counter < 10) return;
        console.log('%cSe llego al valor maximo', 'color:red; background-color: black;');

        const tl = gsap.timeline();

        tl.to(counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out'});
        tl.to(counterElement.current, {y: 0, duration: 1, ease: 'bounce'});

    }, [counter]);

    return (
        <>
            <h1>CounterEffect: </h1>
            <h2 ref={counterElement}>{counter}</h2>
            <button onClick={() => handleClick(1)}>
                +1
            </button>
        </>
    );
};
