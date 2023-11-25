"use client";
import { useEffect, useState } from "react";
import axiosInstance from "@/config/axiosInstance";
import CONSTANT from "@/utils/CONSTANT";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "react-query";

export const GetDatas = ({ key = "", url }: { key?: any; url: any }) => {
  return useQuery({
    queryFn: async () => {
      const res = await axiosInstance.get(`${url}`);
      return res.data.results;
    },
    queryKey: ["fetch.data", key],
  });
};
