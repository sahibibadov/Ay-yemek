import { useEffect, useState } from "react";
import styled from "styled-components";
import { BsTelephone, BsWhatsapp, BsInstagram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderStyleCont = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 52px;
  background: #f75c03;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  &.hiden {
    transform: translateY(-100px);
  }
  @media screen and (max-width: 880px) {
    height: auto;
  }
`;
const HeaderStyle = styled.div`
  width: min(100% - 6.25rem, 1340px);
  height: 52px;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;

  @media screen and (max-width: 880px) {
    flex-direction: column;
    height: auto;
    gap: 10px;
    & > div {
      flex-direction: column;
      gap: 0;
    }
  }
`;
const Headercontent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  transition: all 0.3;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  & span {
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #ededed;
    white-space: nowrap;
  }

  & svg path {
    color: #ededed;
  }
`;

export const HeaderContact = () => {
  // scrollda gizlenmesi
  const [hide, setHide] = useState(false);
  const hideHeaderContact = () => {
    let windowHeight = window.scrollY;
    windowHeight > 100 ? setHide(true) : setHide(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", hideHeaderContact);
  }, []);
  return (
    <HeaderStyleCont className={`${hide ? "hiden" : ""}`}>
      <HeaderStyle>
        <Headercontent>
          <div>
            <span>Zəng üçün</span>
            <BsTelephone size={18} />
            <span>+99412 409 40 94 +99412 409 40 94</span>
          </div>
          <div>
            <HiOutlineMail size={20} />
            <span>info@ay-yemek.az</span>
          </div>
        </Headercontent>
        <Headercontent>
          <div>
            <span>Bizi izləyin:</span>
          </div>
          <div>
            <Link>
              <FaFacebookF />
            </Link>
            <Link>
              <BsWhatsapp />
            </Link>
            <Link>
              <BsInstagram />
            </Link>
          </div>
        </Headercontent>
      </HeaderStyle>
    </HeaderStyleCont>
  );
};
