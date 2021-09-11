import React, { useState } from 'react'
import LanguageContext, { languages } from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';

const App = () => {
  const [language, setLanguage] = useState(languages.english);


  const handleChangeLA = () => {
    // ESPACIO DE TRABAJO, funcion que cambia un idioma por otro
   console.log("DO SOME MAGIC");
  }
  return (
    // ESPACIO DE TRABAJO, agregar el LanguageContext
    <>
      <Navbar />
      <Body />
    </>
  )
}

export default App