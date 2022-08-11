import { Container, Box, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Style from "../styles/RatingBox.module.css";
type props = {
  text: string;
};
const RatingBox = ({ text }: props) => {
  const [rating, setRating] = useState(5);

  return (
    <Container position="relative" width="100%">
      <Box className={Style.wrapperText}>
        <Box className={Style.textRating}>{text}</Box>
      </Box>
      <Box className={Style.containerRating}>
        <Text fontSize="2vw" mt="1.5vw" fontWeight="600">
          5.0
        </Text>
        {/* {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                style={{
                  cursor: "pointer",
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                }}
                key={index}
                className={index <= rating ? Style.starOn : Style.starOff}
                onClick={() => setRating(index)}
              >
                <span
                  style={{
                    fontSize: "1.5vw",
                    lineHeight: "2vw",
                    fontWeight: "bolder",
                  }}
                >
                  &#9733;
                </span>
              </button>
            );
          })} */}
        <Image width="100%" src="/assets/images/5star.png" />
      </Box>
    </Container>
  );
};
export default RatingBox;
