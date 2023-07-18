import { Outlet } from "react-router-dom";
import {
  Header,
  HideDiv,
  HeaderContact,
  Footer,
  ScrollTop,
  ScrollToTop,
  Container,
  Modal,
  CartModal,
} from "../";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

export const Layout = () => {
  const { cartOpen, isOpen } = useSelector((state) => state.modal);
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
      <AnimatePresence>
        {isOpen && <Modal />}
        {cartOpen && <CartModal />}
      </AnimatePresence>
      {/* <CartModal /> */}
      <ScrollTop />
    </>
  );
};
