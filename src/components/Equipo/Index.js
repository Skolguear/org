import Colaborador from "../Colaborador/Index.js";
import "./Equipo.css"

const Equipo = (props) =>{

    //Destructurar
    const {colorPrimario, colorSecundario, titulo} = props.datos;
    const {colaboradores, eliminarColaborador} = props
    const obj ={
        backgroundColor: colorSecundario
    }
    console.log(colaboradores.length > 0)
    const estiloTitulo = {borderColor: colorPrimario}

    return <>
        {   colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, Index) => <Colaborador 
                        datos={colaborador} 
                        key={Index} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        />)
                    }
                </div>
            </section>
        }
    </>    
}

export default Equipo