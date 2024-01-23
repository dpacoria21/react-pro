import { LazyExoticComponent, lazy } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string,
}  

const lazy1 = lazy(() => import( /* webpackChunkName: "LazyLoadPage1" */ '../01-lazyload/pages/LazyloadPage1'));
const lazy2 = lazy(() => import( /* webpackChunkName: "LazyLoadPage2" */ '../01-lazyload/pages/LazyloadPage2'));
const lazy3 = lazy(() => import( /* webpackChunkName: "LazyLoadPage3" */ '../01-lazyload/pages/LazyloadPage3'));

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: lazy1,
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: lazy2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: lazy3,
        name: 'Lazy-3'
    }
];