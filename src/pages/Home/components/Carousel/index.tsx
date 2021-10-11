import { CardBook } from "../CardBook";
import { Container } from "./styles";

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

interface IBooks {
  books: IBook[];
}

export const Carousel = ({ books }: IBooks) => (
  <Container>
    {books.map((book) => (
      <CardBook book={book} />
    ))}
  </Container>
);
