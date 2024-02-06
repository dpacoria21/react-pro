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
                <ProductCard 
                    product={product}
                    className='bg-dark text-white'
                >
                    <ProductCard.Image className='custom-image'/>
                    <ProductCard.Title className='text-bold' title='Cafe'/>
                    <ProductCard.Buttons activeBtnClass='asdasd' className='custom-buttons' add={{label: '+', value: 1}} minus={{label: '-', value: -1}}/>
                </ProductCard>
                
                {/* HOCs */}
                <ProductCard 
                    product={product}
                    className='bg-dark text-white'
                >
                    <ProductImage className='custom-image'/>
                    <ProductTitle className='text-bold'/>
                    <ProductButtons 
                        add={{label: '+', value: 1}} 
                        minus={{label: '-', value: -1}} 
                        className='custom-buttons'
                        activeBtnClass='asddasd'
                    />
                </ProductCard>
            </div>
        </div>
        
    );
};
