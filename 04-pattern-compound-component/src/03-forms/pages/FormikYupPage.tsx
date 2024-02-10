import { useFormik } from 'formik';
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

export const FormikYupPage = () => {

    

    const {handleChange, values, handleSubmit, errors, touched,handleBlur} = useFormik({
        initialValues: formInit,
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
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
    });

    console.log(errors);

    return (
        <div>
            <h1>Formik Yup Tutorial</h1>

            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="firstName">FirstName</label>
                <input 
                    type="text" 
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {
                    touched.firstName && errors.firstName && <span>{errors.firstName}</span>
                }
                    
                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {
                    touched.lastName && errors.lastName && <span>{errors.lastName}</span>
                }

                <label htmlFor="email">Email Address</label>
                <input 
                    type="email" 
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {
                    touched.email && errors.email && <span>{errors.email}</span>
                }

                <button type="submit">Submit</button>
            </form>

        </div>
    );
};
