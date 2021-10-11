import { IBooks } from "@/@types/books";
import { api } from "@/services";

export const attemptGetBooks = async () => {
  const response = await api.get("/books", {
    params: {
      page: 1,
      amount: 12,
    },
  });

  const { data }: IBooks = response.data;

  return data;
};
