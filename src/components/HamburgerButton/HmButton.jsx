import { forwardRef } from "react";
import "./hmbutton.scss";


export const HmButton = forwardRef(({ handleToggleMenu }, ref) => {
  return (
    <label className="burger" htmlFor="burger">
      <input
        ref={ref}
        onChange={() => {
          handleToggleMenu();
        }}
        type="checkbox"
        id="burger"
      />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
});
