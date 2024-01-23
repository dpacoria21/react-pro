import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import noImage from '../assets/no-image.jpg';
import { ReactElement } from 'react';

interface Product {
    id: string,
    title: string,
    img?: string,
}

interface Props {
    product: Product,
    children?: ReactElement | ReactElement[]
}


export const ProductImage = ({img = ''}) => {
    return (
        <img className={styles.productImg} src={img ? img : noImage} alt="Product image" />
    );
};

export const ProductTitle = ({title}: {title: string}) => {
    return (
        <span className={styles.productDescription}> {title} </span>
    );
};

interface ButtonAction {
    value: number,
    label: string,
}
interface ProductButtonsProps {
    counter: number,
    add: ButtonAction,
    minus: ButtonAction,
    increaseBy: (a: number) => void
}

export const ProductButtons = ({counter, add, minus, increaseBy}: ProductButtonsProps) => {
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

export const ProductCard = ({product, children}: Props) => {

    const {counter, increaseBy} = useProduct();

    return (
        <div className={styles.productCard}>

            {children}
            {/* <ProductImage img={product.img}/>

            <ProductTitle title={product.title}/>

            <ProductButtons 
                add={ {label: '+', value: 1} }
                minus={ {label: '-', value: -1} }
                counter={counter}
                increaseBy={increaseBy}            
            /> */}
        </div>
    );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;