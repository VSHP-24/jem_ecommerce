import { NavLink } from "react-router-dom";

function Button({
  children,
  disabled,
  variation,
  additionalStyles = " ",
  onClick,
  to,
}) {
  const base =
    "inline-block rounded-full font-bold uppercase transition-colors duration-150 p-2 transition ease-in-out     hover:scale-110  " +
    additionalStyles;

  const variations = {
    primary:
      base + "  bg-primary-400 hover:bg-primary-600 focus:bg-primary-600 ",
    secondary:
      base +
      " bg-primary-100/40 hover:bg-primary-100/70 focus:bg-primary-100/70 ",
  };

  // IF TO EXISTS IT RETURNS A LINK BUTTON
  if (to)
    return (
      <NavLink
        to={to}
        onClick={onClick}
        className={base + `${variation ? variations[variation] : " "}`}
      >
        {children}
      </NavLink>
    );

  // IF TO DOESN'T EXIST IT RETURNS A NORMAL BUTTON
  return (
    <button
      className={base + `${variation ? variations[variation] : " "}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
