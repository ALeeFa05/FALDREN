export default function Demo() {
    return (
        <div>
            <h1>¡Bienvenido Docente!</h1>
            <form>
                 <h2> Favor de ingresar su id: </h2>
                <label>ID*
                <input type="text" name="txtID" id="txtID" required />
                </label><br/>
                <input type="submit" name="btnEntrar" id="btnEntrar" value="Ingresar" />
        </form>   
        </div>
    );
}
