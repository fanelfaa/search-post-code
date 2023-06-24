/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { RouteObject } from "react-router-dom";

const LoginPage = React.lazy(()=>import('../pages/login/Login'));
const HomePage = React.lazy(()=>import('../pages/home/Home'));


export const publicRoutes : RouteObject[] = [
   {
      path: '/login',
      element: <LoginPage />,
   },
]

export const privateRoutes : RouteObject[] = [
   {
      path: '/',
      element: <HomePage />
   }
]