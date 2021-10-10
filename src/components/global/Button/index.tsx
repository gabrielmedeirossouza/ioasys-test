import { MouseEventHandler } from "react";

import { Icon } from "@/components/global";
import { Container } from "./styles";

interface IButtonProps {
  text?: string;
  icon?: string;
  alt?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ text, icon, alt, onClick, type }: IButtonProps) => {
  const isText = !!text;

  return (
    <Container isText={isText} type={type ?? "button"} onClick={onClick}>
      {text ?? <Icon icon={icon ?? ""} alt={alt} />}
    </Container>
  );
};
