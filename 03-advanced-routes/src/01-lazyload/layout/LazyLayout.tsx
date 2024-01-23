import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { LazyloadPage1, LazyloadPage2, LazyloadPage3 } from '../pages';

export const LazyLayout = () => {
    return (
        <div>
            <h1>LazyLayout Page</h1>
            {/* Rutas hijas iran aqui */}

            <ul>
                <li>
                    <NavLink to={'lazy1'}>Lazy 1</NavLink>
                </li>
                <li>
                    <NavLink to={'lazy2'}>Lazy 2</NavLink>
                </li>
                <li>
                    <NavLink to={'lazy3'}>Lazy 3</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path={'lazy1'} element={<LazyloadPage1 />} />
                <Route path={'lazy2'} element={<LazyloadPage2 />} />
                <Route path={'lazy3'} element={<LazyloadPage3 />} />

                <Route path={'*'} element={<Navigate to={'lazy1'} replace/>} />
            </Routes>

        </div>
    );
};

export default LazyLayout;
