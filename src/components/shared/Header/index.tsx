import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/hooks";

import { Button } from "@/components/global";

import { Container, StyledMainContent, LogoArea, Img, Title, Content } from "./styles";

import logoutIco from "@/assets/ico/logout.svg";

interface IHeaderProps {
  children?: ReactNode;
}

export const Header = ({ children }: IHeaderProps) => {
  const { t } = useTranslation();
  const { Logout } = useAuth();

  return (
    <Container>
      <StyledMainContent>
        <LogoArea>
          <Img />
          <Title>{t("global.applicationName")}</Title>
        </LogoArea>

        <Content>
          {children}
          <Button icon={logoutIco} alt="Logout" onClick={Logout} />
        </Content>
      </StyledMainContent>
    </Container>
  );
};
