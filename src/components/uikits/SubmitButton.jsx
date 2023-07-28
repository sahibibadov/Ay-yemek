import styled from "styled-components";


export const SubmitButton = styled.button`
  width: 100%;
  max-width: 420px;
  justify-self: center;
  background: #f75c03;
  box-shadow: 0px 6px 16px rgba(247, 92, 3, 0.06);
  border-radius: 10px;
  white-space: nowrap;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  padding: 15px 0px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.25s;
  &:hover {
    background-color: #e95500;
  }
  &:active {
    background-color: #f75c03;
  }
`;
