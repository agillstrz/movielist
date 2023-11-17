"use client";
import { useEffect, useState } from "react";
import axiosInstance from "@/config/axiosInstance";
import CONSTANT from "@/utils/CONSTANT";
import { useRouter, useSearchParams } from "next/navigation";

export const GetDatas = ({ key = "", url }: { key?: any; url: any }) => {
  const currentPage = useSearchParams().get("page") || 1;
  const [data, setDatas] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);

  useEffect(() => {
    function getData() {
      setLoading(true);
      setDatas([]);
      axiosInstance
        .get(`${url}?api_key=${CONSTANT.API_KEY}&page=${currentPage}`)
        .then((res) => {
          setDatas(res.data.results);
          setTotalPage(res.data.total_pages);
          setLoading(false);
        })
        .finally(() => setLoading(false));
    }

    getData();
  }, [url, key, currentPage]);

  return {
    loading,
    data,
    page,
    setPage,
    setLoading,
    setDatas,
    totalPage,
    currentPage,
  };
};
