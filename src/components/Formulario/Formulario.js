import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import "./Formulario.css"
import Boton from "../Boton/Index"

const Formulario = () => {

    const manejarEnvio = (e) =>{
        e.preventDefault()
        console.log("Manejar el envio", e)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre"/>
            <CampoTexto titulo="Puesto" placeholder="Ingresa tu puesto"/>
            <CampoTexto titulo="Foto" placeholder="Añade tu foto"/>
            <ListaOpciones titulo="Equipo" placeholder="Seleccionar equipo"/>
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario