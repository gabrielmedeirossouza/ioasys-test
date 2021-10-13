import styled from "styled-components";
import { transparentize } from "polished";

interface IContainer {
  floating?: boolean;
}

export const Container = styled.div<IContainer>`
  position: ${({ floating }) => (floating ? "absolute" : "relative")};
  width: fit-content;

  padding: 1rem;
  margin: 1rem 0;

  border-radius: 0.25rem;
  background-color: ${({ theme }) => transparentize(0.6, theme.colors.background)};

  &:before {
    content: "";

    position: absolute;
    top: -0.5rem;
    left: 1rem;

    border-bottom: 0.5rem solid ${({ theme }) => transparentize(0.6, theme.colors.background)};
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
  }
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.text.contrast};
  font-size: 1rem;
  font-weight: 700;
`;
