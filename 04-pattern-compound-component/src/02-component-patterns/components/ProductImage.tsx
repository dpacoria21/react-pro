import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';
import '../styles/stylesModule.css';

export interface Props {
    img?: string,
    className?: string,
    style?: React.CSSProperties,
}

export const ProductImage = ({img='', className, style}: Props) => {

    const {product} = useContext(ProductContext);

    let imgToShow: string = '';
    if(img) {
        imgToShow = img;
    }else if(product.img) {
        imgToShow = product.img;
    }else {
        imgToShow = noImage;
    }

    return (
        <img style={style} className={`productImg ${className}`} src={imgToShow} alt="Product image" />
    );
};