import styled from "styled-components";

import ebookCanvasBkg from "@/assets/bkg/ebook-canvas.jpg";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background: url(${ebookCanvasBkg}) no-repeat;
  background-size: cover;
`;

export const Welcome = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

export const Book = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: fit-content;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  transition: transform 0.1s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }

  section {
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
