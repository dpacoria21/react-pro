import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import logo from '../assets/react.svg';
import { routes } from './routes';
import { Suspense } from 'react';

export const Navigation = () => {
    return (
        <Suspense fallback = {<span>Loading...</span>}>
            <BrowserRouter>

                <div className='main-layout'>
                    <nav>
                        <img src={logo} alt='react-logo'/>
                        <ul>
                            {
                                routes.map((route) => (
                                    <li key={route.name}>
                                        <NavLink to={route.to} className={({isActive}) => isActive?'nav-active':''}>{route.name}</NavLink> 
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map((route) => (
                                <Route key={route.name} path={route.path} element={<route.Component />}/>
                            ))
                        }
                        <Route path='/*' element={<Navigate to={routes[0].to} replace/>}/>
                    </Routes>

                </div>

            </BrowserRouter>
        </Suspense>
    );
};
