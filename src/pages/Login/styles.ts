import styled from "styled-components";

import loginBkg from "@/assets/bkg/login.jpg";
import logoLgo from "@/assets/lgo/ioasys-light.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: url(${loginBkg}) no-repeat center;
  background-size: cover;
  width: 100vw;
  height: 100vh;

  @media (max-width: 1300px) {
    header,
    form {
      justify-content: center;
    }

    form {
      div {
        margin: auto;
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  margin-bottom: 3rem;
`;

export const HeroImg = styled.img.attrs(() => ({
  src: logoLgo,
  alt: "Logo",
}))``;

export const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.text.contrast};
  font-size: 1.75rem;
  font-weight: 300;
  margin-left: 1rem;
`;
