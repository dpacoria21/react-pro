import { Props as ProductButtonsProps } from './../components/ProductButtons';
import { Props as ProductImageProps } from './../components/ProductImage';
import { Props as ProductTitleProps } from './../components/ProductTitle';
import { ReactElement } from 'react';

export interface Product {
    id: string,
    title: string,
    img?: string,
}

export interface Props {
    product: Product,
    children?: ReactElement | ReactElement[]
    className?: string
}

export interface ProductContextProps {
    counter: number,
    increaseBy: (a: number) => void
    product: Product
}

export interface ProductCardProps {
    ({ product, children }: Props): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element;
    Image: (Props: ProductImageProps) => JSX.Element;
    Buttons: (Props: ProductButtonsProps) => JSX.Element;
}