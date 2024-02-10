import {Formik, Form} from 'formik';
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';

import formJSON from '../data/custom-form.json';


const initialValues: {[key: string]: string} = {};
const requiredFields: {[key: string]: Yup.ISchema<unknown, unknown>} = {};

for(const iterator of formJSON) {
    initialValues[iterator.name] = iterator.value;

    if(!iterator.validations) continue;

    let schema = Yup.string();

    for(const rule of iterator.validations) {
        if(rule.type === 'required') {
            schema = schema.required('Este campo es requerido');
        }

        if(rule.type === 'minLength') {
            schema = schema.min(rule.value || 2, `Minimo de caracteres es ${rule.value || 2}`);
        }

        if(rule.type ==='email') {
            schema = schema.email('Email tiene que ser valido');
        }
        // Agregar mas validaciones

    }

    requiredFields[iterator.name] = schema;

}

const validationSchema = Yup.object({...requiredFields});

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic  Form</h1>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
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
