import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";

export const ScrollContainer = styled.div`
  width: min(100% - 6.25rem, 1340px);
  margin-inline: auto;
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  @media screen and (max-width: 700px) {
    width: min(100% - 3.25rem, 1340px);
  }
`;
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
  bottom: ${({ hide }) => (hide === "true" ? "8%" : "-8%")};
  left: auto;
  box-shadow: 0px 8px 23px 0px rgba(14, 107, 168, 0.11);
  transition: all 0.25s;
  visibility: ${({ hide }) => (hide === "true" ? "visible" : "hidden")};
  opacity: ${({ hide }) => (hide === "true" ? "1" : "0")};

  & svg {
    color: #f75c03;
  }
  &:hover {
    bottom: 70px;
  }
  @media screen and (max-width: 700px) {
    scale: 0.8;
  }
  @media screen and (max-width: 500px) {
    scale: 0.7;
  }
`;

export const ScrollTop = () => {
  // butona klikde yuxari scroll
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  // asagi scrollda butonun gorsenmesi
  const [hide, setHide] = useState(false);

  const hideScrollButton = useCallback(() => {
    let windowHeight = window.scrollY;
    windowHeight > 500 ? setHide(true) : setHide(false);
  }, [hide, setHide]);

  useEffect(() => {
    window.addEventListener("scroll", hideScrollButton);
    return () => {
      window.removeEventListener("scroll", hideScrollButton);
    };
  }, []);

  return (
    <ScrollContainer>
      <TopButton hide={hide.toString()} onClick={scrollToTop}>
        <FaArrowUp size={30} />
      </TopButton>
    </ScrollContainer>
  );
};
