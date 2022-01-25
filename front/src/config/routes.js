//layout
import LayoutAdmin from "../layouts/LayoutAdmin";

//pages
import AdminHome from "../pages/Admin";
import AdminSingn from "../pages/Admin/SignIn";

//routes

const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: AdminHome,
        exact: false,
      },
      {
        path: "/admin/login",
        component: AdminSingn,
        exact: true,
      },
    ],
  },
];

export default routes;
