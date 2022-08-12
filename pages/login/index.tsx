import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Input,
  Text,
} from "@chakra-ui/react";
import Style from "../../styles/Account.module.css";
import * as React from "react";
import AccountHeader from "../../layouts/accoutLayout/AccountHeader";
import { useTranslation } from "next-i18next";
import { getStaticProps } from "../index";
import { useRouter } from "next/router";

const Login: React.FC = (props) => {
  const { t } = useTranslation("login");
  const { locale } = useRouter();
  const router = useRouter();
  return (
    <Container className={Style.accountContainer}>
      <Box className={Style.accountWrapper}>
        {" "}
        <AccountHeader />
        <Box className={Style.containerLayout}>
          <Text className={Style.textTitle}>{t("login")}</Text>
          <Box m="1vw 0" fontSize="1vw" lineHeight="1.3vw">
            {" "}
            <span color="#808080">{t("new")}</span>
            <span
              onClick={() => {
                router.push(`${locale}/register`);
              }}
              className={Style.createText}
            >
              {t("create")}
            </span>
          </Box>
          <FormControl>
            <Input
              className={Style.emailInput}
              tabIndex={1}
              type="email"
              name="email"
              required
              placeholder={t("email")}
            />
            <Input
              className={Style.passInput}
              tabIndex={2}
              type="password"
              required
              name="password"
              placeholder={t("pass")}
            />

            <Flex w="90%" alignItems="baseline" justifyContent="space-between">
              <Flex alignItems="baseline" justifyContent="space-between">
                <Input
                  className={Style.remember}
                  name="remember"
                  type="checkbox"
                />
                <Text
                  fontSize="1vw"
                  fontWeight="500"
                  lineHeight="1.3vw"
                  marginLeft="1vw"
                >
                  {t("remember")}
                </Text>
              </Flex>

              <Text className={Style.forgotText}>{t("forgot")}</Text>
            </Flex>

            <Button tabIndex={3} className={Style.signinButton} type="submit">
              {t("loginEnd")}
            </Button>
          </FormControl>

          <Text fontSize="1vw" fontWeight="500">
            {t("policy")}
          </Text>
        </Box>
      </Box>
    </Container>
  );
};
export default Login;
export { getStaticProps };
