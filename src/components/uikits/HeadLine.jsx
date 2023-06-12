import styled from "styled-components";
export const Headline = styled.h1`
  font-weight: 600;
  text-transform: uppercase;
  font-size: ${({ level }) =>
    level === 1
      ? "40px"
      : level === 2
      ? "35px"
      : level === 3
      ? "28px"
      : "14px"};
  line-height: ${({ level }) =>
    level === 1
      ? "48px"
      : level === 2
      ? "39px"
      : level === 3
      ? "28px"
      : "20px"};
  color: ${({ color }) =>
    color === "primary"
      ? "#F75C03"
      : color === "secondary"
      ? "#0E6BA8"
      : color === "gold"
      ? "#E8C50B"
      : color === "green"
      ? "#2BAD3F"
      : "white"};
`;
