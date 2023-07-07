import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/modalSlice";
import { GrClose } from "react-icons/gr";
import "./modal.scss";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import { setUsers } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

export const Modal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(closeModal());
      // Oturum kapatma başarılı oldu.
      navigate("/login", { replace: true });
      dispatch(setUsers(null));
    } catch (error) {
      // Bir hata oluştu.
      console.log("Hata:", error);
    }
  };
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
          <button onClick={handleLogout}>Bəli</button>
        </div>
      </div>
    </div>
  );
};
