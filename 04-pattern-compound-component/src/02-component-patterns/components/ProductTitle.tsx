import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import '../styles/stylesModule.css';

export interface Props {
    title?: string,
    className?: string,
    style?: React.CSSProperties,
}

export const ProductTitle = ({title, className, style}: Props) => {

    const {product} = useContext(ProductContext);

    return (
        <span style={style} className={`productDescription ${className}`}> {title ? title : product.title} </span>
    );
};