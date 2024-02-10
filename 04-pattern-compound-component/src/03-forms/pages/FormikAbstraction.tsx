import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components/MySelect';
import { MyCheckbox } from '../components/MyCheckbox';

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

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

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

                            <MyTextInput label='First Name' name='firstName' placeholder='Diego'/>
   
                            <MyTextInput label='Last Name' name='lastName' placeholder='Pacori'/>                        

                            <MyTextInput label='Email' name='email' placeholder='pedrito@gmail.com'/>
                            
                            

                            <MySelect name='jobType' label='Job Type'>
                                <option value=''>Pick something</option>
                                <option value='front-end'>Front End Developer</option>
                                <option value='back-end'>Back End Developer</option>
                                <option value='designer'>Designer</option>
                                <option value='it-junior'>IT junior</option>
                            </MySelect>

                            <MyCheckbox label='Terms and Conditions' name='terms'/>

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
                
            </Formik>


        </div>
    );
};
