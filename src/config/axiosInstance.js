import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  },
});

export default axiosInstance;
