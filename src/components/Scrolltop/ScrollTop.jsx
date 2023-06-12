import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const TopButton = styled.button`
  width: 70px;
  height: 70px;
  display: grid;
  border-radius: 50%;
  place-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 999;
  background-color: #ffffff;
  position: fixed;
  bottom: ${({ hide }) => (hide === "true" ? "72px" : "-72px")};
  right: 50px;
  transition: all 0.25s;
  visibility: ${({ hide }) => (hide === "true" ? "visible" : "hidden")};
  opacity: ${({ hide }) => (hide === "true" ? "1" : "0")};

  & svg {
    color: #f75c03;
  }
  &:hover {
    bottom: 80px;
  }
`;

export const ScrollTop = () => {
  // butona klikde yuxari scroll
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // asagi scrollda butonun gorsenmesi
  const [hide, setHide] = useState(false);
  const hideHeaderContact = () => {
    let windowHeight = window.scrollY;
    windowHeight > 500 ? setHide(true) : setHide(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", hideHeaderContact);
  }, []);
  return (
    <TopButton hide={hide.toString()} onClick={scrollToTop}>
      <FaArrowUp size={30} />
    </TopButton>
  );
};
