import logo from '../assets/game_store_logo.png'

const Title = () => {
  return (
    <div>
      <img src={logo} alt="Game Store Logo" width="190" height="134"/>
      <a className="navbar-brand" href="#">
        Game Shop
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  );
};

export default Title;
