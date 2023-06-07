import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderContact } from "../HeaderContact/HeaderContact";
import { Header } from "..";

export const Layout = () => {
  return (
    <>
      <HeaderContact />
      <Header />
      <Outlet />
    </>
  );
};
