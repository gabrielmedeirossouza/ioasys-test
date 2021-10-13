import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/hooks";
import { schema } from "./schema";

import { Input, Button, ErrorMessage } from "@/components/global";
import { MainContent } from "@/components/shared";
import { Container, Header, HeroImg, HeroTitle } from "./styles";

interface IFormInputs {
  email: string;
  password: string;
}

export const Login = () => {
  const { t } = useTranslation();
  const auth = useAuth();

  const { register, handleSubmit, formState } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const isValidForm = !formState.errors.email?.type && !formState.errors.password?.type;

  const onSubmit = (formData: IFormInputs) => {
    auth.Login({
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <Container>
      <MainContent>
        <Header>
          <HeroImg />
          <HeroTitle>{t("global.applicationName")}</HeroTitle>
        </Header>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            title={t("pages.login.form.email.text")}
            placeholder={t("pages.login.form.email.underDescription")}
            register={{ ...register("email") }}
          />

          <Input
            type="password"
            title={t("pages.login.form.password.text")}
            placeholder={t("pages.login.form.password.underDescription")}
            register={{ ...register("password") }}
          >
            <Button type="submit" text={t("pages.login.form.signIn")} />
          </Input>
        </form>

        {!isValidForm && <ErrorMessage msg={t("pages.login.form.errors.invalidEmailOrPassword")} floating />}
      </MainContent>
    </Container>
  );
};
