import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  min-width: 200px;
  background: #ffffff;
  border: ${({ errors }) => (errors ? "1px solid#e10000;" : "1px solid#d3d3d3")};
  border-radius: 6px;
  position: relative;
  padding: 12px 16px;
  font-family: "Inter", sans-serif;
  margin-bottom: 8px;
  color: #797979;
  transition: all 0.2s;

  &:focus,
  &:hover,
  &:active {
    outline: none;
    background: rgba(247, 92, 3, 0.1);
    border: 1px solid #f75c03;
    box-shadow: 0px 6px 16px rgba(247, 92, 3, 0.06);
    border-radius: 6px;
    caret-color: #fa3e3e;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #444150;
  }
`;
