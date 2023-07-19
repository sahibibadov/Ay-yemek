import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import returnArrow from "../../../public/returnarrow.svg";

const Return = styled.button`
  display: inline-block;
  width: 35px;
  height: 35px;
  border: none;
  outline: none;
  cursor: pointer;
  background: rgba(14, 107, 168, 0.25);
  border-radius: 6px;
  display: grid;
  place-items: center;
  transition: all 0.25s;
  &:hover {
    background: rgba(14, 107, 168, 0.45);
  }
  &:active {
    background: rgba(14, 107, 168, 0.25);
  }
`;

export const ReturnButton = () => {
  const navigate = useNavigate();
  return (
    <Return onClick={() => navigate("/")}>
      <img src={returnArrow} alt="returnbtn" />
    </Return>
  );
};
