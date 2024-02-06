import { useEffect, useRef, useState } from 'react';
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product,
    value?: number,
    onChange?: (args: onChangeArgs) => void
}

export const useProduct = ({onChange, product, value = 0}: useProductArgs) => {

    const [counter, setCounter] = useState<number>(value);
    const isControlled = useRef(!!onChange);
    
    const increaseBy = (value: number): void => {

        if(isControlled.current) {
            return onChange!({count: value, product});
        }

        const newValue = Math.max(counter+value, 0);
        setCounter(newValue);
        onChange && onChange({count: newValue, product});
    };
    
    useEffect(() => {
        setCounter(value);
    }, [value]);

    return {
        counter,
        increaseBy,
    };
};
