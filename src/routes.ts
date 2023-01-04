import React from "react";

const Login = React.lazy(() => import("./login"));

export const routes = [
  { path: "/dashboard", name: "Dashboard", element: Login },
];
