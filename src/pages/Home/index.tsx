import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useAuth } from "@/hooks";

import { api } from "@/services";
import { getFirstName } from "@/utils";

import { Header } from "@/components/shared";
import { MemoizedCarousel } from "./components";
import { Container, HelloUser } from "./styles";

interface IBook {
  id: string;
  title: string;
  description: string;
  authors: string[];
  category: string;
  language: string;
  pageCount: number;
  published: number;
  imageUrl: string;
  publisher: string;
  isbn10: string;
  isbn13: string;
}

type TData = {
  data: IBook[];
};

interface IBooksData {
  data: TData;
  page: number;
  totalItems: number;
  totalPages: number;
}

const DEFAULT_AMOUNT = 25;

export const Home = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [books, setBooks] = useState<IBook[]>([] as IBook[]);

  const attemptGetMoreBooks = async () => {
    const { data }: IBooksData = await api.get("/books", {
      params: {
        page: 1,
        amount: books.length + DEFAULT_AMOUNT,
      },
    });

    if (data.data) {
      setBooks(data.data);
    }
  };

  useEffect(() => {
    attemptGetMoreBooks();
  }, []);

  const hasBooks = books && books.length;

  return (
    <Container>
      <Header>
        <HelloUser>
          <Trans i18nKey="global.usernameWelcome" t={t}>
            <strong>{{ username: getFirstName(user?.name) }}</strong>
          </Trans>
        </HelloUser>
      </Header>

      {hasBooks && <MemoizedCarousel books={books} onLastPage={attemptGetMoreBooks} />}
    </Container>
  );
};
