import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/modalSlice";
import { GrClose } from "react-icons/gr";
import "./modal.scss";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import { setUsers } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

export const Modal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);
  const handleLogout = async () => {
    try {
      dispatch(setUsers(null));
      await signOut(auth);
      toast.success("success logout", {
        position: "top-right",
        duration: 3000,
      });
      dispatch(closeModal());
      navigate("/login", { replace: true });
    } catch (error) {
      console.log("Hata:", error);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`backdrop `}
      onClick={() => dispatch(closeModal())}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="modal"
      >
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
      </motion.div>
    </motion.div>
  );
};
