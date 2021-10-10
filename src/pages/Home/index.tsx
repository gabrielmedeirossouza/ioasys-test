import { Trans, useTranslation } from "react-i18next";
import { useEffect } from "react";

import { api } from "@/services";
import { useAuth } from "@/hooks";

import { Header } from "@/components/shared";
import { Container, Welcome, Book } from "./styles";

import book from "@/assets/bkg/ebook.jpg";

export const Home = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  const fetchBooks = async () => {
    const resp = await api.get("/books", {
      params: {
        page: 1,
        amount: 12,
      },
    });

    console.log(resp);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <Container>
      <Header>
        <Welcome>
          <Trans i18nKey="global.usernameWelcome">
            {t("global.usernameWelcome")}
            <strong>{{ username: user?.name }}</strong>
          </Trans>
        </Welcome>
      </Header>

      <Book>
        <img src={book} alt="Book" />
        <section>
          <div>
            <h2>Crossing the Chasm</h2>
            <h3>Geoffrey A. Moore</h3>
          </div>

          <div>
            <span>150 páginas</span>
            <span>Editora Loyala</span>
            <span>Publicado em 2020</span>
          </div>
        </section>
      </Book>
    </Container>
  );
};
