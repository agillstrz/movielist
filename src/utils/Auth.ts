import { deleteCookie, getCookie, setCookie } from "cookies-next";

const AUTH = {
  isAuthorization() {
    if (getCookie("token")) return true;
    return null;
  },

  signOut() {
    deleteCookie("token");
    deleteCookie("role");
    deleteCookie("name");
  },

  storeInfoCookies() {
    setCookie("token", 1);
    setCookie("role", 2);
    setCookie("name", 3);
  },
};

export default AUTH;
