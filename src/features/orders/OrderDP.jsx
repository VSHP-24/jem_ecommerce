import { useParams } from "react-router-dom";

import Heading from "../../ui/Heading";
import Loader from "../../ui/Loader";

import PageNotFound from "../../pages/PageNotFound";
import OrderProductDetailsRow from "./OrderProductDetailsRow";

import { useGetOrders } from "./useGetOrders";
import { formatCurrency, formatDate, formatStatus } from "../../utils/helpers";

function OrderDP() {
  const { orderId } = useParams();
  const { isPending, orders } = useGetOrders();

  let order;

  if (isPending) return <Loader />;

  if (!isPending) order = orders.filter((order) => order.id === orderId);

  if (!isPending && order.length < 1) return <PageNotFound />;

  const {
    id,
    name,
    email,
    orderItems,
    orderStatus,
    orderStatusUpdateOn,
    paymentMethod,
    paymentStatus,
    phoneNumber,
    shippingAddress,
    shippingCity,
    shippingState,
    shippingCountry,
    shippingPostCode,

    billingAddress,
    billingCity,
    billingState,
    billingCountry,
    billingPostCode,
    cost,
    createdAt,
  } = order[0];

  let statusColor, status;

  switch (formatStatus(orderStatus)) {
    case "Placed":
      statusColor = "bg-red-700";
      status = "Order Placed";
      break;

    case "Confirmed":
      statusColor = "bg-primary-700";
      status = "Order Confirmed";
      break;

    case "Shipped":
      statusColor = "bg-orange-700";
      status = "In Transit";
      break;

    case "Delivered":
      statusColor = "bg-green-700";
      status = "Delivered";
      break;

    case "Cancelled":
      statusColor = "bg-slate-700";
      status = "Cancelled";
      break;

    default:
      statusColor = "bg-slate-700";
  }

  return (
    <div className="laptopL:grid-row-4 grid grid-cols-1 gap-8 text-base text-primary-200 tablet:text-lg laptopS:text-xl laptopL:grid-cols-2 desktop:text-2xl">
      <div className="flex flex-col gap-4">
        <Heading as="h2">Order Details</Heading>
        <div className="grid grid-cols-2 items-center gap-2 border-2 border-primary-600/40 p-2">
          <p>Order date : </p>
          <p>{formatDate(createdAt)}</p>

          <p>Order # : </p>
          <p>{id}</p>

          <p>Order Total : </p>
          <p>{formatCurrency(cost)}</p>

          <p>Total Items : </p>
          <p>
            {orderItems.length} {`${orderItems.length > 1 ? "Items" : "Item"}`}
          </p>

          <p> Status Last Modified On : </p>
          <p>
            {formatDate(
              orderStatusUpdateOn[orderStatusUpdateOn.length - 1].updatedOn,
            )}
          </p>

          <p> Status : </p>
          <p className={`${statusColor} w-fit rounded-full px-2 py-1`}>
            {status}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 laptopL:col-start-2 laptopL:row-span-5 laptopL:row-start-1">
        <Heading as="h4">Shipment Details</Heading>
        <div className="flex flex-col gap-2 border-2 border-primary-600/40 p-2">
          <div className="flex flex-col gap-2 divide-y-2 divide-primary-700/30 pb-4">
            {orderItems.map((item, i) => (
              <OrderProductDetailsRow key={i} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Heading as="h4">Payment Details</Heading>
        <div className="flex flex-col gap-2 border-2 border-primary-600/40 p-2">
          <div className="grid grid-cols-[2fr_1fr]">
            <p>Payment Method : </p>
            <p>{formatStatus(paymentMethod)}</p>
          </div>

          <div className="grid grid-cols-[2fr_1fr]">
            <p>Payment Status : </p>
            <p>{formatStatus(paymentStatus)}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Heading as="h4">Shipping Address</Heading>
        <div className="border-2 border-primary-600/40 p-2">
          <p>{name}</p>
          <span>{shippingAddress},</span>
          <span> {shippingCity},</span>
          <span> {shippingState},</span>
          <span> {shippingCountry}</span>
          <span> {shippingPostCode}</span>
          <p>Phone : {phoneNumber}</p>
          <p>Email : {email}</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Heading as="h4">Billing Address</Heading>
        <div className="border-2 border-primary-600/40 p-2">
          <p>{name}</p>
          <span>{billingAddress},</span>
          <span> {billingCity},</span>
          <span> {billingState},</span>
          <span> {billingCountry}</span>
          <span> {billingPostCode}</span>
          <p>Phone : {phoneNumber}</p>
          <p>Email : {email}</p>
        </div>
      </div>
    </div>
  );
}

export default OrderDP;
