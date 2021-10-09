import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.button`
  color: ${({ theme }) => theme.colors.text.ioasysPrimary};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.primary};

  transition: color 0.2s, background-color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.text.ioasysPrimary};
  }

  &:active {
    background-color: ${({ theme }) =>
      darken(0.2, theme.colors.text.ioasysPrimary)};
  }
`;
