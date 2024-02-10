import { ErrorMessage, useField } from 'formik';

interface Props {
    label: string,
    name: string,
    id? :string,
    [x: string]: unknown
}

export const MyCheckbox = ({label, ...props}: Props) => {

    const [
        field, 
        // meta
    ] = useField({...props, type: 'checkbox'});

    return (
        <>
            <label>
                <input type='checkbox' {...field} {...props} />
                {label}
            </label>
            <ErrorMessage name={props.name} component={'span'}/>
            {/* {
                meta.touched && meta.error && 
                    <span>{meta.error}</span>
            } */}
        </>
    );
};