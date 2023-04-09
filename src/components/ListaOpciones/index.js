import "./ListaOpciones.css"
const ListaOpciones = (props) =>{

    //Metodo map -> arreglo.map( (equipo, index) => {
    //    return <option> </option>
    // })
    const equipos = [
        "Programacion",
        "Front end",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Movil",
        "Innovacion y Gestión"
    ]

    return <div className="lista-opciones">
        <label>{props.titulo.toUpperCase()}</label>
        <select>
        {equipos.map((equipos, index) => <option key={index}>{equipos}</option>)}
        </select>
    </div>
}

export default ListaOpciones