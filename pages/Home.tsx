import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import MainBackground from "../components/MainBackground";
import HomeFooter from "../layouts/homeLayout/HomeFooter";
import HomeHeader from "../layouts/homeLayout/HomeHeader";
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
