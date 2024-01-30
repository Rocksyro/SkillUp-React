export default () => {
    return(
        <>
        <h2>Formulario de login</h2>
        <form>
            <label>
                <span>Email:</span>
                <input type="email" name="email"/>
            </label>
            <br/>
            <label>
                <span>Password:</span>
                <input type="password" name="password"/>
            </label>
            <br/>
            <button type="submit">Ingresar</button>
        </form>
        </>
    )
}