import styled, { css } from "styled-components";
import { darken } from "polished";

interface IContainer {
  isText: boolean;
  disabled?: boolean;
}

export const Container = styled.button<IContainer>`
  border: none;
  outline: none;

  ${({ isText, disabled }) =>
    isText
      ? css`
          color: ${({ theme }) => theme.colors.text.ioasysPrimary};
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.25rem;
          white-space: nowrap;
          padding: 0.5rem 1.25rem;
          border-radius: 999px;

          background-color: ${({ theme }) => theme.colors.primary};

          transition: color 0.2s, background-color 0.2s;

          ${!disabled &&
          css`
            &:hover {
              color: ${({ theme }) => theme.colors.primary};
              background-color: ${({ theme }) => theme.colors.text.ioasysPrimary};
            }

            &:active {
              background-color: ${({ theme }) => darken(0.2, theme.colors.text.ioasysPrimary)};
            }
          `}
        `
      : css`
          display: flex;
          justify-content: center;
          flex-direction: row;
          background-color: transparent;
          transition: transform 0.1s;

          ${!disabled &&
          css`
            &:hover {
              transform: scale(1.1);
            }

            &:active {
              transform: scale(0.9);
            }
          `}
        `}
`;
