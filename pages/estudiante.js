import React from 'react';



export default function Demo() {
    return (
        <div>
            <h1 >¡Bienvenido Estudiante!</h1>
            <form >
                <h2>Favor de ingresar su no. de control:</h2>
                <label >No. de Control*</label>
                <input type="text" name="txtnoControl" id="txtnoControl" required />
                <br />
                <input type="submit" name="btnEntrar" id="btnEntrar" value="Ingresar" />
            </form>
        </div>
    );
}
