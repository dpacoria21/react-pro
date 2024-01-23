import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import logo from '../assets/react.svg';
import { LazyloadPage1, LazyloadPage2, LazyloadPage3 } from '../01-lazyload/pages';



export const Navigation = () => {
    return (
        <BrowserRouter>

            <div className='main-layout'>
                <nav>
                    <img src={logo} alt='react-logo'/>
                    <ul>
                        <li>
                            <NavLink to={'lazy1'} className={({isActive}) => isActive?'nav-active':''}>Lazy 1</NavLink> 
                        </li>
                        <li>
                            <NavLink to={'/lazy2'} className={({isActive}) => isActive?'nav-active':''} >Lazy 2</NavLink> 
                        </li>
                        <li>
                            <NavLink to={'/lazy3'} className={({isActive}) => isActive?'nav-active':''} >Lazy 3</NavLink> 
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='lazy1' element={<LazyloadPage1 />}/>
                    <Route path='lazy2' element={<LazyloadPage2 />}/>
                    <Route path='lazy3' element={<LazyloadPage3 />}/>
                    <Route path='/*' element={<Navigate to={'/lazy1'} />}/>
                </Routes>

            </div>

        </BrowserRouter>
    );
};
