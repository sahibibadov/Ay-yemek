import styled from "styled-components";
import { Link } from "react-router-dom";
export const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  white-space: nowrap;
  transition: all 0.3s;
  border: ${({ color }) => {
    if (color === "primary") {
      return "1px solid #F75C03";
    }
    if (color === "green") {
      return "1px solid #2BAD3F";
    }
    if (color === "gold") {
      return "1px solid #E8C50B";
    }
    if (color === "secondary") {
      return "1px solid #0E6BA8";
    }
  }};
  color: ${({ color }) => {
    if (color === "primary") {
      return " #F75C03";
    }
    if (color === "green") {
      return " #2BAD3F";
    }
    if (color === "gold") {
      return " #E8C50B";
    }
    if (color === "secondary") {
      return " #0E6BA8";
    }
  }};
  border-radius: ${({ color }) => {
    if (color === "secondary") {
      return " 12px";
    }
    return "16px";
  }};
  font-size: ${({ color }) => {
    if (color === "secondary") {
      return " 18px";
    }
    return "14px";
  }};
  font-weight: ${({ color }) => {
    if (color === "secondary") {
      return " 600";
    }
    return "500";
  }};
  padding: ${({ color }) => {
    if (color === "secondary") {
      return " 14px 40px ";
    }
    return "13px 40px";
  }};
  &:active {
    background-color: rgba(0, 0, 0, 0.05);
  }
  &:hover {
    border: ${({ color }) => {
      if (color === "primary") {
        return "1px solid #e75500";
      }
      if (color === "green") {
        return "1px solid #259b36";
      }
      if (color === "gold") {
        return "1px solid #d1ae00";
      }
      if (color === "secondary") {
        return "1px solid #065e99";
      }
    }};
    color: ${({ color }) => {
      if (color === "primary") {
        return " #e75500";
      }
      if (color === "green") {
        return " #259b36";
      }
      if (color === "gold") {
        return " #d1ae00";
      }
      if (color === "secondary") {
        return " #065e99";
      }
    }};
    box-shadow: ${({ color }) => {
      if (color === "primary") {
        return "0px 0px 100px -15px #e75500;";
      }
      if (color === "green") {
        return "0px 0px 100px -15px #259b36;";
      }
      if (color === "gold") {
        return "0px 0px 100px -15px #d1ae00;";
      }
      if (color === "secondary") {
        return "0px 0px 100px -15px #065e99;";
      }
    }};
  }
`;
