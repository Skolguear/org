
import './App.css';
import Header from './components/Header/Header';
import Formulario  from './components/Formulario/Formulario'


/*Los apartados de Header se mandan a llamar con llaves a la funcion {Header()} o con las etiquetas
mismas de la funcion y se reconoce con la letra mayuscula <Header></Header> y con <Header/>
*/
function App() {
  return (
    <div>
      <Header/>
      <Formulario/>
    </div>
  );
}

export default App;
