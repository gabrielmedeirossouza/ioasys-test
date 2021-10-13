import styled from "styled-components";
import { MainContent } from "../MainContent";

import logoLgo from "@/assets/lgo/ioasys-dark.svg";

export const Container = styled.header`
  width: 100%;
  padding: 2.625rem 0;

  @media (max-width: 1300px) {
    padding: 2.625rem 2rem;
  }
`;

export const StyledMainContent = styled(MainContent)`
  display: flex;
  justify-content: space-between;
`;

export const LogoArea = styled.div`
  display: flex;

  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;

export const Img = styled.img.attrs(() => ({
  src: logoLgo,
  alt: "Logo",
  width: "100",
  height: "36",
}))``;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text.default};
  font-size: 1.75rem;
  font-weight: 300;
  margin-left: 1rem;
`;

export const Content = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  margin: auto 0;

  & > * {
    & + * {
      margin-left: 1rem;
    }
  }
`;
