import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components';

import '../styles/customStyles.css';

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
};

export const ShoppingPage = () => {
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
                {/* Compound Component Patter */}
                <ProductCard 
                    product={product}
                    className='bg-dark text-white'
                >
                    <ProductCard.Image style={{ boxShadow: '10px 10px 10px rgba(0,0,0, 0.2)' }} className='custom-image'/>
                    <ProductCard.Title className='text-bold' title='Cafe'/>
                    <ProductCard.Buttons className='custom-buttons' add={{label: '+', value: 1}} minus={{label: '-', value: -1}}/>
                </ProductCard>
                
                {/* HOCs */}
                <ProductCard 
                    product={product}
                    className='bg-dark text-white'
                >
                    <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0, 0.2)' }} className='custom-image'/>
                    <ProductTitle className='text-bold'/>
                    <ProductButtons
                        add={{label: '+', value: 1}} 
                        minus={{label: '-', value: -1}} 
                        className='custom-buttons'
                    />
                </ProductCard>
                <ProductCard 
                    product={product}
                    style={{backgroundColor: '#70d1f8'}}
                >
                    <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0, 0.2)' }}/>
                    <ProductTitle style={{ fontWeight: 'bold' }} />
                    <ProductButtons
                        style={{
                            display: 'flex',
                            justifyContent: 'end'
                        }}
                        add={{label: '+', value: 1}} 
                        minus={{label: '-', value: -1}} 
                    />
                </ProductCard>
            </div>
        </div>
        
    );
};
