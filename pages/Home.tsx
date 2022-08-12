import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import MainBackground from "../components/MainBackground";
import HomeFooter from "../layouts/homeLayout/HomeFooter";
import HomeHeader from "../layouts/homeLayout/HomeHeader";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'mainbackground', 'CaculateTable', 'header']))
  }
})

const HomePage: React.FC = () => {
  return (
    <div>
      <HomeHeader />
      <MainBackground />
      <HomeFooter />
    </div>
  );
};
export default HomePage;
