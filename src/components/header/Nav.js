import { Link } from "react-router-dom";
import Title from "./Title.js";
import './nav.scss'
import CartIcon from "./CartIcon.js";

const Nav = () => {
  return (
    <nav className="navbar header__nav navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Title />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to='/library' className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Biblioteca
              </a>
            </Link>
            <Link to='/accion' className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Accion
              </a>
            </Link>
            <Link to='/aventura' className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Aventura
              </a>
            </Link>
            <Link to='/rol' className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Rol
              </a>
            </Link>

          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="GTA V"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
            
          </form>
        </div>
        <Link to={'/cart'}><CartIcon/></Link>

      </div>
    </nav>
  );
};

export default Nav;
