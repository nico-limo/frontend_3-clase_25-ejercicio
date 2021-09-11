import React, { useContext } from 'react'
import "../styles.css"
import LanguageContext from '../context'


const Navbar = () => {
    // DESCOMENTAR CUANDO EN APP.JSX TENGA UN PROVIDER
    // const { language, handleChangeLA } = useContext(LanguageContext)
    // const {text} = language // desestructurando language
    return (
        // ESPACIO DE TRABAJO, utilizar los valores de text
        <div className="navbar">
            <p>Inicio</p>
            <p>Idioma actual ES</p>
            <button>Cambiar Idioma</button>
        </div>
    )
}

export default Navbar
