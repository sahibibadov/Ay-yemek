import styled from "styled-components";
import { Link } from "react-router-dom";
import returnArrow from "../../../public/returnarrow.svg";

const Return = styled(Link)`
  display: inline-block;
  width: 35px;
  height: 35px;
  background: rgba(14, 107, 168, 0.25);
  border-radius: 6px;
  display: grid;
  place-items: center;
  transition: all 0.25s;
  &:hover {
    background: rgba(14, 107, 168, 0.45);
  }
`;

export const ReturnButton = ({ ...props }) => {
  return (
    <Return {...props}>
      <img src={returnArrow} alt="asdas" />
    </Return>
  );
};
