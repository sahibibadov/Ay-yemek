import "./hmbutton.scss";
export const HmButton = ({ handleToggleMenu }) => {
  return (
    <label className="burger" htmlFor="burger">
      <input
        onClick={() => {
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
};
