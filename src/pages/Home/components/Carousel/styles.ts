import styled, { css, keyframes } from "styled-components";
import { MainContent } from "@/components/shared";

export const Container = styled(MainContent)`
  position: relative;
  overflow: hidden;
`;

interface ISection {
  nextPage?: boolean;
  prevPage?: boolean;
  options: {
    position: number;
    oldPosition: number;
    paginationWidth: number;
    columns: number;
    rows: number;
    gap: number;
  };
}

const animePosition = (oldPosition: number, position: number) => keyframes`
  from { transform: ${`translateX(${oldPosition}px)`}; }
  to { transform: ${`translateX(${position}px)`}; }
`;

export const Section = styled.section<ISection>`
  position: relative;
  display: grid;
  grid-template-columns: ${({ options }) => `repeat(${options.columns}, 1fr)`};
  grid-template-rows: ${({ options }) => `repeat(${options.rows}, 1fr)`};
  grid-auto-flow: column;
  gap: ${({ options }) => `${options.gap}px`};
  padding: 8px;

  ${({ prevPage, nextPage, options }) =>
    (prevPage || nextPage) &&
    css`
      animation: ${animePosition(options.oldPosition, options.position)} 0.5s forwards;
    `}
`;

export const Footer = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-right: 1rem;
`;
