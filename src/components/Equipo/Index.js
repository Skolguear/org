import Colaborador from "../Colaborador/Index.js";
import "./Equipo.css"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) =>{

    //Destructurar
    const {colorPrimario, colorSecundario, titulo, id} = props.datos;
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props
    const obj ={
        backgroundColor: hexToRgba(colorPrimario, 0.6) 
    }
    const estiloTitulo = {borderColor: colorPrimario}

    return <>
        {   colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
            <input
                type='color'
                className="input-color"
                value={hexToRgba(colorPrimario, 0.6)}
                onChange={(evento) => {
                    actualizarColor(evento.target.value, id)
                }}

            />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, Index) => <Colaborador 
                        datos={colaborador} 
                        key={Index} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                        />)
                    }
                </div>
            </section>
        }
    </>    
}

export default Equipo