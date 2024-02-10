import { useField } from 'formik';

interface Props {
    label: string,
    name: string,
    id? :string,
    placeholder?: string,
    [x: string]: unknown
}

export const MySelect = ({label, ...props}: Props) => {

    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props}/>
            {
                meta.touched && meta.error && 
                    <span>{meta.error}</span>
            }
        </>
    );
};
