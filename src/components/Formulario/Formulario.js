import CampoTexto from "../CampoTexto"
import "./Formulario.css"

const Formulario = () => {
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto/>
            <CampoTexto/>
            <CampoTexto/>
        </form>
    </section>
}

export default Formulario