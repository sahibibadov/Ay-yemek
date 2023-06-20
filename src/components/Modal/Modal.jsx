import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/modalSlice";
import { GrClose } from "react-icons/gr";
import "./modal.scss";

export const Modal = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);
  return (
    <div
      className={`backdrop ${isOpen && "open"}`}
      onClick={() => dispatch(closeModal())}
    >
      <div onClick={(e) => e.stopPropagation()} className="modal">
        <h1>
          Profildən<span> çıxış etmək</span> <br /> İstədiyinizə əminsiniz?
        </h1>
        <span onClick={() => dispatch(closeModal())} className="close-modal">
          <GrClose size={24} />
        </span>
        <div className="modal_btn">
          <button onClick={() => dispatch(closeModal())}>Xeyir</button>
          <button>Bəli</button>
        </div>
      </div>
    </div>
  );
};
