import { Trans, useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import { request } from "@/services";
import { useAuth } from "@/hooks";

import { Header } from "@/components/shared";
import { Carousel } from "./components";
import { Container, HelloUser } from "./styles";

export interface IBook {
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

export const Home = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [books, setBooks] = useState<IBook[]>({} as IBook[]);

  const hasBooks = books.length > 0;

  const fetchBooks = async () => {
    const data = await request.attemptGetBooks();
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <Container>
      <Header>
        <HelloUser>
          <Trans i18nKey="global.usernameWelcome">
            {t("global.usernameWelcome")} <strong>{{ username: user?.name }}</strong>
          </Trans>
        </HelloUser>
      </Header>

      {hasBooks ? <Carousel books={books} /> : <h1>teste</h1>}
    </Container>
  );
};
