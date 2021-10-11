import { Trans, useTranslation } from "react-i18next";
import { useCallback, useEffect, useState } from "react";
import { IBook } from "@/@types/books";

import { request } from "@/services";
import { useAuth } from "@/hooks";

import { Header } from "@/components/shared";
import { Container, Welcome, Content, Book } from "./styles";

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

  const handleShowDetail = useCallback((id) => {
    console.log(id);
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

      <Content>
        {hasBooks &&
          books.map((book) => (
            <Book key={book.id} onClick={() => handleShowDetail(book.id)}>
              <img src={book.imageUrl} alt="Book" />
              <section>
                <div>
                  <h2>{book.title}</h2>
                  {book.authors.map((author) => (
                    <h3 key={author}>{author}</h3>
                  ))}
                </div>

                <div>
                  <span>
                    <Trans i18nKey="pages.home.books.pages">
                      {{ pages: book.pageCount }}
                    </Trans>
                  </span>

                  <span>
                    <Trans i18nKey="pages.home.books.publishingCompany">
                      {{ publishingCompany: book.publisher }}
                    </Trans>
                  </span>

                  <span>
                    <Trans i18nKey="pages.home.books.publishedDate">
                      {{ publishedDate: book.published }}
                    </Trans>
                  </span>
                </div>
              </section>
            </Book>
          ))}
      </Content>
    </Container>
  );
};
