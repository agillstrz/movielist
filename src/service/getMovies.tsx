import axiosInstance from "@/config/axiosInstance";
import React from "react";

export default async function getData(url: string) {
  const res = await axiosInstance.get(url);
  return res.data;
}
