import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const DayProducts = () => {
   const { day, categoryUrl } = useParams();
   const navigate = useNavigate();
   return (
      <div>
         <h1>DayProducts</h1>
         <button onClick={() => navigate('/payment', { state: { day, categoryUrl } })}>ÖDƏNİŞ testiqle</button>
      </div>
   );
};
