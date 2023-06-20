import styled from "styled-components";
import Authimg from "../../../public/authimage.png";

const ImgWrapper = styled.div`
  background: linear-gradient(
    0deg,
    rgba(247, 92, 3, 0.28),
    rgba(247, 92, 3, 0.28)
  );
  position: relative;
  overflow: hidden;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
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
`;

export const AuthImage = () => {
  return (
    <ImgWrapper>
      <Img src={Authimg} alt="authimg" />
      <Title>
        <h1>
          SİZ SEÇİN BİZ <br /> İSTƏDİYİNİZ ZAMANDA YEMƏKLƏRİNİZİ ÇATDIRAQ
        </h1>
        <p>Sizin həyat tərzinizə və büdcənizə uyğun yemək planları</p>
      </Title>
    </ImgWrapper>
  );
};
