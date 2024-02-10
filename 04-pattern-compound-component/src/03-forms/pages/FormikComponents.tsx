import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

interface FormValues {
    firstName: string,
    lastName: string,
    email: string,
}

const formInit: FormValues = {
    firstName: '',
    lastName: '',
    email: ''
};

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={formInit}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Debe de tener 15 caracteres o menos')
                            .required('Requerido'),
                        lastName: Yup.string()
                            .max(15, 'Debe de tener 15 caracteres o menos')
                            .required('Requerido'),
                        email: Yup.string()
                            .required('Requerido')
                            .email('Debe ser un email valido'),
                    })
                }
            >
                {
                    (formik) => (
                        <Form>
                            <label htmlFor="firstName">FirstName</label>
                            <Field name='firstName' type='text'/>
                            <ErrorMessage name='firstName' component={'span'}/>
                                
                            <label htmlFor="lastName">Last Name</label>
                            <Field name='lastName' type='text'/>
                            <ErrorMessage name='lastName' component={'span'}/>
                        

                            <label htmlFor="email">Email Address</label>
                            <Field name='email' type='text'/>
                            <ErrorMessage name='email' component={'span'}/>

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
                
            </Formik>


        </div>
    );
};
