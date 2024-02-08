import '../styles/stylesModule.css';
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { InitialValues, Product, ProductCardHandlers, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';

export interface Props {
    product: Product,
    // children?: ReactElement | ReactElement[],
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string,
    style?: React.CSSProperties,
    onChange?: (args: onChangeArgs) => void,
    value?: number,
    initialValues?: InitialValues
}


export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export const ProductCard = ({product, children, className, style, onChange, value, initialValues = {}}: Props) => {

    const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProduct( {onChange, product, value, initialValues} );
    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>

            <div style={style} className={`productCard ${className}`}>

                {
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount: initialValues?.maxCount,
                        reset,
                        product,
                        increaseBy,

                    })
                }
                
            </div>
        </Provider>
    );
};

// export default ProductCard;