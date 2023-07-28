import styled from "styled-components";


export const Paragraf = styled.p`
  font-weight: 600;
  font-size: ${({ size }) =>
    size === "lg"
      ? "19px"
      : size === "md"
        ? "17px"
        : size === "sm"
          ? "16px"
          : "16px"};
  line-height: ${({ size }) =>
    size === "lg"
      ? "30px"
      : size === "md"
        ? "25px"
        : size === "sm"
          ? "23px"
          : "18px"};
  color: ${({ color }) =>
    color === "primary"
      ? "#F75C03"
      : color === "secondary"
        ? "#75797F"
        : color === "green"
          ? "#172A14"
          : "black"};
  opacity: ${({ color }) => (color === "green" ? "0.7" : "1")};
  @media screen and (max-width: 900px) {
    font-size: 17px;
  }
  @media screen and (max-width: 700px) {
    font-size: 16px;
    text-align: center;
  }
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
