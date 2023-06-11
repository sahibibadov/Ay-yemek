import { Outlet } from "react-router-dom";
import { Container, Header, HideDiv, HeaderContact } from "../";

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
