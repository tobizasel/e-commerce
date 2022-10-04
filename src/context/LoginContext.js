import { addDoc, collection, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../firebase/config";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState();
  const usuariosRef = collection(db, "usuarios");

  const checkEmpty = (valor) => {
    const datos = Object.values(valor);

    const vacio = datos.find((dato) => dato === "");
    console.log("vacio", vacio);
  };

  const [user, setUser] = useState({
    mail: "",
    name: "",
    pass: "",
    logged: false,
  });

  useEffect(() => {
    getDocs(usuariosRef)
    .then((usuarios) => {
      console.log("LLamado a la base de datos");
      const usuariosDB = usuarios.docs.map((usuario) => ({
        id: usuario.id,
        ...usuario.data(),
      }));
      setUsuarios(usuariosDB);
    })
    .catch((err) => console.log(err));
  }, [])


  const checkLogin = (valor) => {
    const match = usuarios.find((usuario) => usuario.name === valor.name);
    console.log(match);

    if (!match) {
      toast.error("El nombre no existe");
      console.log(valor);
      return;
    } else if (match.mail !== valor.mail) {
      toast.error("El email es incorrecto");
      console.log(valor);
      return;
    } else if (match.pass !== valor.pass) {
      toast.error("La contraseña es incorrecta");
      console.log(valor);
      return;
    }
    console.log("Los datos coinciden");
    setUser({
      mail: valor.mail,
      name: valor.name,
      pass: valor.pass,
      logged: true,
    });
  };

  const logOut = () => {
    setUser({
      mail: "",
      name: "",
      pass: "",
      logged: false,
    });
  };

  const signin = (valor, setValor) => {
    console.log(usuarios);
    console.log("despues de coso", valor);
    const match = usuarios.find((usuario) => usuario.mail === valor.mail);

    if (!match) {
      if (valor.pass !== valor.pass2) {
        toast.error("Las contraseñas no coinciden");
        return;
      } else {
        setValor({
          ...valor,
          pass2: null,
        });
      }

      checkEmpty(valor);

      addDoc(usuariosRef, valor)
        .then(() =>
          setUser({
            ...user,
            logged: true,
          })
        )
        .finally(() => {
          toast.success("Usuario registrado!");
          <Navigate to="/" />;
        });
    } else {
      toast.error("El email ya esta registrado");
      return;
    }
  };

  return (
    <LoginContext.Provider value={{ user, checkLogin, logOut, signin }}>
      {children}
    </LoginContext.Provider>
  );
};
