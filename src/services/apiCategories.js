import { CATEGORIES_URL } from "./apiLinks";

/////////////////////////////////////////////////
//           FETCHES ALL THE CATEGORIES
/////////////////////////////////////////////////

export async function getCategories() {
  const res = await fetch(CATEGORIES_URL);
  const data = await res.json();
  return data.data.data;
}
