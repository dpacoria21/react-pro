import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components';

import '../styles/custom-styles.css';

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
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title='Cafe'/>
                    <ProductCard.Buttons add={{label: '+', value: 1}} minus={{label: '-', value: -1}}/>
                </ProductCard>
                
                {/* HOCs */}
                <ProductCard 
                    product={product}
                    className='bg-dark'
                >
                    <ProductImage className='custom-image'/>
                    <ProductTitle className='text-white text-bold'/>
                    <ProductButtons add={{label: '+', value: 1}} minus={{label: '-', value: -1}} />
                </ProductCard>
            </div>
        </div>
        
    );
};
