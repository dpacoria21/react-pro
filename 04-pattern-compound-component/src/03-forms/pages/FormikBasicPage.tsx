import { FormikErrors, useFormik } from 'formik';
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

export const FormikBasicPage = () => {

    const validate = ({email, firstName, lastName}: FormValues) => {
        
        const errors:FormikErrors<FormValues> = {};

        if(!firstName) {
            errors.firstName = 'Required';
        }else if(firstName.length > 15) {
            errors.firstName = 'Must be 15 characters or less';
        }

        if(!lastName) {
            errors.lastName = 'Required';
        }else if(lastName.length > 15) {
            errors.lastName = 'Must be 15 characters or less';
        }

        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }


        return errors;
    };

    const {handleChange, values, handleSubmit} = useFormik({
        initialValues: formInit,
        onSubmit: (values) => {
            console.log(values);
        },
        validate
    });

    
    return (
        <div>
            <h1>Formik Basic Tutorial</h1>

            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="firstName">FirstName</label>
                <input 
                    type="text" 
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                />
                <span>First name is required</span>
                    
                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                />
                <span>Last name is required</span>

                <label htmlFor="email">Email Address</label>
                <input 
                    type="email" 
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />
                <span>Email is required</span>
                <span>Check for an valid email format</span>

                <button type="submit">Submit</button>
            </form>

        </div>
    );
};