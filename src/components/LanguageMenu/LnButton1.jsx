import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { map } from "lodash";
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
    & > button {
      color: #fc6710;
    }
  }
  & > button {
    position: relative;
    z-index: 2;
    padding: 10px;
    font-weight: 500;
    width: 100%;
    height: 100%;
    transition: all 0.2s;
  }

  & button {
    color: #00072d;
    background-color: inherit;
    display: block;
    border: 0;
    cursor: pointer;
    font-size: 16px;
  }
  @media screen and (max-width: 600px) {
    scale: 0.8;
  }
`;
const DropMenu = styled.div`
  position: absolute;
  background: #f7f7f7;
  border-radius: 11px;
  border: 1px solid #f75c03;
  display: grid;
  width: 100%;
  padding: 12px 0px;
  gap: 10px;
  transform: translateY(10px);
  visibility: hidden;
  opacity: 0;
  transition: all 0.25s;
  pointer-events: none;
  &.show {
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
    pointer-events: all;
  }
  & button {
    &.active {
      color: #f75c03;
    }
  }
`;
export const LnButton1 = () => {
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const { open, selected, tapActive, langButton } = useSelector(
    (state) => state.lang,
  );

  const handleDropdownClicked = (event) => {
    event.stopPropagation();
    dispatch(toggleOpen());
  };
  const handleSelectFunc = (id, lang) => {
    dispatch(setTapActive(id));
    dispatch(setSelected(lang));
    dispatch(close());
  };
  useEffect(() => {
    /*   if (selected == "Az") {
      dispatch(setTapActive(1));
    } else {
      dispatch(setTapActive(2));
    } */

    // kenara klikde menunun baglanmasi
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch(close());
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <>
      <Dropdown ref={dropdownRef} className="dropdown">
        <button onClick={handleDropdownClicked}>{selected}</button>
        <DropMenu className={open ? "show" : ""}>
          {map(langButton, (item) => (
            <button
              className={+tapActive === item.id ? "active" : ""}
              key={item.id}
              onClick={() => handleSelectFunc(item.id, item.lang)}
            >
              {item.lang}
            </button>
          ))}
        </DropMenu>
      </Dropdown>
    </>
  );
};
