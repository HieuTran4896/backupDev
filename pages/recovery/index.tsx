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
const Recovery: React.FC = (propss) => {
  const { t } = useTranslation("recovery");
  return (
    <Container className={Style.accountContainer}>
      <Box className={Style.accountWrapper}>
        {" "}
        <AccountHeader />
        <Box className={Style.containerLayout}>
          <Text className={Style.textTitle}>{t("recoverTitle")}</Text>
          <Text m="1vw 0" fontSize="1vw" lineHeight="1.3vw" textAlign="center">
            {t("recoverNoti")}
          </Text>
          <FormControl>
            <Input
              className={Style.emailInput}
              type="email"
              name="email"
              required
              placeholder={t("email")}
            />

            <Button tabIndex={3} className={Style.registerButton} type="submit">
              {t("recover")}
            </Button>
            <Box m="1vw 0" fontSize="1vw" lineHeight="1.3vw">
              {" "}
              <span style={{ color: "#808080" }}>{t("back")}</span>
              <span style={{ cursor: "pointer" }} className={Style.createText}>
                {t("login")}
              </span>
            </Box>
          </FormControl>
        </Box>
      </Box>
    </Container>
  );
};
export default Recovery;
export { getStaticProps };
