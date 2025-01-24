/////////////////////////////////////////////////
//           CREATE NEW ORDER
/////////////////////////////////////////////////

import { CREATE_NEW_ORDERS_URL, GET_MY_ORDERS_URL } from "./apiLinks";

export async function createNewOrder(newOrder) {
  const res = await fetch(CREATE_NEW_ORDERS_URL, {
    mode: "cors",
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newOrder),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
}

/////////////////////////////////////////////////
//           FETCHES MY ORDERS
/////////////////////////////////////////////////

export async function getMyOrders() {
  const res = await fetch(GET_MY_ORDERS_URL, {
    mode: "cors",
    credentials: "include",
  });
  const data = await res.json();
  if (!res.ok) return null;
  return data.data.data;
}
