import { BRANDS_URL } from "./apiLinks";

/////////////////////////////////////////////////
//           FETCHES ALL THE BRANDS
/////////////////////////////////////////////////

export async function getBrands() {
  const res = await fetch(BRANDS_URL);
  const data = await res.json();
  return data.data.data;
}
