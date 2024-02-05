import axios from 'axios';
export default () => {
    const submitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const isValidEmail = emailRegex.test(email);

        if (email === '' || password === '') {
            document.getElementById('emptyError').style.display = 'block';
            document.getElementById('error').style.display = 'none';
        } else {
            document.getElementById('emptyError').style.display = 'none';

            if (!isValidEmail) {
                document.getElementById('error').style.display = 'block';
            } else {
                document.getElementById('error').style.display = 'none';

                // Check hardcoded credentials here
                if (email !== 'challenge@alkemy.org' || password !== 'react') {
                    console.log('Credenciales inválidas');
                    return
                }
                console.log('Ok, estamos listos para enviar la información');
                // Continue with the logic you want when the form is valid
            }
            axios
            .post('http://challenge-react.alkemy.org',{ email, password})
            .then(res => {
                console.log(res.data)
            })
        }
};


    return (
        <>
            <h2>Formulario de login</h2>
            <div className="emptyError">
                <p id="emptyError" style={{ display: 'none', color: 'red' }}>
                    Es necesario completar los campos
                </p>
            </div>
            <div className="error">
                <p id="error" style={{ display: 'none', color: 'red' }}>
                    El correo electrónico debe ser válido
                </p>
            </div>
            <form onSubmit={submitHandler}>
                <label>
                    <span>Email:</span>
                    <input type="text" name="email" />
                </label>
                <br />
                <label>
                    <span>Password:</span>
                    <input type="password" name="password" />
                </label>
                <br />
                <button type="submit">Ingresar</button>
            </form>
        </>
    )
}