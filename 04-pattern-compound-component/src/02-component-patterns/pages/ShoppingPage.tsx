import { useState } from 'react';
import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components';
import { Product } from '../interfaces/interfaces';

import '../styles/customStyles.css';

const product1 = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
};

const product2 = {
    id: '2',
    title: 'Coffee Mug - Meme',
    img: './coffee-mug2.png'
};

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
    count: number
}

export const ShoppingPage = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({count, product}: {count: number, product:Product}) => {
        setShoppingCart( oldShoppingCart => {

            if(count===0) {
                const {[product.id]:toDelete, ...rest} = oldShoppingCart;
                console.log({toDelete});
    
                return rest;
            }

            return {
                ...oldShoppingCart,
                [product.id]: {...product, count}
            };

        });

        // Forma 2:
        // delete shoppingCart[product.id];
        // setShoppingCart({
        //     ...shoppingCart
        // });

        // Forma 1:
        // setShoppingCart(oldShoppingCart => {
        //     delete oldShoppingCart[product.id];
        //     return {...oldShoppingCart};
        // });
    };

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

                {/* <ProductCard 
                    product={product2}
                    className='bg-dark text-white'
                    style={{width: '100px'}}
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
                </ProductCard> */}

            </div>
            <div>
                <code>
                    {JSON.stringify(shoppingCart, null, 5)}
                </code>
            </div>
        </div>
        
    );
};
