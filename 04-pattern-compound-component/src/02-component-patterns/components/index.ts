import { ProductCardProps } from '../interfaces/interfaces';
import {ProductCard as ProductCardHOC} from './ProductCard';

import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export * from './ProductImage';
export * from './ProductTitle';
export * from './ProductButtons';


export const ProductCard: ProductCardProps = Object.assign(ProductCardHOC, {
    Image: ProductImage,
    Title: ProductTitle,
    Buttons: ProductButtons
});

export default ProductCard;
