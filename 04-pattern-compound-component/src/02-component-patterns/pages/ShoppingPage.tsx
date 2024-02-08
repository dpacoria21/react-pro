import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components';

import '../styles/customStyles.css';
import { products } from '../data/products';
// import { useShoppingCart } from '../hooks/useShoppingCart';


const product = products[0];
export const ShoppingPage = () => {

    // const {shoppingCart, onProductCountChange} = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            
            <ProductCard
                product={product}
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    ({reset, count, increaseBy, isMaxCountReached}) => (
                        <>
                            <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0, 0.2)' }}/>
                            <ProductTitle/>
                            <ProductButtons
                                add={{label: '+', value: 1}} 
                                minus={{label: '-', value: -1}} 
                                // className='custom-buttons'
                            />
                        </>
                    )
                }

            </ProductCard>
            
        </div>
        
    );
};
