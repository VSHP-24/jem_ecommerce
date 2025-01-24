import { useNavigate } from "react-router-dom";
import Heading from "../../ui/Heading";
import { formatCurrency, formatDate, formatStatus } from "../../utils/helpers";
import Button from "../../ui/Button";

function OrderDisplayCard({ index, order }) {
  const navigate = useNavigate();

  const { id, orderStatus, orderStatusUpdateOn, createdAt, cost, orderItems } =
    order;

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
      statusColor = "bg-green-700";
      status = "In Transit";
      break;

    case "Cancelled":
      statusColor = "bg-slate-700";
      status = "Cancelled";
      break;

    default:
      statusColor = "bg-slate-700";
  }

  return (
    <div
      onClick={() => navigate(`/orders/${id}`)}
      className="relative grid cursor-pointer grid-cols-[15rem] justify-items-center gap-2 break-all border-2 border-primary-400 p-4 hover:shadow-lg hover:shadow-primary-500"
    >
      <div
        className={`absolute right-5 top-3 rounded-full ${statusColor} p-2 text-sm font-bold text-primary-200`}
      >
        {status}
        {/* {formatStatus(orderStatus)} */}
      </div>

      <div className="m-2 flex flex-col justify-between gap-6 text-primary-200">
        <div className="flex flex-col gap-2">
          <Heading
            as="h5"
            styles=" text-sm font-bold uppercase text-primary-600 "
          >
            Order Id :
          </Heading>

          <Heading as="h3" styles="text-xl laptopL:text-2xl">
            {id}
          </Heading>
        </div>

        <div className="flex flex-col gap-2">
          <Heading
            as="h5"
            styles=" text-sm font-bold uppercase text-primary-600 "
          >
            Order Placed On :
          </Heading>

          <p className="text-xl laptopL:text-2xl">{formatDate(createdAt)}</p>
        </div>

        <div className="flex flex-col gap-2">
          <Heading
            as="h5"
            styles=" text-sm font-bold uppercase text-primary-600 "
          >
            Order Updated On :
          </Heading>

          <p className="text-xl laptopL:text-2xl">
            {formatDate(
              orderStatusUpdateOn[orderStatusUpdateOn.length - 1].updatedOn,
            )}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <Heading
            as="h5"
            styles=" text-sm font-bold uppercase text-primary-600 "
          >
            Total Price :
          </Heading>

          <p className="text-xl laptopL:text-2xl">{formatCurrency(cost)}</p>
        </div>

        <div className="flex flex-col gap-2">
          <Heading
            as="h5"
            styles=" text-sm font-bold uppercase text-primary-600 "
          >
            Number of Items Ordered :
          </Heading>

          <p className="text-xl laptopL:text-2xl">{orderItems.length} Nos. </p>
        </div>

        <Button variation="primary" additionalStyles="text-black ">
          View Details
        </Button>
      </div>
    </div>
  );
}

export default OrderDisplayCard;
