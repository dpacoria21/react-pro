import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { DynamicForm, FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterFormikPage, RegisterPage } from '../03-forms/pages';

export const Navigation = () => {
    return (
        <BrowserRouter>

            <div className='main-layout'>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={'/register'} className={({isActive}) => isActive?'nav-active':''}>Register Page</NavLink> 
                        </li>
                        <li>
                            <NavLink to={'/register-formik'} className={({isActive}) => isActive?'nav-active':''}>Register Formik Page</NavLink> 
                        </li>
                        <li>
                            <NavLink to={'/formik-basic'} className={({isActive}) => isActive?'nav-active':''} >Formik Basic</NavLink> 
                        </li>
                        <li>
                            <NavLink to={'/formik-yup'} className={({isActive}) => isActive?'nav-active':''} >Formik Yup</NavLink> 
                        </li>
                        <li>
                            <NavLink to={'/formik-components'} className={({isActive}) => isActive?'nav-active':''} >Formik Components</NavLink> 
                        </li>
                        <li>
                            <NavLink to={'/formik-abstraction'} className={({isActive}) => isActive?'nav-active':''} >Formik Abstraction</NavLink> 
                        </li>
                        <li>
                            <NavLink to={'/dynamic-form'} className={({isActive}) => isActive?'nav-active':''} >Dynamic Form</NavLink> 
                        </li>
                        <li>
                            <NavLink to={'/users'} className={({isActive}) => isActive?'nav-active':''} >Users</NavLink> 
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='register' element={<RegisterPage />}/>
                    <Route path='register-formik' element={<RegisterFormikPage />}/>
                    <Route path='formik-basic' element={<FormikBasicPage />}/>
                    <Route path='formik-yup' element={<FormikYupPage />} />
                    <Route path='formik-components' element={<FormikComponents />} />
                    <Route path='formik-abstraction' element={<FormikAbstraction />} />
                    <Route path='dynamic-form' element={<DynamicForm/>} />
                    <Route path='users' element={<h1>Users page</h1>}/>
                    <Route path='/*' element={<Navigate replace to={'register'} />}/>
                </Routes>

            </div>

        </BrowserRouter>
    );
};
