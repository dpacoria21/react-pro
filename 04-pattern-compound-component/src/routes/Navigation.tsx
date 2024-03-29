import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import logo from '../assets/react.svg';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';


export const Navigation = () => {
    return (
        <BrowserRouter>

            <div className='main-layout'>
                <nav>
                    <img src={logo} alt='react-logo'/>
                    <ul>
                        <li>
                            <NavLink to={'/'} className={({isActive}) => isActive?'nav-active':''}>Shopping Page</NavLink> 
                        </li>
                        <li>
                            <NavLink to={'/about'} className={({isActive}) => isActive?'nav-active':''} >About</NavLink> 
                        </li>
                        <li>
                            <NavLink to={'/users'} className={({isActive}) => isActive?'nav-active':''} >Users</NavLink> 
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/' element={<ShoppingPage />}/>
                    <Route path='about' element={<h1>about bebita</h1>}/>
                    <Route path='users' element={<h1>Users page</h1>}/>
                    <Route path='/*' element={<Navigate to={'/'} />}/>
                </Routes>

            </div>

        </BrowserRouter>
    );
};
