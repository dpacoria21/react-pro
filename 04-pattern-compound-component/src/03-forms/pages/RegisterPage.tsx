import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {

    const {
        onChange, resetForm, formData, isValidEmail,
        email, name,
        password1, password2
    } = useForm({
        name: '',
        email: '',
        password1: '', 
        password2: '',
    });


    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={(e) => onSubmit(e)}>
                <input 
                    type="text"
                    placeholder="Name"
                    value={name}
                    name='name'
                    onChange={onChange}
                    // onChange={} 
                    // value={}
                />
                {name.trim().length <= 0 && <span>Este campo es necesario</span>}

                <input 
                    type="email"
                    value={email}
                    name='email'
                    onChange={onChange}
                    placeholder="email"
                />
                {!isValidEmail(email) && <span>Este email no es valido</span>}

                <input 
                    type="password"
                    value={password1}
                    name='password1'
                    onChange={onChange}
                    placeholder="password"
                />
                {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña debe ser mayor que 6</span>}

                <input 
                    type="password"
                    value={password2}
                    name='password2'
                    onChange={onChange}
                    placeholder="Repeat password"
                />
                {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password2.trim().length > 0 && password1!==password2 && <span>Las contraseñas deben ser iguales</span>}

                <button type="submit">Create</button>
                <button type="button" onClick={resetForm}>Reset</button>

            </form>
        </div>
    );
};
