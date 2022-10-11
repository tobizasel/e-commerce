import React, { useContext, useState } from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";

const Signin = () => {
  const { signin } = useContext(LoginContext);

  const [valores, setValores] = useState({
    name: "",
    mail: "",
    pass: "",
    pass2: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("antes de coso", valores);
    signin(valores, setValores);
  };

  const handleInput = (e) => {
    setValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login__container">
      <section className="form-register">
        <h4>Registrarme</h4>
        <input
          className="controls"
          type="text"
          name="mail"
          id="mail"
          placeholder="Ingrese su Correo"
          required
          onChange={handleInput}
        />
        <input
          className="controls"
          type="text"
          name="name"
          id="name"
          placeholder="Ingrese su Nombre Completo"
          required
          onChange={handleInput}
        />
        <input
          className="controls"
          type="password"
          name="pass"
          id="pass"
          placeholder="Ingrese su Contraseña"
          required
          onChange={handleInput}
        />
        <input
          className="controls"
          type="password"
          name="pass2"
          id="pass2"
          placeholder="Confirme su contraseña"
          required
          onChange={handleInput}
        />
        <input
          className="botons"
          type="submit"
          value="Registrarme"
          onClick={handleSubmit}
        />
        <p>
          <Link to="/login">Ya tengo cuenta</Link>
        </p>
      </section>
    </div>
  );
};

export default Signin;
