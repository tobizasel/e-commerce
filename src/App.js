import "./components/app.scss";
import { CartProvider } from "./context/CartContext";
import { LoginProvider } from "./context/LoginContext";
import AppRouter from "./router/AppRouter";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <Auth0Provider domain="tobiaszasel.us.auth0.com" clientId="">
      <LoginProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </LoginProvider>
    </Auth0Provider>
  );
}

export default App;
