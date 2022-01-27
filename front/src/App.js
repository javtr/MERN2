import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LayoutAdmin from "./layouts/LayoutAdmin";
import AdminHome from "./pages/Admin";
import AdminSingn from "./pages/Admin/SignIn";

import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<LayoutAdmin />}>
          <Route path="" element={<AdminHome />} />
          <Route path="login" element={<AdminSingn />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
