import { Outlet } from "react-router-dom";
import {
  Container,
  Header,
  HideDiv,
  HeaderContact,
  Footer,
  ScrollTop,
} from "../";

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
      <Footer />
      <ScrollTop />
    </>
  );
};
