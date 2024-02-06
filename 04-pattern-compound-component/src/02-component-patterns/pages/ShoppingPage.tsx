import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components';

import '../styles/customStyles.css';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';

export const ShoppingPage = () => {

    const {shoppingCart, onProductCountChange} = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {products.map((product) => (
                    <ProductCard 
                        key={product.id}
                        product={product}
                        className='bg-dark text-white'
                        onChange={onProductCountChange}
                        value={shoppingCart[product.id]?.count ?? 0}
                    >
                        <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0, 0.2)' }} className='custom-image'/>
                        <ProductTitle className='text-bold'/>
                        <ProductButtons
                            add={{label: '+', value: 1}} 
                            minus={{label: '-', value: -1}} 
                            className='custom-buttons'
                        />
                    </ProductCard>
                ))}
            </div>
            <div className='shopping-cart'>

                {
                    Object.entries(shoppingCart).map((productCart) => (
                        <ProductCard
                            key={productCart[0]}
                            product={productCart[1]}
                            className='bg-dark text-white'
                            style={{width: '100px'}}
                            value={productCart[1].count}
                            onChange={onProductCountChange}
                        >
                            <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0, 0.2)' }} className='custom-image'/>
                            <ProductButtons
                                add={{label: '+', value: 1}} 
                                minus={{label: '-', value: -1}} 
                                className='custom-buttons'
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>
                    ))
                }

            </div>
        </div>
        
    );
};
