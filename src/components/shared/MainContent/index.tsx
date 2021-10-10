import { ReactNode } from "react";

import { Container } from "./styles";

interface IContainerProps {
  className?: string;
  children: ReactNode;
}

export const MainContent = ({ className, children }: IContainerProps) => (
  <Container className={className}>{children}</Container>
);
