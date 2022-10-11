import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import './login.scss'


const Login = () => {

    const {checkLogin} = useContext(LoginContext)

    const [valores, setValores] = useState({
        name: "",
        mail: "",
        pass: "",
      });

    const handleSubmit = (e) => {
        e.preventDefault();
        checkLogin({
            ...valores
        })
    }

    const handleInput = (e) => {
        setValores({
          ...valores,
          [e.target.name]: e.target.value,
        });
      };

  return (
    <div className="login__container">
      <section className="form-register">
        <h4>Iniciar Sesion</h4>
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
          placeholder="Ingrese su Nombre"
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
        <input className="botons" type="submit" value="Iniciar Sesion" onClick={handleSubmit}/>
        <p>
          <Link to="/signin">¿No tengo cuenta?</Link>
        </p>
      </section>
      </div>
  );
};

export default Login;
