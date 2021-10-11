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

export interface IBooks {
  data: IBook[];
}
