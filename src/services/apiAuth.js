import {
  CREATE_NEW_USER_URL,
  FORGOT_PASSWORD_URL,
  GET_USER_URL,
  LOGIN_URL,
  LOGOUT_URL,
  RESET_PASSWORD_URL,
} from "./apiLinks";

/////////////////////////////////////////////////
//           USER LOGIN
/////////////////////////////////////////////////

export async function login(loginData) {
  const res = await fetch(LOGIN_URL, {
    mode: "cors",
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });
  const data = await res.json();
  return data.data.user;
}

/////////////////////////////////////////////////
//           GET CURRENT USER DATA
/////////////////////////////////////////////////

export async function getCurrentUser() {
  const res = await fetch(GET_USER_URL, {
    mode: "cors",
    credentials: "include",
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data.data.data;
}

/////////////////////////////////////////////////
//           USER LOGOUT
/////////////////////////////////////////////////

export async function logout() {
  const res = await fetch(LOGOUT_URL, {
    mode: "cors",
    credentials: "include",
  });
  const data = await res.json();
  return data;
}

/////////////////////////////////////////////////
//           CREATE NEW USER
/////////////////////////////////////////////////

export async function createNewUser(newUser) {
  const res = await fetch(CREATE_NEW_USER_URL, {
    mode: "cors",
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data.data.user;
}

/////////////////////////////////////////////////
//           USER FORGOT PASSWORD
/////////////////////////////////////////////////

export async function forgotPassword(email) {
  const res = await fetch(FORGOT_PASSWORD_URL, {
    mode: "cors",
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
}

/////////////////////////////////////////////////
//           USER RESET PASSWORD
/////////////////////////////////////////////////

export async function resetPassword(newPassword) {
  const currentURL = window.location.href.split("/");
  const resetToken = currentURL[currentURL.length - 1];

  const res = await fetch(`${RESET_PASSWORD_URL}/${resetToken}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPassword),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data.data.user;
}
