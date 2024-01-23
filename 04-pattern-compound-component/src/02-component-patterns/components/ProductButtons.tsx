import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import { ProductButtonsProps } from '../interfaces/interfaces';

export const ProductButtons = ({add, minus}: ProductButtonsProps) => {

    const {counter, increaseBy} = useContext(ProductContext);

    return (
        <div className={styles.buttonsContainer}>
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