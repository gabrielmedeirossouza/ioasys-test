import { MouseEventHandler, ReactNode } from "react";
import { Container } from "./styles";

interface IButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick }: IButtonProps) => (
  <Container type="button" onClick={onClick}>
    {children}
  </Container>
);
