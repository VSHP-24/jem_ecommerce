import { MODELS_URL } from "./apiLinks";

/////////////////////////////////////////////////
//           FETCHES ALL THE MODELS
/////////////////////////////////////////////////

export async function getModels() {
  const res = await fetch(MODELS_URL);
  const data = await res.json();
  return data.data.data;
}
