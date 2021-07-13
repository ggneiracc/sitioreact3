//import logo from './logo.svg';
//import './App.css';
//import C01componente from "./components/C01componente";
//import C02contador from "./components/C02contador";
//import C03componenteConCss from "./components/C03CompCss";
//import EjemploDeEstado from "./components/C04estado";
//import EjemploDeDobleEstado from "./components/C05dobleestado";
//import ComponenteConVariable from "./components/C06variable";
//import OperadorTernario from "./components/C07operador";
//import Matriz from "./components/C08matriz";


function App() {
  return (
    <div className="container">
      
      <header className="row bg-secondary">
        <img src="https://i.ibb.co/gzdmNPk/header.jpg" alt="Colibri" class="img-fluid img-thumbnail"/> 
      </header>

      <nav className="row bg-danger">

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </nav>

      <section className="row bg-primary"> 
        <article className="col-md-6 bg-warning"> 
          Articulo 1

      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
				<div class="carousel-indicators">
				  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
				  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
				  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div class="carousel-inner">
				  <div class="carousel-item active">
          
					<img src="https://i.ibb.co/44x17TV/galeria1.jpg" class="d-block w-100" alt="..." />
					<div class="carousel-caption d-none d-md-block">
					  <h5>First slide label</h5>
					  <p>Some representative placeholder content for the first slide.</p>
					</div>
				  </div>
				  <div class="carousel-item">
					<img src="https://i.ibb.co/S3gw35h/galeria2.jpg" class="d-block w-100" alt="..." />
					<div class="carousel-caption d-none d-md-block">
					  <h5>Second slide label</h5>
					  <p>Some representative placeholder content for the second slide.</p>
					</div>
				  </div>
				  <div class="carousel-item">
					<img src="https://i.ibb.co/3kM4FM9/galeria3.jpg" class="d-block w-100" alt="..." />
					<div class="carousel-caption d-none d-md-block">
					  <h5>Third slide label</h5>
					  <p>Some representative placeholder content for the third slide.</p>
					</div>
				  </div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
				  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
				  <span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
				  <span class="carousel-control-next-icon" aria-hidden="true"></span>
				  <span class="visually-hidden">Next</span>
				</button>
			</div>


        </article>
        
        <article className="col-md-4 bg-secondary">
          Articulo 2
          
        </article>

        <aside className="col-md-2 bg-primary">
          aside (Apartado)
          
        </aside>
      </section>

      <footer className="row bg-dark text-light">
        footer (Pie de página)
        
      </footer>
    </div>
  );
}

export default App;
