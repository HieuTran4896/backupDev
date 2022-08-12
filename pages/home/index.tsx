import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import MainBackground from "../../components/MainBackground";
import Writer from "../../components/Writer";
import HomeFooter from "../../layouts/homeLayout/HomeFooter";
import HomeHeader from "../../layouts/homeLayout/HomeHeader";
import { getStaticProps } from "../index";
const HomePage: React.FC = (props) => {
  return (
    <div>
      <HomeHeader />
      <MainBackground />
      <Writer />
      <HomeFooter />
    </div>
  );
};
export default HomePage;
export { getStaticProps };
