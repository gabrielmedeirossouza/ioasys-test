import { Trans, useTranslation } from "react-i18next";
import { useAuth, useFetch } from "@/hooks";

import { Header } from "@/components/shared";
import { Carousel } from "./components";
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

interface IBooksData {
  data: IBook[];
  page: number;
  totalItems: number;
  totalPages: number;
}

interface IFetchBooksParams {
  page: number;
  amount: number;
}

export const Home = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  const params: IFetchBooksParams = { page: 1, amount: 12 };

  const { response } = useFetch<IBooksData, IFetchBooksParams>("/books", params);
  const books = response?.data;

  return (
    <Container>
      <Header>
        <HelloUser>
          <Trans i18nKey="global.usernameWelcome">
            {t("global.usernameWelcome")} <strong>{{ username: user?.name }}</strong>
          </Trans>
        </HelloUser>
      </Header>

      {books && <Carousel books={books} />}
    </Container>
  );
};
