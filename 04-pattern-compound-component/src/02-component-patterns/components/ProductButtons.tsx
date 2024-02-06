import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

interface ButtonAction {
    value: number,
    label: string,
}

export interface Props {
    add: ButtonAction,
    minus: ButtonAction,
    className?: string,
    activeBtnClass?: string,
}

export const ProductButtons = ({add, minus, className}: Props) => {

    const {counter, increaseBy} = useContext(ProductContext);

    return (
        <div className={`${styles.buttonsContainer} ${className}`}>
            <button onClick={() => increaseBy(minus.value)} className={styles.buttonMinus}>
                {minus.label}
            </button>
            <div className={styles.countLabel}>
                {counter}
            </div>
            <button onClick={() => increaseBy(add.value)} className={styles.buttonAdd}>
                {add.label}
            </button>
        </div>
    );
};