import React from 'react';
import styles from '../styles/estudiante.css';
export default function Demo() {
    return (
        <div>
            <h1 className={styles.heading}>¡Bienvenido Estudiante!</h1>
            <form className={styles.form}>
                <h2>Favor de ingresar su no. de control:</h2>
                <label className={styles.label}>No. de Control*</label>
                <input type="text" name="txtnoControl" id="txtnoControl" required />
                <br />
                <input type="submit" name="btnEntrar" id="btnEntrar" value="Ingresar" />
            </form>
        </div>
    );
}
