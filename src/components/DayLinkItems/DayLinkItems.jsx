import "./daylinkitems.scss";
import manat from "../../../public/manat.svg";
import payment from "../../../public/payment.svg";

import { Button } from "../../components";

export const DayLinkItems = ({ item }) => {
  return (
    <>
      <div className="day_pages_buttons_item">
        <h3>{item.title} menyu</h3>
        <p>
          <img src={payment} alt="payment" /> <span>QİYMƏT: {item.price}</span>{" "}
          <img src={manat} alt="manat" />
        </p>
        <Button to={item.link} color="primary">
          Paketi seç
        </Button>
      </div>
    </>
  );
};
