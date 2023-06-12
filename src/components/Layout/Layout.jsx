import { Outlet } from "react-router-dom";
import { Container, Header, HideDiv, HeaderContact, Footer } from "../";

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
      <Container>
        <Footer />
      </Container>
    </>
  );
};
