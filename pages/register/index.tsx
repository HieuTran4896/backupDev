import {
  Box,
  Container,
  Input,
  Text,
  FormControl,
  Button,
} from "@chakra-ui/react";
import * as React from "react";
import AccountHeader from "../../layouts/accoutLayout/AccountHeader";
import Style from "../../styles/Account.module.css";
import { useTranslation } from "next-i18next";
import { getStaticProps } from "../index";
const Register: React.FC = (propss) => {
  const { t } = useTranslation("register");
  return (
    <Container className={Style.accountContainer}>
      <Box className={Style.accountWrapper}>
        {" "}
        <AccountHeader />
        <Box className={Style.containerLayout}>
          <Text className={Style.textTitle}>{t("createTitle")}</Text>
          <Box m="1vw 0" fontSize="1vw" lineHeight="1.3vw">
            {" "}
            <span color="#808080">{t("haveAccount")}</span>
            <span className={Style.createText}>{t("returnLogin")}</span>
          </Box>
          <FormControl>
            <Input
              className={Style.emailInput}
              type="email"
              name="email"
              required
              placeholder={t("email")}
            />

            <Button tabIndex={3} className={Style.registerButton} type="submit">
              {t("register")}
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Container>
  );
};
export default Register;
export { getStaticProps };
