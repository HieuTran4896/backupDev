import * as React from "react";
import {
  Container,
  Flex,
  Box,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import Style from "../styles/MainBackground.module.css";
import OrderTable from "./OrderTable";
import RatingBox from "./RatingBox";
const MainBackground: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation("main");
  return (
    <Container onClickCapture={onClose} className={Style.mainWrapper}>
      <Flex m="0 8vw" justifyContent="space-between">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
        >
          <Box>
            {""}
            <span className={Style.title}>{t("intro1")}</span>
            <span className={Style.titleRight}>
              {t("order", { ns: "header" })}
            </span>
          </Box>

          <Flex m="5vw 0">
            <Box className={Style.customerReview}>
              <RatingBox text="Customer Review" />
            </Box>
            <Box className={Style.googleReview}>
              <RatingBox text="Google Review" />
            </Box>
          </Flex>
          <Box w="42vw" h="33vw">
            <img
              style={{ width: "100%", height: "100%" }}
              src="/assets/images/Group319.png"
              alt="/assets/images/Group319.png"
            />
          </Box>
        </Box>
        <Flex direction="column" alignItems="center">
          <OrderTable />
          <Box onClick={onOpen}>
            {" "}
            <button className={Style.glowingCircle} type="button">
              <img
                width="100%"
                src="/assets/images/clickButton.png"
                alt="/assets/images/clickButton.png"
              />
            </button>
            <Text
              fontSize="1.15vw"
              lineHeight="1.43vw"
              fontWeight="700"
              width="100%"
              m="1vw"
            >
              {t("video")}
            </Text>
          </Box>
        </Flex>
      </Flex>
      <>
        {" "}
        <Modal
          closeOnOverlayClick={true}
          closeOnEsc={true}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <iframe
                style={{
                  width: "50vw",
                  borderRadius: "2vw",
                  height: "50vh",
                  border: "none",
                  margin: "35vh  25vw",
                }}
                src="https://www.youtube.com/embed/I8ufwKPh6TE"
                title="MAAS Introduce"
                loading="lazy"
                frameBorder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>{" "}
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    </Container>
  );
};
export default MainBackground;
