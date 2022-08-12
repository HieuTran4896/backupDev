import { Box, Button, Flex, Img } from "@chakra-ui/react";
import * as React from "react";
import Style from "../../styles/Account.module.css";
const AccountHeader: React.FC = () => {
  return (
    <Flex direction="column">
      {" "}
      <Box className={Style.exitButton}>
        <Img width="100%" src="/assets/images/exitButton.png" />
      </Box>
      <Img className={Style.logoCompany} src="/assets/images/companyIcon.png" />
    </Flex>
  );
};
export default AccountHeader;
