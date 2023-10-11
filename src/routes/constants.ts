import React, { LazyExoticComponent } from "react";

export interface IRoute {
  key: string;
  path: string;
  title: string;
  Component: LazyExoticComponent<React.ComponentType>;
  exact?: boolean;
  routes?: IRoute[];
}

export const MAIN_NAVIGATION: IRoute[] = [
  {
    key: "home",
    path: "/",
    title: "",
    Component: React.lazy(() => import("@pages/Home")),
  },
  {
    key: "share",
    path: "/share",
    title: "",
    Component: React.lazy(() => import("@pages/Share")),
  },
];

export const AUTH_NAVIGATION: IRoute[] = [
  {
    key: "login",
    path: "/login",
    title: "",
    Component: React.lazy(() => import("@pages/Login")),
  },
  {
    key: "register",
    path: "/register",
    title: "",
    Component: React.lazy(() => import("@pages/Register")),
  },
];
