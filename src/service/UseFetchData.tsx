"use client";
import axiosInstance from "@/config/axiosInstance";
import { useQuery } from "react-query";

export const UseFetchData = ({ key = "", url }: { key?: any; url: any }) => {
  return useQuery({
    queryFn: async () => {
      const res = await axiosInstance.get(`${url}`);
      return res.data;
    },
    queryKey: ["fetch.data", key],
  });
};
