import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./config/routes";

import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <RouterWithSubRoutes key={index} {...route} />
        ))}
      </Routes>
    </Router>
  );
}

function RouterWithSubRoutes(route) {
  console.log(route);
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.components routes={route.routes} {...props} />}
    />
  );
}

export default App;
