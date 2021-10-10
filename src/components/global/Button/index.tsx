import { MouseEventHandler } from "react";
import { Container } from "./styles";

interface IButtonProps {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ text, onClick, type }: IButtonProps) => (
  <Container type={type ?? "button"} onClick={onClick}>
    {text}
  </Container>
);
