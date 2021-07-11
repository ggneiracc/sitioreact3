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
    <div className="container">
          
      <header class="row bg-secondary">
        Header (Cabecera)
        <C01componente />
      </header>

      <nav class="row bg-success">
        nav (Navegador-menu)
      </nav>

      <section class="row bg-primary"> 
        <article class="col-md-6 bg-warning"> 
          Articulo 1
          <Matriz />
        </article>
        
        <article class="col-md-4 bg-secondary">
          Articulo 2
          <EjemploDeEstado />
          <br/>
          <EjemploDeDobleEstado />
          <br/>
          <OperadorTernario xEdad = "20" />
          <br/>
          <ComponenteConVariable xVariable="Hola mundo... desde... React" />
        </article>

        <aside class="col-md-2 bg-primary">
          aside (Apartado)
          <C03componenteConCss />
        </aside>
      </section>

      <footer class="row bg-dark text-light">
        footer (Pie de página)
        <C02contador />
      </footer>
    </div>
  );
}

export default App;
