import Aside from "./sitioweb/Aside";
import CardTarjeta from "./sitioweb/CardTarjeta";
import Carrusel from "./sitioweb/Carrusel";
import Header from "./sitioweb/Header";
import MapaUbic from "./sitioweb/MapaUbic";
import MenuNav from "./sitioweb/MenuNav";
import PiePag from "./sitioweb/PiePag";
import VideoPeli from "./sitioweb/VideoPeli";

function App() {
  return (
    <div className="container">
      
      <header className="row bg-secondary">
        <Header />
      </header>
      
      <nav className="row bg-danger">
        <MenuNav />
      </nav>

      <section className="row bg-primary"> 
        <article className="col-md-6 bg-warning"> 
          <Carrusel />
        </article>
        
        <article className="col-md-3 d-flex justify-content-center bg-secondary">
          <CardTarjeta />
        </article>

        <aside className="col-md-3 bg-primary">
          <Aside />
        </aside>
      </section>

      <section className="row bg-dark text-light">
        
        <article className="col-md-5 justify-content-center bg-success">
          <MapaUbic />
        </article>

        <article className="col-md-7 d-flex justify-content-center bg-secondary">
          <VideoPeli />
        </article>
      </section>

      <footer className="row bg-dark d-flex justify-content-center align-items-center text-light" style={{height:'120px'}}>
        <PiePag />
      </footer>
    </div>
  );
}

export default App;
