import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import noImage from '../assets/no-image.jpg';
import { ReactElement, createContext, useContext } from 'react';

interface Product {
    id: string,
    title: string,
    img?: string,
}

interface Props {
    product: Product,
    children?: ReactElement | ReactElement[]
}


interface ProductContextProps {
    counter: number,
    increaseBy: (a: number) => void
    product: Product
}

const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;


export const ProductImage = ({img = ''}) => {

    const {product} = useContext(ProductContext);

    let imgToShow: string = '';
    if(img) {
        imgToShow = img;
    }else if(product.img) {
        imgToShow = product.img;
    }else {
        imgToShow = noImage;
    }

    return (
        <img className={styles.productImg} src={imgToShow} alt="Product image" />
    );
};

export const ProductTitle = ({title}: {title?: string}) => {

    const {product} = useContext(ProductContext);

    return (
        <span className={styles.productDescription}> {title ? title : product.title} </span>
    );
};

interface ButtonAction {
    value: number,
    label: string,
}

interface ProductButtonsProps {
    add: ButtonAction,
    minus: ButtonAction,
}

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

export const ProductCard = ({product, children}: Props) => {

    const {counter, increaseBy} = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>

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
        </Provider>
    );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;