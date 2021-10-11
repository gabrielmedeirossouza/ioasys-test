import { Trans } from "react-i18next";

import { Book } from "./styles";

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

interface IBookProps {
  book: IBook;
}

export const CardBook = ({ book }: IBookProps) => (
  <Book key={book.id}>
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
          <Trans i18nKey="pages.home.books.pages">{{ pages: book.pageCount }}</Trans>
        </span>

        <span>
          <Trans i18nKey="pages.home.books.publishingCompany">{{ publishingCompany: book.publisher }}</Trans>
        </span>

        <span>
          <Trans i18nKey="pages.home.books.publishedDate">{{ publishedDate: book.published }}</Trans>
        </span>
      </div>
    </section>
  </Book>
);
