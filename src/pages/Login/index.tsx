import { Button } from "@/components/global";
import { MainContent } from "@/components/shared";
import { Container } from "./styles";

export const Login = () => {
  const handleClick = () => {
    console.log("Apertei no botão");
  };

  return (
    <Container>
      <MainContent>
        <Button onClick={handleClick}>Entrar</Button>
      </MainContent>
    </Container>
  );
};
