import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { map } from "lodash";
import { toggleOpen, close, setSelected } from "../../redux/languageSlice";

const WrapperDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0;
  border: 1px solid #f75c03;
  filter: drop-shadow(0px 8px 23px rgba(83, 0, 46, 0.08));
  border-radius: 11px;
  width: 40px;
  overflow: hidden;
  position: relative;
  text-align: center;
  transition: all 0.3s;
  &.active {
    grid-template-rows: 1fr 2fr;
  }
  &.active > button {
    color: #f75c03;
  }
  &.active button {
    padding: 5px;
  }
  &:hover {
    border-color: #fc6710;
    & > button {
      color: #fc6710;
    }
  }
`;
const Dropdown = styled.div`
  display: grid;
  transition: all 0.3s;
`;
const ButtonSel = styled.button`
  display: block;
  border: 0;
  background: transparent;
  outline: 0;
  cursor: pointer;
  padding: 9px;
  transition: all 0.3s;
  &:hover {
    color: #f75c03;
  }
`;

export const LnButton = () => {
  const dispatch = useDispatch();
  const { open, selected, langButton } = useSelector((state) => state.lang);
  const ref = useRef(null);

  const openFuc = () => {
    dispatch(toggleOpen());
  };
  const selectFunc = (item) => {
    dispatch(setSelected(item));
    dispatch(close());
  };
  useEffect(() => {
    // kenara klikde menunun baglanmasi
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
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
      <WrapperDiv ref={ref} className={open ? "active" : ""}>
        <ButtonSel onClick={openFuc}>{selected}</ButtonSel>
        <Dropdown>
          {map(langButton, (item) => (
            <ButtonSel key={item.id} onClick={() => selectFunc(item.lang)}>
              {item.lang}
            </ButtonSel>
          ))}
        </Dropdown>
      </WrapperDiv>
    </>
  );
};
