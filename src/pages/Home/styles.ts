import styled from "styled-components";
import { transparentize } from "polished";
import { MainContent } from "@/components/shared";

import ebookCanvasBkg from "@/assets/bkg/book-canvas.png";

export const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  background: url(${ebookCanvasBkg}) no-repeat;
  background-blend-mode: darken;
  background-size: cover;
  background-color: ${({ theme }) =>
    transparentize(0.925, theme.colors.text.ioasysPrimary)};
`;

export const Welcome = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

export const Content = styled(MainContent)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

export const Book = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 1px 1px 6px
    ${({ theme }) => transparentize(0.95, theme.colors.secondary)};

  cursor: pointer;
  transition: transform 0.1s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }

  img {
    width: 5rem;
    height: 7.5rem;
  }

  section {
    width: 100%;
    margin-left: 1rem;

    div:first-child {
      margin-bottom: 1.5rem;

      h2 {
        color: ${({ theme }) => theme.colors.text.default};
        font-size: 0.875rem;
        font-weight: 500;
      }

      h3 {
        color: ${({ theme }) => theme.colors.text.ioasysSecondary};
        font-size: 0.75rem;
        font-weight: 400;
      }
    }

    div:last-child {
      display: flex;
      flex-direction: column;

      span {
        color: ${({ theme }) => theme.colors.text.smooth};
        font-size: 0.75rem;
        font-weight: 400;
      }
    }
  }
`;
