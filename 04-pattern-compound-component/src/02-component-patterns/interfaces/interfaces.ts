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

interface ButtonAction {
    value: number,
    label: string,
}

export interface ProductButtonsProps {
    add: ButtonAction,
    minus: ButtonAction,
}

export interface ProductContextProps {
    counter: number,
    increaseBy: (a: number) => void
    product: Product
}

export interface ProductCardProps {
    ({ product, children }: Props): JSX.Element,
    Title: ({ title }: { title?: string | undefined }) => JSX.Element;
    Image: ({ img }: { img?: string | undefined }) => JSX.Element;
    Buttons: ({ add, minus }: ProductButtonsProps  ) => JSX.Element;
}