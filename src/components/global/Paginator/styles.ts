import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  line-height: 3rem;

  span {
    margin-right: 1rem;
    font-weight: 400;
  }

  button {
    & + button {
      margin-left: 0.5rem;
    }
  }
`;
