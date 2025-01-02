import { NavLink } from "react-router-dom";

function Button({
  children,
  disabled,
  variation = "primary",
  additionalStyles = " ",
  onClick,
  to,
}) {
  const base =
    "inline-block text-sm rounded-full font-semibold uppercase tracking-wide transition-colors duration-300 h-full p-2 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed hover:-translate-y-1 hover:scale-110 focus:ring active:scale-110 " +
    additionalStyles;

  const variations = {
    primary:
      base +
      " bg-primary-400 hover:bg-primary-600 active:bg-primary-600  focus:bg-primary-600 focus:ring-primary-600",
    secondary:
      base +
      " bg-primary-100/40 hover:bg-primary-100/70 focus:bg-primary-100/70 focus:ring-primary-100/70 ",
  };

  if (to)
    return (
      <NavLink to={to} className={variations[variation]}>
        {children}
      </NavLink>
    );
  return (
    <button
      className={variations[variation]}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
