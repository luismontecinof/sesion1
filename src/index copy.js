import React,{useState} from "react";
import reactDom from "react-dom";

import FormularioFormik from "./FormularioFormik";
import "./FormularioFormik.css"

// function Saludo() {
//   return (
//     <>
//       <h1>Hola mundo!</h1>
//       <div>Hola!</div>
//     </>
//   )
// }

// Saludo seria un container
//<Persona primerNombre="Luis" segundoNombre="Ernesto"/>
const Saludo = () => {
  const [nombre, setNombre] = useState("Luis");
  //setNombre("Otro Nombre"); //<- genere un error de Too many render.
  //console.log(nombre);
  return (
    <>
      <Persona primerNombre={nombre} segundoNombre="Ernesto"/>
      <Mensaje onClick={() => {
        setNombre("Elizabeth")
      }}/>
      <button onClick={() => {
        setNombre("Elizabeth")
      }}>Boton</button>
    </>
  )
} 

//Componente
//const Persona = (props)=> {
  const Persona = ({primerNombre, segundoNombre})=> { //<= destructuracion
  //return <h1>{props.primerNombre} {props.segundoNombre}</h1>
  return <h1>{primerNombre} {segundoNombre}</h1>
}

//Componente
const Mensaje = () => {
  return <h1>Hola!</h1>
}

reactDom.render(<FormularioFormik />, document.getElementById("root"));
