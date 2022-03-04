import { useState, useCallback, useEffect } from "react";

import { IPostDetails } from "../types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const fetcher: (params: IPostDetails) => Promise<IPostDetails[]> = async (params) =>
  (await fetch(`${BASE_URL}/${params}`)).json();

interface IResponseData<T> {
  data: T | null;
  loading: boolean;
  errors: any;
  dataFetched: boolean;
}

export const useFetch = <T, P>(fetcher: Function, params: P): IResponseData<T> => {
  console.log(params);
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [dataFetched, setDataFetched] = useState<boolean>(false);
  const [errors, setErrors] = useState<boolean>(false);

  const fetchPostData = useCallback(async () => {
    try {
      const response = await await fetcher(params);

      setData(response);
      setLoading(false);
      setDataFetched(true);
    } catch (error: any) {
      setErrors(error);
    }
  }, [params, fetcher]);

  useEffect(() => {
    setLoading(true);
    fetchPostData();
  }, [fetchPostData]);

  return { data, loading, errors, dataFetched };
};

export const useFetchPosts = (endPoint: string) => {
  return useFetch<IPostDetails[], string>(fetcher, endPoint);
};

export const useFetchPostById = (endPoint: string) => {
  return useFetch<IPostDetails, string>(fetcher, endPoint);
};
