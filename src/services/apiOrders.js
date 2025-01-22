/////////////////////////////////////////////////
//           CREATE NEW ORDER
/////////////////////////////////////////////////

import { ORDERS_URL } from "./apiLinks";

export async function createNewOrder(newOrder) {
  const res = await fetch(ORDERS_URL, {
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
