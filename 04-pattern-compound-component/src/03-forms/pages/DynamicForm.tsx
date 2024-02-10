import {Formik, Form} from 'formik';
import formJSON from '../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';

const initialValues: {[key: string]: string} = {};

for(const iterator of formJSON) {
    initialValues[iterator.name] = iterator.value;
}

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic  Form</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {
                    (formik) => (
                        <Form>
                            {formJSON.map(({type, name, placeholder, label, options}) => {
                                if(type==='text' || type==='password' || type==='email') {
                                    return <MyTextInput key={name} type={type} name={name} placeholder={placeholder} label={label}/>;
                                }else if(type==='select') {
                                    return (
                                        <MySelect 
                                            key={name}
                                            label={label}
                                            name={name}
                                        >
                                            <option value=''>Select an option</option>
                                            {
                                                options?.map(({id, label}) => (
                                                    <option key={id} value={id}>{label}</option>
                                                ))
                                            }
                                        </MySelect>
                                    );
                                }
                            })}
                            <button type='submit'>Submit</button>
                            <span>Hola Mundo</span>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
};
