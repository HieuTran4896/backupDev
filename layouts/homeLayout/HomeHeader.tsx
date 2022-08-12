import * as React from "react";
import Style from "../../styles/HomePage.module.css";
import { Container, UnorderedList, ListItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Link } from "@mui/material";
import { useTranslation } from "next-i18next";
const HomeHeader: React.FC = (props) => {
  const [language, setLanguage] = React.useState(false);
  const [user, setUser] = React.useState(false);
  const [poly, setPoly] = React.useState(false);
  const [header, setHeader] = React.useState(false);
  const [polyLanguage, setPolyLanguage] = React.useState(false);
  const changeHeaderColor = () => {
    if (window.scrollY >= 30) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  const { t } = useTranslation("header");
  const { locale } = useRouter();
  const router = useRouter();
  return (
    <Container
      onMouseUpCapture={() => {
        setUser(false);
        setPolyLanguage(false);
        setLanguage(false);
      }}
      className={locale === "vn" ? Style.headerVN : Style.header}
    >
      <UnorderedList
        className={Style.headerLeft}
        alignItems="center"
        display="flex"
        listStyleType="none"
      >
        <ListItem>
          <img
            src="/assets/images/companyIcon.png"
            alt="companyIcon"
            className={Style.companyIcon}
          />
        </ListItem>
        <ListItem>{t("about")}</ListItem>
        <ListItem
          onMouseOver={() => {
            setPoly(true);
          }}
          onMouseLeave={() => {
            setPoly(false);
          }}
          className={Style.dropdown}
        >
          {t("service")}
          {poly ? (
            <img
              src="/assets/images/polyUp.png"
              alt="polygon"
              className={Style.polygon}
            />
          ) : (
            <img
              src="/assets/images/polygon.png"
              alt="polygon"
              className={Style.polygon}
            />
          )}
          <UnorderedList
            className={`${Style.dropdownMenu} ${Style.dropdownAni}`}
          >
            <ListItem className={Style.dropdownItem}>Assignment</ListItem>
            <ListItem className={Style.dropdownItem}>OnLine Test</ListItem>
            <ListItem className={Style.dropdownItem}>Dissertation</ListItem>
            <ListItem className={Style.dropdownItem}>Research</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>{t("policy")}</ListItem>
        <ListItem>{t("library")}</ListItem>
        <ListItem>{t("too")}</ListItem>
        <ListItem>{t("faq")}</ListItem>
        <ListItem>{t("review")}</ListItem>
      </UnorderedList>
      <UnorderedList
        alignItems="center"
        display="flex"
        listStyleType="none"
        className={Style.headerRight}
      >
        <ListItem className={Style.orderButton}>{t("order")}</ListItem>
        <ListItem
          onClick={() => {
            router.push(`/${locale}/login`);
          }}
          className={Style.loginButton}
        >
          {t("login")}
        </ListItem>

        <ListItem style={{ position: "relative", cursor: "pointer" }}>
          <img
            onMouseUpCapture={() => {
              setUser(!user);
            }}
            src="/assets/images/userAvatar.png"
            alt="/assets/images/userAvatar.png"
            style={{ width: "2vw", height: "2vw" }}
          />
          {/* <UnorderedList
            style={{ width: "22vw" }}
            listStyleType="none"
            className={user ? Style.userWrapperBlock : Style.userWrapperHide}
          >
            <ListItem>
              {" "}
              <img
                style={{ width: "50%", margin: "0 25%" }}
                src="/image/HomePage/userAvatar.png"
                alt="/image/HomePage/userAvatar.png"
              />
            </ListItem>
            <ListItem
              style={{ color: "#F9640A", fontWeight: "bolder" }}
            ></ListItem>
            <ListItem>My Account</ListItem>
            <ListItem className="d-flex aListItemgn-items-center">
              {" "}
              Sign Out{" "}
              <img
                style={{ width: "2vw", marginLeft: "2vw" }}
                src="/image/HomePage/signOut.png"
              />
            </ListItem>
          </UnorderedList> */}
        </ListItem>

        <ListItem
          onMouseUpCapture={() => {
            setLanguage(!language);
            setPolyLanguage(!polyLanguage);
          }}
        >
          <img src="/assets/images/ukIcon.png" className={Style.ukIcon} />
        </ListItem>

        <ListItem
          onMouseUpCapture={() => {
            setLanguage(!language);
            setPolyLanguage(!polyLanguage);
          }}
          style={{ position: "relative", cursor: "pointer" }}
        >
          {polyLanguage ? (
            <img
              src="/assets/images/polyUp.png"
              alt="polygon"
              className={Style.polygon}
            />
          ) : (
            <img
              src="/assets/images/polygon.png"
              alt="polygon"
              className={Style.polygon}
            />
          )}

          <UnorderedList
            className={
              language ? Style.languageWrapperBlock : Style.languageWrapperHide
            }
          >
            <Link href="/en">
              <ListItem style={{ margin: "0.5vw auto", width: "50%" }}>
                <img src="/assets/images/ukIcon.png" width="100%" />
              </ListItem>{" "}
            </Link>
            <Link href="/vn">
              {" "}
              <ListItem style={{ margin: "0.5vw auto", width: "50%" }}>
                <img src="/assets/images/vnIcon.png" width="100%" />
              </ListItem>
            </Link>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
    </Container>
  );
};
export default HomeHeader;
