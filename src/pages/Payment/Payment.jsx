import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Payment = () => {
  const navigate = useNavigate();
  const { category, dayPackage } = useSelector((state) => state.cart);
  console.log("category", category);
  console.log("dayPackage", dayPackage);

  return (
    <div>
      <p>{dayPackage}</p>
      <p>{category}</p>
      <Link replace={true} to="/succespage">
        odenis et
      </Link>
    </div>
  );
};
