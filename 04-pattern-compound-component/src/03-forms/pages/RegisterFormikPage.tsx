import '../styles/styles.css';
import { Form, Formik } from 'formik';
import { MyTextInput } from '../components';

import * as Yup from 'yup';

interface FormValues {
    name: string,
    email: string,
    password1: string,
    password2: string,
}

const initForm:FormValues = {
    name: '',
    email: '',
    password1: '',
    password2: '',
}; 

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik 
                initialValues={initForm}
                onSubmit={(values) => {
                    console.log(values);
                }}
                onReset={() => {

                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .required('requerido')
                            .min(2, 'Deberia ser como minimo 2 caracteres')
                            .max(15, 'Deberia ser como maximo 15 caracteres'),
                        email: Yup.string()
                            .email('Debe ser un email valido')
                            .required('Requerido'),
                        password1: Yup.string()
                            .min(6, 'Minimo 6 caracteres')
                            .required('Requerido'),
                        password2: Yup.string()
                            .oneOf([Yup.ref('password1')], 'Debe ser igual al password1')
                            .required('Requerido')
                    })
                }
            >
                {
                    ({handleReset}) => (
                        <Form>
                            <MyTextInput label='Name' name='name' type='text' placeholder='Name'/>
                            <MyTextInput label='Email' name='email' type='email' placeholder='pedrito@gmail.com'/>
                            <MyTextInput label='Password' name='password1' type='password' placeholder='password1'/>
                            <MyTextInput label='Confirm password' name='password2' type='password' placeholder='password2'/>
                            <button type="submit">Create</button>
                            <button type="button" onClick={handleReset}>Reset</button>
                        </Form>

                    )
                }
            </Formik>

        </div>
    );
};
