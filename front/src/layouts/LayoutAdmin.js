import React from "react";
import {Layout} from "antd";
import { Outlet } from "react-router-dom";

import "./LayoutAdmin.scss"

export default function LayoutAdmin(){

    return(
        <Layout>
            <h2>Menu Slider</h2>

            <Outlet/>

            <div>Contenido...</div>
            <h5>Fotter...</h5>
        </Layout>
    );
}


