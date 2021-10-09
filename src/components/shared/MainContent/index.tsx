import { ReactNode } from "react";

import { Container } from "./styles";

interface IContainerProps {
  children: ReactNode;
}

export const MainContent = ({ children }: IContainerProps) => (
  <Container>{children}</Container>
);
