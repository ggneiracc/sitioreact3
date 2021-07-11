//import logo from './logo.svg';
//import './App.css';
import C01componente from "./components/C01componente";
import C02contador from "./components/C02contador";
import C03componenteConCss from "./components/C03CompCss";
import EjemploDeEstado from "./components/C04estado";
import EjemploDeDobleEstado from "./components/C05dobleestado";
import ComponenteConVariable from "./components/C06variable";
import OperadorTernario from "./components/C07operador";
import Matriz from "./components/C08matriz";

function App() {
  return (
    <div>
      <C01componente />
      <br/>
      <C02contador />
      <br/>
      <C03componenteConCss />
      <br/>
      <EjemploDeEstado />
      <br/>
      <EjemploDeDobleEstado />
      <br/>
      <ComponenteConVariable xVariable="Hola mundo... desde... React" />
      <br/>
      <OperadorTernario xEdad = "20" />
      <br/>
      <Matriz />
    </div>
  );
}

export default App;
