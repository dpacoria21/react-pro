import { LazyExoticComponent, lazy } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string,
}  

const lazyLayout = lazy(() => import( /* webpackChunkName: "LazyLoadPage1" */ '../01-lazyload/layout/LazyLayout'));
// const lazy2 = lazy(() => import( /* webpackChunkName: "LazyLoadPage2" */ '../01-lazyload/pages/LazyloadPage2'));
// const lazy3 = lazy(() => import( /* webpackChunkName: "LazyLoadPage3" */ '../01-lazyload/pages/LazyloadPage3'));

export const routes: Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: lazyLayout,
        name: 'Lazy Layout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No lazy',
    }
];