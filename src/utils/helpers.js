export const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(
    value,
  );

export const calculateOfferPercentage = (price, discountPrice) =>
  Math.ceil(((price - discountPrice) / price) * 100);
