import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

interface FormValues {
    firstName: string,
    lastName: string,
    email: string,
    jobType: string,
    terms: boolean,
}

const formInit: FormValues = {
    firstName: '',
    lastName: '',
    email: '',
    jobType: '',
    terms: false,
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
                        terms: Yup.boolean()
                            .isTrue('Debe aceptar los terminos y condiciones'),
                        jobType: Yup.string()
                            .required('Requerido')
                            .notOneOf(['it-junior'], 'Esta opcion no es permitida')
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
                            
                            <label htmlFor="jobType">jobType</label>
                            <Field name='jobType' as='select'>
                                <option value=''>Pick something</option>
                                <option value='front-end'>Front End Developer</option>
                                <option value='back-end'>Back End Developer</option>
                                <option value='designer'>Designer</option>
                                <option value='it-junior'>IT junior</option>
                            </Field>
                            <ErrorMessage name='jobType' component={'span'}/>

                            <label>
                                <Field name='terms' type='checkbox'/>
                                terms Address
                            </label>
                            <ErrorMessage name='terms' component={'span'}/>


                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
                
            </Formik>


        </div>
    );
};
