import axiosInstance from "@/config/axiosInstance";

export default async function getData(url: string) {
  const res = await axiosInstance.get(url);
  return res.data;
}
