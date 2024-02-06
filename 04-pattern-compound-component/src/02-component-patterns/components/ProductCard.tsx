import '../styles/stylesModule.css';
import { useProduct } from '../hooks/useProduct';
import { ReactElement, createContext } from 'react';
import { Product, ProductContextProps } from '../interfaces/interfaces';

export interface Props {
    product: Product,
    children?: ReactElement | ReactElement[],
    className?: string,
    style?: React.CSSProperties,
}


export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export const ProductCard = ({product, children, className, style}: Props) => {

    const {counter, increaseBy} = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>

            <div style={style} className={`productCard ${className}`}>

                {children}
                
            </div>
        </Provider>
    );
};

// export default ProductCard;