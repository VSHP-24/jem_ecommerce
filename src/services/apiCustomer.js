import { CUSTOMERS_URL } from "./apiLinks";

/////////////////////////////////////////////////
//           FETCHES ALL THE CUSTOMERS
/////////////////////////////////////////////////

export async function getCustomer(id) {
  if (!id) return null;
  const res = await fetch(`${CUSTOMERS_URL}/${id}`, {
    mode: "cors",
    credentials: "include",
  });
  const data = await res.json();
  if (!res.ok) return null;
  return data.data.data;
}

/////////////////////////////////////////////////
//           FETCHES ALL THE CUSTOMERS
/////////////////////////////////////////////////

export async function createCustomer(newCustomer) {
  const res = await fetch(CUSTOMERS_URL, {
    mode: "cors",
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCustomer),
  });
  const data = await res.json();
  if (!res.ok) return null;
  return data.data.data;
}
