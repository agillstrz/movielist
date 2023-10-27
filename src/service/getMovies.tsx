import axiosInstance from "@/config/axiosInstance";
import CONSTANT from "@/utils/CONSTANT";

export default async function getData(url: string) {
  const res = await axiosInstance.get(`${url}api_key=${CONSTANT.API_KEY}`);
  return res.data;
}
