import styled from "styled-components";
import { MainContent } from "@/components/shared";

export const Container = styled(MainContent)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;
