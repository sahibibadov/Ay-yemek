import "./succespage.scss";
import { Button, Section } from "../../components";
import check from "../../../public/check.svg";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export const SuccesPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Succses Page</title>
      </Helmet>
      <Section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="succes-page"
        >
          <div className="succes-page__logo">
            <img src={check} alt="check" />
          </div>
          <h2>ÖDƏNİŞİNİZ UĞURLA TAMAMLANMIŞDIR</h2>
          <p>Sifarişiniz qeyd etdiyiniz saatda ünvana çatdırılacaqdır</p>
          <h3>Bizi seçdiyiniz üçün təşəkkür edirik!</h3>
          <Button to="/" replace={true} color="primary">
            Yemək seçiminə başla
          </Button>
        </motion.div>
      </Section>
    </>
  );
};
