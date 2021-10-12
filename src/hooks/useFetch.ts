import useSWR from "swr";
import { api } from "@/services";

export const useFetch = <Data, Params>(url: string, params: Params) => {
  const { data, error } = useSWR<Data>(url, async () => {
    const response = await api.get(url, { params });

    return response.data;
  });

  return { response: data, error };
};
