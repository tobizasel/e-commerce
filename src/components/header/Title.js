import "./title.scss";

const Title = () => {
  return (
    <div>
      <img
        src="../assets/logo.png"
        alt="Game Store Logo"
        width="70"
        height="55"
        className="logo"
      />

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