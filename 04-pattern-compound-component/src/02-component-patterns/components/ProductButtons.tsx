import { useContext } from 'react';
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

    const {counter, increaseBy} = useContext(ProductContext);

    return (
        <div style={style} className={`buttonsContainer ${className}`}>
            <button onClick={() => increaseBy(minus.value)} className={'buttonMinus'}>
                {minus.label}
            </button>
            <div className={'countLabel'}>
                {counter}
            </div>
            <button onClick={() => increaseBy(add.value)} className={'buttonAdd'}>
                {add.label}
            </button>
        </div>
    );
};