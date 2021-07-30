import React from 'react'

const MenuNav = () => {
    return (
        <div>
<nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" target="_blank" rel="noreferrer" href="https://ggneiracc.github.io/sitioreact3/">Inicio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" target="_blank" rel="noreferrer" href="http://ggneiracc.epizy.com/">Sitio-CMS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" target="_blank" rel="noreferrer" href="https://cursodw7cp.milaulas.com/">Sitio-LMS</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" rel="noreferrer" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Otros 
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" target="_blank" rel="noreferrer" href="http://191.98.183.157/moodle/login/index.php">Plataforma</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer" href="http://isphde.edu.pe">ISP-HDE</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer" href="https://www.google.com">Google</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer" href="https://www.youtube.com/">YouTube</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" rel="noreferrer" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}

export default MenuNav
