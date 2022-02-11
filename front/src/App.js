import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LayoutAdmin from "./layouts/LayoutAdmin";
import AdminHome from "./pages/Admin";
import AdminSingn from "./pages/Admin/SignIn";

import LayoutBasic from "./layouts/LayoutBasic";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutBasic />}>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<h2>Error404</h2>} />
        </Route>

        <Route path="/admin/*" element={<LayoutAdmin />}>
          <Route path="" element={<AdminHome />} />
          {/* <Route path="login" element={<AdminSingn />} /> */}
        </Route>


      </Routes>
    </Router>
  );
}

export default App;
