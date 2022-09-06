import Title from "./Title.js";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Title />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
              <i className="fa-solid fa-shop"></i>
                Tienda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
              <i className="fa-solid fa-book-blank"></i>
                Biblioteca
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-tag"></i>
                Precios:
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    MENOS DE $4000
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    MENOS DE $2000  
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    FREE TO PLAY
                  </a>
                </li>
              </ul>
            </li>
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
      </div>
    </nav>
  );
};

export default Nav;