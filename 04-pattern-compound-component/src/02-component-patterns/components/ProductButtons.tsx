import { useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';
import '../styles/stylesModule.css';

interface ButtonAction {
    value: number,
    label: string,
}

export interface Props {
    add: ButtonAction,
    minus: ButtonAction,
    className?: string,
    style?: React.CSSProperties,
}

export const ProductButtons = ({add, minus, className, style}: Props) => {

    //TODO: maxCount
    const {counter, increaseBy, maxCount} = useContext(ProductContext);

    const isMaxReached = useCallback(() => {
        return counter === maxCount;
    }, [counter, maxCount]);

    return (
        <div style={style} className={`buttonsContainer ${className}`}>
            <button onClick={() => increaseBy(minus.value)} className={'buttonMinus'}>
                {minus.label}
            </button>
            <div className={'countLabel'}>
                {counter}
            </div>
            <button onClick={() => increaseBy(add.value)} className={`buttonAdd ${isMaxReached() && 'disabled'}`}>
                {add.label}
            </button>
        </div>
    );
};