import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  toggleOpen,
  close,
  setTapActive,
  setSelected,
} from "../../redux/languageSlice";

const Dropdown = styled.div`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 1px solid #f75c03;
  filter: drop-shadow(0px 8px 23px rgba(83, 0, 46, 0.08));
  border-radius: 11px;
  position: relative;
  text-align: center;
  line-height: 46px;
  cursor: pointer;
  background: transparent;

  &:hover {
    border-color: #fc6710;
  }
  & > button {
    position: relative;
    z-index: 2;
  }
  &.open {
    border-bottom: none;

    border-radius: 11px 11px 0px 0px;
  }
  &.open .menu {
    opacity: 1;

    visibility: visible;
    height: 64px;
  }
  &.open .menu:hover {
    border-color: #fc6710;
  }
  & button {
    gap: 10px;
    color: #00072d;
    background-color: inherit;
    border: 0;
    cursor: pointer;
    font-size: 16px;
  }
`;
const Menu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  border: 1px solid #f75c03;
  background: transparent;
  overflow: hidden;
  z-index: 1;
  top: 100%;
  left: -1px;
  width: 48px;
  opacity: 0;
  visibility: hidden;
  border-bottom-left-radius: 11px;
  border-bottom-right-radius: 11px;
  border-top: 0;
  transition: border-color 0.2s;

  & button {
    border: 0;
    color: #00072d;
    flex: 1;
    border-radius: 0;
    &.active {
      color: #f75c03;
    }
  }
`;
export const LnButton = () => {
  const { open, selected, tapActive, langButton } = useSelector(
    (state) => state.lang
  );

  const dispatch = useDispatch();

  const handleDropdownClicked = (event) => {
    event.stopPropagation();
    dispatch(toggleOpen());
  };
  const handlefunc = (id, lang) => {
    dispatch(setTapActive(id));
    dispatch(setSelected(lang));
    dispatch(close());
  };
  useEffect(() => {
    if (selected == "Az") {
      dispatch(setTapActive(1));
    } else {
      dispatch(setTapActive(2));
    }
  }, []);
  return (
    <>
      <Dropdown className={`dropdown ${open ? "open" : ""}`}>
        <button onClick={handleDropdownClicked}>{selected}</button>
        <Menu className="menu">
          {langButton.map((item) => (
            <button
              className={tapActive === item.id ? "active" : ""}
              key={item.id}
              onClick={() => handlefunc(item.id, item.lang)}
            >
              {item.lang}
            </button>
          ))}
        </Menu>
      </Dropdown>
    </>
  );
};
