import { Container, Message } from "./styles";

interface IErrorMessageProps {
  msg: string;
  floating?: boolean;
}

export const ErrorMessage = ({ msg, floating }: IErrorMessageProps) => (
  <Container floating={floating}>
    <Message>{msg}</Message>
  </Container>
);
