function Heading({ as, children, styles }) {
  if (as === "h1") return <h1 className={" " + styles}>{children}</h1>;
  if (as === "h2") return <h2 className={" " + styles}>{children}</h2>;
  if (as === "h3") return <h3 className={" " + styles}>{children}</h3>;
  if (as === "h4") return <h4 className={" " + styles}>{children}</h4>;
  if (as === "h5") return <h5 className={" " + styles}>{children}</h5>;
  if (as === "h6") return <h6 className={" " + styles}>{children}</h6>;
}

export default Heading;
