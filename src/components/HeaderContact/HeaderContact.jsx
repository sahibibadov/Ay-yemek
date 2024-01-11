import { useEffect, useState } from "react";
import styled from "styled-components";
import { BsTelephone, BsWhatsapp, BsInstagram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  transition: transform 0.3s;
  &.hiden {
    transform: translateY(-52px);
    @media screen and (max-width: 880px) {
      height: auto;
      transform: translateY(-86px);
    }
  }
  @media screen and (max-width: 880px) {
    /* height: auto; */
    display: none;
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
  const { t } = useTranslation("translation", { keyPrefix: "navlink" });

  // scrollda gizlenmesi
  const [hide, setHide] = useState(false);
  const hideHeaderContact = () => {
    let windowHeight = window.scrollY;
    windowHeight > 100 ? setHide(true) : setHide(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", hideHeaderContact);
    return () => window.removeEventListener("scroll", hideHeaderContact);
  }, []);

  return (
    <HeaderStyleCont className={`${hide ? "hiden" : ""}`}>
      <HeaderStyle>
        <Headercontent>
          <div>
            <span>{t("forcall")}</span>
            <BsTelephone size={18} />
            <span>+994773142599</span>
          </div>
          <div>
            <HiOutlineMail size={20} />
            <span>bdvshb@gmail.com</span>
          </div>
        </Headercontent>

        <Headercontent>
          <div>
            <span>{t("followus")}:</span>
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
