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
        <Route path="/admin" element={<LayoutAdmin />} />
        <Route path="/register" element={<AdminHome />} />
        <Route exact path="/admin/login" element={<AdminSingn />} />
      </Routes>
    </Router>
  );
}

export default App;
