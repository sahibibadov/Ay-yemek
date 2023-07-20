import React from "react";
import { useSelector } from "react-redux";

export const Information = () => {
  const { category, dayPackage, orderDates } = useSelector((state) => state.cart);

  return (
    <div>
      <h3>Seçdiyiniz Kateqoriya</h3>
      {orderDates.length > 0 ? (
        <>
          <p>
            {category} {dayPackage} günlük menyu
          </p>
          <span>
            etibarlidir:{orderDates[0]?.startCurrentDay}{" "}
            {orderDates[0]?.startCurrentMonth} - {orderDates[0]?.endCurrentDay}{" "}
            {orderDates[0]?.endCurrentMonth}{" "}
          </span>
        </>
      ) : (
        <p>Seçdiyiniz kateqoriya yoxdur</p>
      )}
    </div>
  );
};
