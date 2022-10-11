import { Link } from "react-router-dom";
import Title from "./Title.js";
import './nav.scss'
import CartIcon from "./CartIcon.js";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext.js";

const Nav = () => {

  const {user, logOut} = useContext(LoginContext)

  return (
    <nav className="navbar header__nav navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Title />
        <div className="collapse navbar-collapse d-flex align-items-center" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to='/accion' className="nav-item">
              <div className="nav-link active" aria-current="page" href="#">
                Accion
              </div>
            </Link>
            <Link to='/aventura' className="nav-item">
              <div className="nav-link active" aria-current="page" href="#">
                Aventura
              </div>
            </Link>
            <Link to='/rol' className="nav-item">
              <div className="nav-link active" aria-current="page" href="#">
                Rol
              </div>
            </Link>

          </ul>
          <h6 className="mx-2 nav__bienvenida--titulo">Bienvenido {user.name}</h6>
          <div className="nav__bienvenida">
            
            <button className="btn btn-outline-danger" onClick={logOut}>
              Log Out
            </button>
            
          </div>
        </div>
        <Link to={'/cart'}><CartIcon/></Link>

      </div>
    </nav>
  );
};

export default Nav;
