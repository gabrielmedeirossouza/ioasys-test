import styled from "styled-components";
import { transparentize } from "polished";

import ebookCanvasBkg from "@/assets/bkg/book-canvas.png";

export const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  background: url(${ebookCanvasBkg}) no-repeat;
  background-blend-mode: darken;
  background-size: cover;
  background-color: ${({ theme }) => transparentize(0.925, theme.colors.text.ioasysPrimary)};
`;

export const HelloUser = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;
