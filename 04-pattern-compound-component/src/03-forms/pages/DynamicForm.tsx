import {Formik, Form} from 'formik';
import formJSON from '../data/custom-form.json';
import { MyTextInput } from '../components';

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
                            {formJSON.map(({type, name, placeholder, label}) => {
                                return <MyTextInput key={name} type={(type as unknown)} name={name} placeholder={placeholder} label={label}/>;
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
