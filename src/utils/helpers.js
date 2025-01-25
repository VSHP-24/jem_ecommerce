export const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(
    value,
  );

export const calculateOfferPercentage = (price, discountPrice) =>
  Math.ceil(((price - discountPrice) / price) * 100);

export const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));

export function formatStatus(status) {
  let splitStatus;
  if (
    status === "cancelled" ||
    status === "paid" ||
    status === "pending" ||
    status === "cod" ||
    status === "upi" ||
    status === "cards" ||
    status === "netbanking"
  )
    return status.charAt(0).toUpperCase() + status.slice(1);

  splitStatus = status.split("_")[1].trim();
  return splitStatus.charAt(0).toUpperCase() + splitStatus.slice(1);
}
