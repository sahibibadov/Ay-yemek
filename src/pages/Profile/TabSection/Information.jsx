import "./information.scss";
import { useSelector } from "react-redux";
import { Headline, Input, Label } from "../../../components";
import { motion } from "framer-motion";

export const Information = () => {
  const { users } = useSelector((state) => state.users);
  const parseUser = JSON.parse(users);

  const userName = parseUser?.displayName.split(" ")[0];
  const userSurname = parseUser?.displayName.split(" ")[1];
  const userEmail = parseUser?.email;

  const { paymentCart } = useSelector((state) => state.cart);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="profile__pages__information"
    >
      <Headline color="primary" level={3}>
        Seçdiyiniz Kateqoriya
      </Headline>
      <div className="profile__pages__information__orderDate">
        {paymentCart.length > 0 ? (
          <>
            {paymentCart.map((item, index) => (
              <div
                key={index}
                className="profile__pages__information__orderDate__item"
              >
                <p>
                  {item.category} ({item.dayPackage} günlük menyu)
                </p>
                <span>
                  etibarlidir: {item.startCurrentDate} - {item.endCurrentDate}
                </span>
              </div>
            ))}
            {/* <div className="profile__pages__information__orderDate__item">
              <p>
                {category} ({dayPackage} günlük menyu)
              </p>
              <span>
                etibarlidir: {orderDates[0]?.startCurrentDay}{" "}
                {orderDates[0]?.startCurrentMonth} - {orderDates[0]?.endCurrentDay}{" "}
                {orderDates[0]?.endCurrentMonth}{" "}
              </span>
            </div>

            <Link
              to={`/category/${category}/${dayPackage}`}
              className="profile__pages__information__orderDate__link"
            >
              paketi yenile
            </Link> */}
          </>
        ) : (
          <p>Seçdiyiniz kateqoriya yoxdur</p>
        )}
      </div>
      <div className="profile__pages__information__content">
        <div>
          <Label>Ad</Label>
          <Input type="text" disabled placeholder={userName} />
        </div>
        <div>
          <Label>Soyad</Label>
          <Input type="text" disabled placeholder={userSurname} />
        </div>
        <div>
          <Label>Parol</Label>
          <Input type="password" disabled placeholder="******" />
        </div>
        <div>
          <Label>E-poçt</Label>
          <Input type="email" disabled placeholder={userEmail} />
        </div>
        <div>
          <Label>Doğum tarixi</Label>
          <Input type="text" placeholder="Doğum tarixi" disabled />
        </div>
        <div>
          <Label>Ünvan</Label>
          <Input type="text" disabled placeholder="Ünvan" />
        </div>
      </div>
    </motion.div>
  );
};
