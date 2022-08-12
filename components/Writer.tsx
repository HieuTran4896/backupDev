import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { Box, Center, Container, Flex, Img, Text } from "@chakra-ui/react";
import Style from "../styles/Writer.module.css";
import listWriter from "../data/writers.json";
import { useTranslation } from "next-i18next";
const Writer: React.FC = () => {
  const { t } = useTranslation("writer");
  const renderListWriterDesktop = () => {
    return listWriter.map((infor, index) => {
      return (
        <SwiperSlide key={index}>
          <Flex
            width="90%"
            margin="0 5%"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Box border="1px solid black" height="8vw" width="8vw">
              <Img w="100%" src={infor.image} />
            </Box>

            <Box width="60%" height="60%">
              <Text m={0} fontSize="2vw">
                {infor.name}
              </Text>
              <Img w="100%" src={infor.star} />
            </Box>
          </Flex>
          <Container
            width="100%"
            margin="10% 0"
            background="#DEDEDE"
            height="0.2vw"
          ></Container>
          <Flex
            width="90%"
            margin="0 5%"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Text fontSize="1.5vw" fontWeight="bolder">
                {infor.finishPaper}
              </Text>
              <Text fontSize="1vw">Finished papers</Text>
            </Box>
            <Box>
              <Text fontSize="1.5vw" fontWeight="bolder">
                {infor.level}
              </Text>
              <Text style={{ fontSize: "1vw" }}>Writer Level</Text>
            </Box>
          </Flex>
          <Container
            width="100%"
            margin="10% 0"
            background="#DEDEDE"
            height="0.2vw"
          ></Container>
          <Flex
            width="90%"
            margin="0 5%"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box height="fit-content">
              <Text fontSize="1.5vw" fontWeight="bolder" color="#FEAE2F">
                {infor.rate}
              </Text>
              <Text fontSize="1.5vw" fontWeight="bolder">
                Success rate
              </Text>
            </Box>
            <button className={Style.hire} type="button">
              Hire
            </button>
          </Flex>
        </SwiperSlide>
      );
    });
  };
  return (
    <Container className={Style.writerBackground}>
      <Center>
        <span
          style={{
            fontWeight: 700,
            fontSize: "1.8vw",
            color: "black",
            margin: "0 5px",
          }}
        >
          {t("writerIntro1")}
        </span>
        <span style={{ fontWeight: 700, fontSize: "1.8vw", color: "#F9640A" }}>
          {t("writerIntro2")}
        </span>
      </Center>
      <Center textAlign="center" fontSize="1.1vw" width="60vw" m="2vw 20vw">
        {t("welcome")}
      </Center>
      <Container style={{ margin: "1vw", display: "flex" }}>
        <button
          className={Style.prevButton}
          onClick={() => {
            const swiper = document.querySelector(".swiper");
            console.log(swiper);
          }}
        >
          <Img w="100%" src="/assets/images/prevButtonDisabled.png" />
        </button>
        <Swiper
          className="swiper"
          spaceBetween={50}
          slidesPerView={3}
          slidesPerGroup={3}
        >
          {renderListWriterDesktop()}
        </Swiper>
        <button
          onClick={() => {
            const swiper = document.querySelector(".swiper");
          }}
          className={Style.nextButton}
        >
          <Img w="100%" src="/assets/images/nextButtonDisabled.png" />
        </button>
      </Container>
    </Container>
  );
};
export default Writer;
