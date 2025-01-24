import { CUSTOMER_DETAILS_URL, CUSTOMERS_URL } from "./apiLinks";

/////////////////////////////////////////////////
//           CREATE NEW CUSTOMER
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

/////////////////////////////////////////////////
//           FETCHES CURRENT CUSTOMER DETAILS
/////////////////////////////////////////////////

export async function getCustomer() {
  const res = await fetch(CUSTOMER_DETAILS_URL, {
    mode: "cors",
    credentials: "include",
  });
  const data = await res.json();
  if (!res.ok) return null;
  return data.data.data;
}

/////////////////////////////////////////////////
//           FETCHES CURRENT CUSTOMER DETAILS
/////////////////////////////////////////////////

export async function updateCustomerContactDetails(
  updatedCustomerContactDetails,
) {
  const res = await fetch(CUSTOMER_DETAILS_URL, {
    mode: "cors",
    credentials: "include",
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedCustomerContactDetails),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data.data.user;
}
