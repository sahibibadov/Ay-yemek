import "./information.scss";
import { useSelector } from "react-redux";
import { Headline, Input, Label } from "../../../components";

export const Information = () => {
  const { users } = useSelector((state) => state.users);
  const parseUser = JSON.parse(users);

  const userName = parseUser?.displayName.split(" ")[0];
  const userSurname = parseUser?.displayName.split(" ")[1];
  const userEmail = parseUser?.email;

  const { category, dayPackage, orderDates } = useSelector((state) => state.cart);

  return (
    <div className="profile__pages__information">
      <Headline color="primary" level={3}>
        Seçdiyiniz Kateqoriya
      </Headline>
      <div className="profile__pages__information__orderDate">
        {orderDates.length > 0 ? (
          <>
            <p>
              {category} ({dayPackage} günlük menyu)
            </p>
            <span>
              etibarlidir: {orderDates[0]?.startCurrentDay}{" "}
              {orderDates[0]?.startCurrentMonth} - {orderDates[0]?.endCurrentDay}{" "}
              {orderDates[0]?.endCurrentMonth}{" "}
            </span>
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
          <Input type="date" disabled />
        </div>
        <div>
          <Label>Ünvan</Label>
          <Input type="text" disabled placeholder="Ünvan" />
        </div>
      </div>
    </div>
  );
};
