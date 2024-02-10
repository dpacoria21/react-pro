import { ErrorMessage, useField } from 'formik';

interface Props {
    label: string,
    name: string,
    id? :string,
    type?: 'text' | 'email' | 'pasword',
    placeholder?: string,
    [x: string]: unknown
}

export const MyTextInput = ({label, ...props}: Props) => {

    const [
        field, 
        // meta
    ] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className='text-input' {...field} {...props}/>
            <ErrorMessage name={props.name} component={'span'}/>
            {/* {
                meta.touched && meta.error && 
                    <span>{meta.error}</span>
            } */}
        </>
    );
};
