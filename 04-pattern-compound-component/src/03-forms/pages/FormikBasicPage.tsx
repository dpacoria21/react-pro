import { useFormik } from 'formik';
import '../styles/styles.css';

export const FormikBasicPage = () => {

    const {handleChange, values, handleSubmit} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        }
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
