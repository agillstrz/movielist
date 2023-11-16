"use client";
import { useEffect, useState } from "react";
import axiosInstance from "@/config/axiosInstance";
import CONSTANT from "@/utils/CONSTANT";

export const GetDatas = ({ key = "", url }: { key?: any; url: any }) => {
  const [data, setDatas] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    function getData() {
      setLoading(true);
      setDatas([]);
      axiosInstance
        .get(`${url}?api_key=${CONSTANT.API_KEY}&page=${1}`)
        .then((res) => {
          setDatas(res.data.results);
          setLoading(false);
        })
        .finally(() => setLoading(false));
    }

    getData();
  }, [url, key]);

  return { loading, data, setDatas };
};
