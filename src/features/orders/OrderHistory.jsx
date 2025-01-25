import Heading from "../../ui/Heading";
import NoOrderHistory from "./NoOrderHistory";
import OrderDisplayCard from "./OrderDisplayCard";
import { useGetOrders } from "./useGetOrders";

function OrderHistory() {
  let { isPending, orders } = useGetOrders();

  if (!isPending && orders.length < 1) return <NoOrderHistory />;

  if (!isPending)
    return (
      <div className="flex flex-col gap-8">
        <Heading as="h2">Order History</Heading>

        <div className="flex flex-wrap justify-center gap-8">
          {orders.map((order, i) => (
            <OrderDisplayCard key={order.id} index={i} order={order} />
          ))}
        </div>
      </div>
    );
}

export default OrderHistory;
