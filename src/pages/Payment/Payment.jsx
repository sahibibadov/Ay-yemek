import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Payment = () => {
   let { state } = useLocation();
   console.log(state.day);
   return (
      <div>
         <p>{state.day}</p>
         <p>{state.categoryUrl}</p>
         <Link to='/succespage'>odenis et</Link>
      </div>
   );
};