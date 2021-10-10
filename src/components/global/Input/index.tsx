import { UseFormRegisterReturn } from "react-hook-form";
import { ReactNode } from "react";
import { ErrorMessage } from "@/components/global";
import { Container, InputContainer, Title, InputField } from "./styles";

interface IInputProps {
  children?: ReactNode;
  type?: "text" | "password";
  title: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  message?: string;
}

export const Input = ({
  children,
  type,
  title,
  placeholder,
  register,
  message,
}: IInputProps) => (
  <Container>
    <InputContainer>
      <section>
        <Title>{title}</Title>

        <InputField
          type={type ?? "text"}
          placeholder={placeholder}
          {...register}
        />
      </section>

      {children}
    </InputContainer>

    {message && <ErrorMessage msg={message} />}
  </Container>
);
