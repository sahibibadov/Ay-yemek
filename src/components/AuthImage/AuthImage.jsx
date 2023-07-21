import styled from "styled-components";
import Authimg from "../../../public/authimage.png";

const ImgWrapper = styled.div`
  background: linear-gradient(0deg, rgba(247, 92, 3, 0.28), rgba(247, 92, 3, 0.28)),
    url("../../../public/authimage.png") no-repeat center center / cover;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 600px) {
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(0deg, rgba(247, 92, 3, 0.15), rgba(247, 92, 3, 0.15)),
      url("../../../public/authimage.png") no-repeat center center / cover;
  }
`;

const Title = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding-left: 30px;
  & h1 {
    font-weight: 600;
    font-size: 33px;
    line-height: 40px;
    letter-spacing: 0.08em;
    color: #ffffff;
  }
  & p {
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;

    letter-spacing: 0.05em;
    color: #ffffff;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const AuthImage = () => {
  return (
    <ImgWrapper>
      <Title>
        <h1>
          SİZ SEÇİN BİZ <br /> İSTƏDİYİNİZ ZAMANDA YEMƏKLƏRİNİZİ ÇATDIRAQ
        </h1>
        <p>Sizin həyat tərzinizə və büdcənizə uyğun yemək planları</p>
      </Title>
    </ImgWrapper>
  );
};
