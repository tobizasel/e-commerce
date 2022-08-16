import Title from './Title.js';

const Nav = () => {

    return(
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Title/>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Tienda</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Biblioteca</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Descuentos
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">30% OFF</a></li>
            <li><a className="dropdown-item" href="#">50% OFF</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Juegos Gratis</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="GTA V" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
    );
}

export default Nav;