import { addDoc, collection, getDocs } from "firebase/firestore";
import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../firebase/config";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState();
  const usuariosRef = collection(db, "usuarios");

  const checkSignin = (valor) => {
    const datos = Object.values(valor);

    let vacio = datos.find((dato) => dato === "");
    if (vacio === undefined) {
      vacio = 0;
    } else if (vacio !== 0) {
      toast.error("Debes completar todos los campos");
      return false;
    }
    if (
      !valor.mail.includes("@") ||
      !valor.mail.includes(".") ||
      valor.mail.includes(" ")
    ) {
      toast.error("Debes incluir una direccion de correo valida");
      return false;
    }
    if (valor.pass.length < 4 || valor.pass.length > 12) {
      toast.error("La contraseña debe tener entre 4 y 12 caracteres");
      return false;
    }

    return true;
  };

  const [user, setUser] = useState({
    mail: "",
    name: "",
    lastname: "",
    pass: "",
    logged: "",
  });

  const checkLogin = (valor) => {
    getDocs(usuariosRef)
      .then((usuariosBase) => {
        const usuariosDB = usuariosBase.docs.map((usuario) => ({
          id: usuario.id,
          ...usuario.data(),
        }));
        setUsuarios(usuariosDB);

        const match = usuariosDB.find((usuario) => usuario.mail === valor.mail);
        if (!match) {
          toast.error("El Email no esta registrado");
          return;
        } else if (match.name !== valor.name) {
          toast.error("El nombre es incorrecto");
          return;
        } else if (match.pass !== valor.pass) {
          toast.error("La contraseña es incorrecta");
          return;
        }

        setUser({
          mail: valor.mail,
          name: valor.name,
          lastname: valor.lastname,
          pass: valor.pass,
          logged: true,
        });
      })
      .catch((err) => console.log(err));
  };

  const logOut = () => {
    setUser({
      mail: "",
      name: "",
      lastname: "",
      pass: "",
      logged: false,
    });
  };

  const signin = (valor, setValor) => {
    getDocs(usuariosRef)
      .then((usuarios) => {
        const usuariosDB = usuarios.docs.map((usuario) => ({
          id: usuario.id,
          ...usuario.data(),
        }));
        setUsuarios(usuariosDB);
        const match = usuariosDB.find((usuario) => usuario.mail === valor.mail);

        if (!match) {
          if (valor.pass !== valor.pass2) {
            toast.error("Las contraseñas no coinciden");
            return;
          } else if (!checkSignin(valor, setValor)) {
            return;
          }

          console.log(valor);

          addDoc(usuariosRef, valor)
            .then(() =>
              setUser({
                mail: valor.mail,
                name: valor.name,
                lastname: valor.lastname,
                pass: valor.pass,
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
      })
      .catch((err) => alert(err));
  };

  return (
    <LoginContext.Provider value={{ user, checkLogin, logOut, signin }}>
      {children}
    </LoginContext.Provider>
  );
};
