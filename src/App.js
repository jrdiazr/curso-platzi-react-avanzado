import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";
import { NavBar } from "./components/Navbar";
import { Router } from "@reach/router";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisterUser } from "./pages/NotRegisterUser";
import Context from "./Context";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/" />
        <Detail path="/detail/:detailId" />
      </Router>
      <Context.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path="/favs/" />
              <User path="/user/" />
            </Router>
          ) : (
            <Router>
              <NotRegisterUser path="/favs/" />
              <NotRegisterUser path="/user/" />
            </Router>
          )
        }
      </Context.Consumer>
      <NavBar />
    </>
  );
};

export default App;
