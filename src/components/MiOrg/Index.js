import { useState } from "react"

import  "./Miorg.css"
const MiOrg = (props) => {
    //Estado hooks
    //useState
    //Definir estados que cambia a lo largo de la aplicacion switch 
    //const {nombreVariable, funcionActualiza} = useState(Valor inicial)
    console.log(props)
    //const [mostrar, actualizarMostrar] = useState(true)
    //const manejarClick = () => {
    //    console.log("Mostrar/Ocultar elemento", !mostrar)
    //    actualizarMostrar(!mostrar)
    //}

    return <section className="orgSection">
        <h3 className="tittle">Mi organización</h3>
        <img src="./img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg