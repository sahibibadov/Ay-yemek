import { Outlet } from "react-router-dom";
import {
  Header,
  HideDiv,
  HeaderContact,
  Footer,
  ScrollTop,
  ScrollToTop,
  Container,
} from "../";

export const Layout = () => {
  return (
    <>
      <ScrollToTop />
      {/* yeni sehifeye kecende en usten baslamasi */}
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
