import { memo, useMemo, useCallback, useEffect, useRef, useState } from "react";
import { Paginator } from "@/components/global";
import { CardBook } from "../CardBook";
import { Container, Section, Footer } from "./styles";

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

interface ICarouselProps {
  books: IBook[];
  onLastPage(): void;
}

type TPaginator = {
  nextPage: boolean;
  prevPage: boolean;
};

type TOptions = {
  position: number;
  oldPosition: number;
  paginationWidth: number;
  columns: number;
  rows: number;
  gap: number;
};

const GRID_GAP = 16;
const GRID_TEMPLATE_ROWS = 3;

const Carousel = ({ books, onLastPage }: ICarouselProps) => {
  const refBooks = useRef<HTMLDivElement>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [paginationWidth, setPaginationWidth] = useState(0);
  const [direction, setDirection] = useState<TPaginator>();
  const [position, setPosition] = useState(0);
  const [oldPosition, setOldPosition] = useState(0);
  const [dynamicCardBookWidth, setDynamicCardBookWidth] = useState(0);

  const makeResponsiveSlider = useCallback(() => {
    const sliderWidth = refBooks.current?.offsetWidth ?? 9999;
    const cardBookWidth = refBooks.current?.children[0]?.children[0]?.clientWidth ?? 9999;

    const maximumColumnsPerPage = Math.floor(sliderWidth / (cardBookWidth + GRID_GAP));
    const newCardBookWidth = sliderWidth / maximumColumnsPerPage - GRID_GAP;
    setDynamicCardBookWidth(newCardBookWidth);

    setTotalPages(Math.ceil(books.length / (maximumColumnsPerPage * GRID_TEMPLATE_ROWS)));

    const newSliderWidth = maximumColumnsPerPage * (newCardBookWidth + GRID_GAP);
    setPaginationWidth(newSliderWidth);
  }, [refBooks, dynamicCardBookWidth, paginationWidth, totalPages, books]);

  useEffect(() => {
    makeResponsiveSlider();

    window.addEventListener("resize", makeResponsiveSlider);
  }, [books]);

  const handleNextPage = useCallback(() => {
    setDirection({ nextPage: true, prevPage: false });

    setPosition((old) => {
      setOldPosition(old);
      return position - paginationWidth;
    });

    setCurrentPage(currentPage + 1);
  }, [direction, position, paginationWidth, currentPage]);

  const handlePrevPage = useCallback(() => {
    setDirection({ nextPage: false, prevPage: true });

    setPosition((old) => {
      setOldPosition(old);
      return position + paginationWidth;
    });

    setCurrentPage(currentPage - 1);
  }, [direction, position, paginationWidth, currentPage]);

  useEffect(() => {
    if (currentPage === totalPages) {
      onLastPage();
    }
  }, [currentPage]);

  const columns = Math.ceil(books.length / GRID_TEMPLATE_ROWS);

  const sliderOptions: TOptions = {
    position,
    oldPosition,
    paginationWidth,
    columns,
    rows: GRID_TEMPLATE_ROWS,
    gap: GRID_GAP,
  };

  const MemoizedBooks = useMemo(
    () => (
      <>
        {books.map((book) => (
          <CardBook key={book.id} book={book} dynamicWidth={dynamicCardBookWidth} />
        ))}
      </>
    ),
    [books, position, paginationWidth]
  );

  return (
    <Container>
      <div ref={refBooks}>
        <Section {...direction} options={sliderOptions}>
          {MemoizedBooks}
        </Section>
      </div>

      <Footer>
        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      </Footer>
    </Container>
  );
};

export const MemoizedCarousel = memo(Carousel);
