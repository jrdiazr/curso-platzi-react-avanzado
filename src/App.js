import React, { useContext, Suspense } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";
import { NavBar } from "./components/Navbar";
import { Router, Redirect } from "@reach/router";
// import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisterUser } from "./pages/NotRegisterUser";
import { Context } from "./Context";
import { NotFound } from "./pages/NotFound";

const Favs = React.lazy(() => import("./pages/Favs"));

const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <Suspense fallback={<div></div>}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisterUser path="/login" />}
        {!isAuth && <Redirect from="/favs/" to="/login" />}
        {!isAuth && <Redirect from="/user/" to="/login" />}
        {isAuth && <Redirect from="/login" to="/" />}
        <Favs path="/favs/" />
        <User path="/user/" />
      </Router>
      <NavBar />
    </Suspense>
  );
};

export default App;
