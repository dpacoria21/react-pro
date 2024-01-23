import { useState } from 'react';

export const useProduct = () => {

    const [counter, setCounter] = useState<number>(0);
    
    const increaseBy = (value: number): void => {
        setCounter(c=>Math.max(c + value, 0));
    };
    
    return {
        counter,
        increaseBy,
    };
};
