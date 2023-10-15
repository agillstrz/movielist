import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { AuthProps } from ".";

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

  storeInfoCookie(data: AuthProps) {
    if (!data) return null;
    setCookie("token", data.token);
    setCookie("role", data.role);
    setCookie("name", data.name);
  },
};

export default AUTH;
