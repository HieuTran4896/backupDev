import Style from "../styles/OrderTable.module.css";
import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  LocalizationProvider,
  DesktopDatePicker,
  MobileDatePicker,
  MobileTimePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import { DesktopTimePicker } from "@mui/x-date-pickers";
import { ClockPicker } from "@mui/x-date-pickers";
import { useRouter } from "next/router";
import {
  Box,
  FormControl,
  Text,
  Container,
  Wrap,
  WrapItem,
  Flex,
} from "@chakra-ui/react";
import * as en from "../locales/en/CaculateTable.json";
import * as vn from "../locales/vn/CaculateTable.json";
const OrderTable: React.FC = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : vn;

  const [service, setService] = React.useState(t.type);
  const [bachelor, setBachelor] = React.useState(t.level);
  const [serviceInput, setServiceInput] = React.useState<boolean>(false);
  const [bachelorInput, setBachelorInput] = React.useState<boolean>(false);
  const [value, setValue] = React.useState(new Date());
  const [time, setTime] = React.useState<string>("");
  const [price, setPrice] = React.useState<number>(17.01);
  const [total, setTotal] = React.useState<number>(15.01);
  const [word, setWord] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [unlock, setUnlock] = React.useState<boolean>(false);
  const handleClickService = (value: string) => {
    setService(value);
    setServiceInput(false);
  };
  const handleClickBachelor = (value: string) => {
    setBachelor(value);
    setBachelorInput(false);
  };
  const closeService = () => {
    setServiceInput(!serviceInput);
    setBachelorInput(false);
  };
  const closeBachelor = () => {
    setBachelorInput(!bachelorInput);
    setServiceInput(false);
  };

  const handleWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <Container
      onMouseLeave={() => {
        setServiceInput(false);
        setBachelorInput(false);
      }}
      className={Style.mainBackgroundRight}
    >
      {" "}
      <FormControl>
        <Text className={Style.formTitle}>CALCULATE YOUR ORDER</Text>
        <div style={{ margin: "0 5%" }}>
          <div style={{ position: "relative" }}>
            {" "}
            <div
              onClick={() => {
                closeService();
              }}
              className={Style.wrapperService}
            >
              <Text>{service}</Text>
              <img
                src="/assets/images/polygon.png"
                alt="polygon"
                className={Style.polygon}
              />
            </div>
            <Box
              className={
                serviceInput ? Style.boxService : Style.boxServiceClose
              }
            >
              <input
                type="radio"
                id="essay"
                onClick={() => {
                  handleClickService("Essay");
                }}
              />
              <label htmlFor="essay">Essay</label>
              <input
                type="radio"
                id="research"
                onClick={() => {
                  handleClickService("Research");
                }}
              />
              <label htmlFor="research">Research</label>
              <input
                type="radio"
                id="disertation"
                onClick={() => {
                  handleClickService("Disertation");
                }}
              />
              <label htmlFor="disertation">Disertation</label>
              <input
                type="radio"
                id="onlineTest"
                onClick={() => {
                  handleClickService("Online Test");
                }}
              />
              <label htmlFor="onlineTest">Online Test</label>
            </Box>
          </div>
        </div>
        <div
          style={{
            margin: "0 5%",
          }}
        >
          <div style={{ position: "relative" }}>
            <div
              onClick={() => {
                closeBachelor();
              }}
              className={Style.wrapperBachelor}
            >
              <div>{bachelor}</div>
              <img
                src="/assets/images/polygon.png"
                alt="polygon"
                className={Style.polygon}
              />
            </div>

            <div
              className={
                bachelorInput ? Style.boxBachelor : Style.boxBachelorClose
              }
            >
              <input
                type="radio"
                id="bachelor"
                onClick={() => {
                  handleClickBachelor("Bachelor");
                }}
              />
              <label htmlFor="bachelor">Bachelor</label>
              <input
                type="radio"
                id="master"
                onClick={() => {
                  handleClickBachelor("Master");
                }}
              />
              <label htmlFor="master">Master</label>
              <input
                id="Ph.D"
                type="radio"
                onClick={() => {
                  handleClickBachelor("Ph.D");
                }}
              />
              <label htmlFor="Ph.D">Ph.D</label>
            </div>
          </div>
        </div>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          style={{ width: "100%", height: "2.9vw" }}
        >
          <Stack
            style={{
              height: "100%",
              margin: "0.87vw 5%",
            }}
          >
            <div className="d-flex justify-content-between">
              <DesktopDatePicker
                inputFormat="dd/MM/yyyy"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />

              <TextField
                id="time"
                type="time"
                defaultValue="07:00"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </Stack>
        </LocalizationProvider>
        <div style={{ margin: "0 5%", position: "relative" }}>
          <input
            type="text"
            value={word}
            placeholder={service === "Online Test" ? `${t.time}` : `${t.words}`}
            className={Style.wrapperWord}
            onChange={handleWord}
          />
        </div>
        <Flex
          padding="0.1vw 5%"
          alignItems="center"
          h="2.9vw"
          justifyContent="space-evenly"
        >
          <Text fontWeight="500" fontSize="1vw" m="0">
            {t.price}
          </Text>
          <Text fontWeight="bolder" fontSize="1.9vw" color="#FEAE2F" margin="0">
            $ {price}
          </Text>
        </Flex>
        <Box className={Style.checkoutBox}>
          <Flex justifyContent="space-between" m=" 0 5%">
            <Box className={Style.textCheckout}>
              <Text>{t.sales}</Text>
              <Text>{t.only}</Text>
            </Box>
            <Text fontWeight="bolder" fontSize="1.9vw" color="#FFF">
              $ {total}
            </Text>
          </Flex>
          <Flex width="90%" fontSize="1vw" alignItems="center" margin="0 5%">
            <input
              className={Style.inputEmail}
              onChange={handleEmail}
              value={email}
              placeholder={t.email}
            />
            <button
              onClick={(event) => {
                event.preventDefault();
                setUnlock(true);
              }}
              onMouseOut={(event) => {
                event.preventDefault();
                setUnlock(false);
              }}
              className={Style.buttonUnlock}
            >
              {unlock ? (
                <img
                  width="100%"
                  height="100%"
                  src="/assets/images/unlockTrig.png"
                />
              ) : (
                <img
                  width="100%"
                  height="100%"
                  src="/assets/images/unlock.png"
                />
              )}
            </button>
          </Flex>
        </Box>

        <div className={Style.orderBox}>
          <Flex alignItems="center" justifyContent="space-evenly">
            <Text fontSize="2.4vw" color="white" fontWeight="bolder">
              {t.order}
            </Text>
            <img
              className={Style.imageOrder}
              src="/assets/images/orderArrow.png"
            />
          </Flex>
        </div>
      </FormControl>
    </Container>
  );
};
export default OrderTable;
