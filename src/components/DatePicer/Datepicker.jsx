import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { Label } from "../uikits";

import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import az from "dayjs/locale/az";

export const Datepicker = () => {
  const { dayPackage } = useSelector((state) => state.cart);
  console.log(dayPackage);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // sehife ilk yaranda daypackageden gelen gune gore baslangic ve son tarixin secilmesi
  useEffect(() => {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + +dayPackage - 1);
    setStartDate(today);
    setEndDate(futureDate);
  }, [dayPackage]);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  // local datei dayjsden geirmek
  dayjs.extend(localeData);
  dayjs.locale("az");
  const startCurrentDate = dayjs(startDate);
  const startCurrentDay = startCurrentDate.format("D");
  const startCurrentMonth = startCurrentDate.format("MMMM");
  console.log(startCurrentMonth, "startCurrentMonth");
  const endCurrentDate = dayjs(endDate);
  const endCurrentDay = endCurrentDate.format("D");
  const endCurrentMonth = endCurrentDate.format("MMMM");
  console.log(endCurrentMonth, "endCurrentMonth");
  return (
    <div className="payment__content__datepicker">
      <Label>Menyu tarixləri</Label>

      <p className="payment__content__datepicker__date">
        {startDate?.toLocaleDateString("az-AZ").split("-").reverse().join("/")}
      </p>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
      <span>
        Seçilmiş günlər: :{" "}
        {startDate ? `${startCurrentDay}  ${startCurrentMonth}` : ""} {" - "}
        {endDate ? `${endCurrentDay}  ${endCurrentMonth}` : ""}
      </span>
    </div>
  );
};
