import { PRODUCTS_URL } from "./apiLinks";

/////////////////////////////////////////////////
//           FETCHES ALL THE PRODUCTS
/////////////////////////////////////////////////

export async function getProducts() {
  const res = await fetch(PRODUCTS_URL);
  const data = await res.json();
  return data.data.data;
}
