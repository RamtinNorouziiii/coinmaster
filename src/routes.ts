import React from "react";
import { LandingPage } from "./pages/landing";

const Login = React.lazy(() => import("./login"));

export const routes = [
  { path: "/dashboard", name: "Dashboard", element: Login },
  { path: "/", name: "Landing", element: LandingPage },
];
