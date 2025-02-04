function Heading({ as, children, styles }) {
  const base = " uppercase ";
  if (as === "h1") return <h1 className={" " + base + styles}>{children}</h1>;
  if (as === "h2")
    return (
      <h2
        className={
          "text-3xl font-bold text-primary-300 tablet:text-4xl " + base + styles
        }
      >
        {children}
      </h2>
    );
  if (as === "h3") return <h3 className={" " + base + styles}>{children}</h3>;
  if (as === "h4")
    return (
      <h4
        className={
          "text-2xl font-bold text-primary-500 tablet:text-3xl " + base + styles
        }
      >
        {children}
      </h4>
    );
  if (as === "h5") return <h5 className={" " + base + styles}>{children}</h5>;
  if (as === "h6") return <h6 className={" " + base + styles}>{children}</h6>;
}

export default Heading;
