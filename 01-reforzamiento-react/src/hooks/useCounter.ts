import gsap from 'gsap';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

interface Props {
    initialValue: number,
    maxCount: number,
}

export const useCounter = ({initialValue, maxCount}: Props) => {

    const [counter, setCounter] = useState<number>(initialValue);
    const elementToAnimate = useRef<any>(null);
    const tl = useRef(gsap.timeline());


    const handleClick = (n: number): void => {
        // if(counter === MAXIMUN_COUNT && n>0) return;
        // setCounter(c => c+n);
        setCounter(c => Math.min(c+n, maxCount));
    };

    useLayoutEffect(() => {
        
        if (!elementToAnimate.current) return;
        tl.current.to(elementToAnimate.current, {y: -10, duration: 0.2, ease: 'ease.out'});
        tl.current.to(elementToAnimate.current, {y: 0, duration: 1, ease: 'bounce'});
        tl.current.pause();

    }, []);

    useEffect(() => {
        tl.current.play(0);
    }, [counter]);

    return {
        counter,
        handleClick,
        elementToAnimate,
    };
};