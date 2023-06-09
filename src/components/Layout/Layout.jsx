import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderContact } from "../HeaderContact/HeaderContact";
import { Container, Header, HideDiv } from "..";

export const Layout = () => {
  return (
    <>
      <HeaderContact />
      <Header />
      <HideDiv />
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
};
