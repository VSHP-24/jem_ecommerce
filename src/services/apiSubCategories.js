import { SUBCATEGORIES_URL } from "./apiLinks";

/////////////////////////////////////////////////
//           FETCHES ALL THE SUBCATEGORIES
/////////////////////////////////////////////////

export async function getSubCategories() {
  const res = await fetch(SUBCATEGORIES_URL);
  const data = await res.json();
  return data.data.data;
}
