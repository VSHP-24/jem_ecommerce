import { useState } from "react";

import Heading from "../../ui/Heading";
import Pagination from "../../ui/Pagination";

import Filter from "../filter/Filter";
import FilterIcon from "../filter/FilterIcon";
import SortBy from "../sort/SortBy";
import SortIcon from "../sort/SortIcon";
import NoOrderHistory from "./NoOrderHistory";
import OrderDisplayCard from "./OrderDisplayCard";
import PageNotFound from "../../pages/PageNotFound";

import { useGetOrders } from "./useGetOrders";
import { Navigate, useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

function OrderHistory() {
  const [filterIsExpanded, setFilterIsExpanded] = useState(false);
  const [sortIsExpanded, setSortIsExpanded] = useState(false);
  const [searchParams] = useSearchParams();

  let { isPending, orders } = useGetOrders();

  // THIS FUNCTION HELPS IN EXPANDING AND CLOSING THE FILTER
  const showFilter = () => setFilterIsExpanded((cur) => !cur);
  const showSort = () => setSortIsExpanded((cur) => !cur);

  // IF SEARCHPARAMS DOESN'T HAVE PAGE , DEFAULT IS SET TO 1
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const orderStatus = [
    {
      id: "order_placed",
      name: "Placed",
    },
    {
      id: "order_confirmed",
      name: "Confirmed",
    },
    {
      id: "order_shipped",
      name: "Shipped",
    },
    {
      id: "order_delivered",
      name: "Delivered",
    },
    {
      id: "cancelled",
      name: "Cancelled",
    },
  ];

  const paymentStatus = [
    {
      id: "paid",
      name: "Paid",
    },
    {
      id: "pending",
      name: "Pending",
    },
  ];

  // THESE ARE THE VALUES TO BE PASSED INSIDE THE FILTERS
  const filtersList = [
    {
      filterOptions: orderStatus,
      filterfield: "orderStatus",
    },

    {
      filterOptions: paymentStatus,
      filterfield: "paymentStatus",
    },
  ];

  // THESE ARE THE VALUES TO BE PASSED INSIDE THE SORT BY OPTIONS
  const sortByOptions = [
    { value: "createdAt-asc", label: "Sort by Date ( Oldest First )" },
    { value: "createdAt-desc", label: "Sort by Date ( Most Recent First )" },
    { value: "cost-asc", label: "Sort by Cost ( A - Z )" },
    { value: "cost-desc", label: "Sort by Cost ( Z - A )" },
  ];

  // THESE GETS THE VALUES FROM SEARCHPARAMS , IF ANY FILTERS ARE SELECTED
  let filteredPaymentStatus =
    searchParams.get("paymentStatus")?.split(",") ||
    searchParams.get("paymentStatus") ||
    "";
  let filteredOrderStatus =
    searchParams.get("orderStatus")?.split(",") ||
    searchParams.get("orderStatus") ||
    "";

  // THESE GETS THE VALUES FROM SEARCHPARAMS , IF ANY SORTBY OPTIONS ARE SELECTED
  const sortBy = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  let sortedOrders;
  let availableOrders = [];
  let pageCount;

  if (!isPending) {
    // SORT
    sortedOrders = orders.sort((a, b) => {
      if (direction === "asc" && field === "createdAt") {
        if (a[field].toUpperCase() > b[field].toUpperCase()) return 1;
        if (b[field].toUpperCase() > a[field].toUpperCase()) return -1;
      } else if (direction === "desc" && field === "createdAt") {
        if (a[field].toUpperCase() > b[field].toUpperCase()) return -1;
        if (b[field].toUpperCase() > a[field].toUpperCase()) return 1;
      } else if (field === "cost") {
        return (a[field] - b[field]) * modifier;
      }
      return null;
    });

    // AVAILABLE ORDERS (NOT DELETED)
    availableOrders = sortedOrders.filter(
      (order) =>
        !order.isDeleted &&
        (filteredPaymentStatus === "" ||
          filteredPaymentStatus.includes(order.paymentStatus)) &&
        (filteredOrderStatus === "" ||
          filteredOrderStatus.includes(order.orderStatus)),
    );

    pageCount = Math.ceil(availableOrders.length / PAGE_SIZE) || 1;
  }

  // IF SEARCHPARAMS PAGE IS GREATER THAN EXISTING PAGE COUNTS, PAGE WILL BE REDIRECTED TO FIRST PAGE OF THE TABLE
  if (!isPending)
    if (currentPage > pageCount || currentPage < 1)
      return <Navigate replace to="/orders" />;

  if (!isPending && orders.length < 1) return <NoOrderHistory />;

  if (!isPending && availableOrders.length < 1) return <PageNotFound />;

  if (!isPending)
    return (
      <div className="flex flex-col gap-8">
        <Heading as="h2">Order History</Heading>

        <div className="flex flex-wrap justify-center gap-8">
          {availableOrders.map((order, i) => (
            <OrderDisplayCard key={order.id} index={i} order={order} />
          ))}
        </div>

        {
          <>
            <SortIcon
              styles=" absolute bottom-40 right-5 flex flex-col gap-4 "
              onHandleShowSort={showSort}
            />
            {sortIsExpanded && (
              <SortBy
                sortByOptions={sortByOptions}
                onHandleShowSort={showSort}
              />
            )}

            <FilterIcon
              styles=" absolute bottom-20 right-5 flex flex-col gap-4 "
              onHandleShowFilter={showFilter}
            />
            {filterIsExpanded && (
              <Filter
                filtersList={filtersList}
                onHandleShowFilter={showFilter}
              />
            )}
            <Pagination count={availableOrders.length} />
          </>
        }
      </div>
    );
}

export default OrderHistory;
