

function App() {
  return (
    <div className="container">
      
      <header className="row bg-secondary">
        <img src="https://i.ibb.co/gzdmNPk/header.jpg" alt="Colibri" className="img-fluid img-thumbnail" /> 
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

      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
				<div class="carousel-indicators">
				  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
				  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
				  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
				  <div className="carousel-item active">
          
					<img src="https://i.ibb.co/44x17TV/galeria1.jpg" className="d-block w-100" alt="..." />
					<div className="carousel-caption d-none d-md-block">
					  <h5>First slide label</h5>
					  <p>Some representative placeholder content for the first slide.</p>
					</div>
				  </div>
				  <div className="carousel-item">
					<img src="https://i.ibb.co/S3gw35h/galeria2.jpg" className="d-block w-100" alt="..." />
					<div className="carousel-caption d-none d-md-block">
					  <h5>Second slide label</h5>
					  <p>Some representative placeholder content for the second slide.</p>
					</div>
				  </div>
				  <div className="carousel-item">
					<img src="https://i.ibb.co/3kM4FM9/galeria3.jpg" className="d-block w-100" alt="..." />
					<div className="carousel-caption d-none d-md-block">
					  <h5>Third slide label</h5>
					  <p>Some representative placeholder content for the third slide.</p>
					</div>
				  </div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
				  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
				  <span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
				  <span className="carousel-control-next-icon" aria-hidden="true"></span>
				  <span className="visually-hidden">Next</span>
				</button>
			</div>

        </article>
        
        <article className="col-md-3 d-flex justify-content-center bg-secondary">

          <div className="card" >
            <img src="https://i.ibb.co/3R8T95S/colibri.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>

        </article>

        <aside className="col-md-3 bg-primary">
<div>
<hr/>
<button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button>
<hr/>
<button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Open modal for @fat</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message111</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Recipient:2222</label>
            <input type="text" class="form-control" id="recipient-name" />
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:333</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close444</button>
        <button type="button" class="btn btn-primary">Send message5555</button>
      </div>
    </div>
  </div>
</div>

<hr/>

<button className="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>

<hr/>
Es este apartado se esta considerando algunos tipos de botones y sus funcionalidades...

</div>
          
        </aside>
      </section>

      <section className="row bg-dark text-light">
        
        <article className="col-md-5 justify-content-center bg-success">
          <div className="d-flex align-items-stretch pt-2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.7331251796195!2d-71.55089728735355!3d-16.38755174218354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a6a0172d35d%3A0xebeb3b98aa2420d9!2sInstituto%20Superior%20Honorio%20Delgado%20Espinoza!5e0!3m2!1ses-419!2spe!4v1626164448236!5m2!1ses-419!2spe" width="100%" height="320" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
          </div>
          <h5>Los Arcess 202. Distrito de Cayma - Arequipa.</h5> <h6>Número de contacto: 054232323</h6>
        </article>

        <article className="col-md-7 d-flex justify-content-center bg-secondary">
          <iframe width="744" height="409" src="https://www.youtube.com/embed/1yPCWE955x8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </article>
      </section>

      <footer className="row bg-dark d-flex justify-content-center align-items-center text-light" style={{height:'120px'}}>
        <span>Información del sitio web</span>
      </footer>
    </div>
  );
}

export default App;
