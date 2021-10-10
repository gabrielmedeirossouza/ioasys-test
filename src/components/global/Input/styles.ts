import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.div`
  width: fit-content;
  padding: 0.5rem 0;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-width: 368px;
  height: 3.75rem;

  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: ${({ theme }) =>
    transparentize(0.68, theme.colors.secondary)};

  section {
    width: 100%;
  }
`;

export const Title = styled.span`
  color: ${({ theme }) => transparentize(0.5, theme.colors.text.contrast)};
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
`;

export const InputField = styled.input`
  color: ${({ theme }) => theme.colors.text.contrast};
  font-size: 1rem;
  font-weight: 400;

  width: 100%;
  line-height: 1.5rem;
  margin-top: 0.25rem;

  background-color: transparent;
  border: none;
  outline: none;

  &::placeholder {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text.contrast};
  }

  & + * {
    margin-left: 0.5rem;
  }
`;

export const ErrorMessage = styled.p``;
