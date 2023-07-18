import "./succespage.scss";
import { Button, Section } from "../../components";
import check from "../../../public/check.svg";
import { useNavigate } from "react-router-dom";
export const SuccesPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Section>
        <div className="succes-page">
          <div className="succes-page__logo">
            <img src={check} alt="check" />
          </div>
          <h2>ÖDƏNİŞİNİZ UĞURLA TAMAMLANMIŞDIR</h2>
          <p>Sifarişiniz qeyd etdiyiniz saatda ünvana çatdırılacaqdır</p>
          <h3>Bizi seçdiyiniz üçün təşəkkür edirik!</h3>
          <Button to="/" replace={true} color="primary">
            Yemək seçiminə başla
          </Button>
        </div>
      </Section>
    </>
  );
};
