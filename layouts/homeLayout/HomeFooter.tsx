import Style from "../../styles/HomeFooter.module.css";
import {
  Container,
  WrapItem,
  Flex,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
const HomeFooter: React.FC = () => {
  return (
    <Container className={Style.backgroundFooter}>
      <WrapItem height="7vw" width="14vw">
        <img width="100%" src="assets/images/companyIcon.png" />
      </WrapItem>
      <Flex alignItems="flex-start" justifyContent="space-between">
        <UnorderedList className={Style.footerInfor} listStyleType="none">
          <ListItem
            style={{ fontSize: "1.2vw", fontWeight: 600, lineHeight: "1.5vw" }}
          >
            Follow Us
          </ListItem>
          <ListItem>
            {" "}
            <UnorderedList className={Style.socialIcon} listStyleType="none">
              <ListItem>
                {" "}
                <a href="https://www.facebook.com/Maas.Essay">
                  {" "}
                  <img src="assets/images/facebookIcon.png" />
                </a>
              </ListItem>
              <ListItem>
                <a href="https://www.instagram.com/maas.assignment/">
                  {" "}
                  <img src="assets/images/instargramIcon.png" />
                </a>
              </ListItem>
              <ListItem>
                <a href="https://www.youtube.com/channel/UCq0YmHEXOWJEY2v3ATdLDGw">
                  {" "}
                  <img src="assets/images/youtubeIcon.png" />
                </a>
              </ListItem>
              <ListItem>
                {" "}
                <a href="https://www.tiktok.com/@maas.essayservice">
                  {" "}
                  <img src="assets/images/tiktokIcon.png" />
                </a>
              </ListItem>
              <ListItem>
                <a href="https://www.linkedin.com/company/maas-education-technology">
                  {" "}
                  <img src="assets/images/linkedinIcon.png" />
                </a>
              </ListItem>
            </UnorderedList>
          </ListItem>

          <ListItem
            style={{ fontWeight: 600, fontSize: "1.04vw", lineHeight: "1.3vw" }}
          >
            Address
          </ListItem>
          <ListItem
            style={{
              fontWeight: 400,
              fontSize: "0.83vw",
              lineHeight: "1.04vw",
            }}
          >
            Lake View 1, Thu Thiem, 19 To Huu Street
            <br></br>
            An Khanh Ward, District 2 ,HCM
          </ListItem>
        </UnorderedList>
        <UnorderedList className={Style.service} listStyleType="none">
          <ListItem
            style={{ fontSize: "1.2vw", fontWeight: 600, lineHeight: "1.5vw" }}
          >
            Our Service
          </ListItem>
          <ListItem
            style={{
              fontWeight: 400,
              fontSize: "0.83vw",
              lineHeight: "1.04vw",
            }}
          >
            Writing Services
          </ListItem>
          <ListItem
            style={{
              fontWeight: 400,
              fontSize: "0.83vw",
              lineHeight: "1.04vw",
            }}
          >
            Feedback & Grade Services
          </ListItem>
          <ListItem
            style={{
              fontWeight: 400,
              fontSize: "0.83vw",
              lineHeight: "1.04vw",
            }}
          >
            Checking Plagiarism
          </ListItem>
          <ListItem
            style={{
              fontWeight: 400,
              fontSize: "0.83vw",
              lineHeight: "1.04vw",
            }}
          >
            Online Exam Test
          </ListItem>
        </UnorderedList>
        <UnorderedList className={Style.resource} listStyleType="none">
          <ListItem
            style={{ fontSize: "1.2vw", fontWeight: 600, lineHeight: "1.5vw" }}
          >
            Free Resources
          </ListItem>
          <ListItem
            style={{
              fontWeight: 400,
              fontSize: "0.83vw",
              lineHeight: "1.04vw",
            }}
          >
            Customer's Feedback
          </ListItem>
          <ListItem
            style={{
              fontWeight: 400,
              fontSize: "0.83vw",
              lineHeight: "1.04vw",
            }}
          >
            Assignment Sample
          </ListItem>{" "}
          <ListItem
            style={{
              fontWeight: 400,
              fontSize: "0.83vw",
              lineHeight: "1.04vw",
            }}
          >
            Job Opportunities
          </ListItem>{" "}
          <ListItem
            style={{
              fontWeight: 400,
              fontSize: "0.83vw",
              lineHeight: "1.04vw",
            }}
          >
            Blogs
          </ListItem>
        </UnorderedList>
        <UnorderedList className={Style.contact} listStyleType="none">
          <ListItem
            style={{ fontSize: "1.2vw", fontWeight: 600, lineHeight: "1.5vw" }}
          >
            Phone
          </ListItem>
          <ListItem
            style={{
              fontWeight: 400,
              fontSize: "0.83vw",
              lineHeight: "1.04vw",
            }}
          >
            (+84) 979 422 393 - 089 851 1588
          </ListItem>
          <ListItem
            style={{ fontSize: "1.2vw", fontWeight: 600, lineHeight: "1.5vw" }}
          >
            Working hours
          </ListItem>
          <ListItem
            style={{
              fontWeight: 400,
              fontSize: "0.83vw",
              lineHeight: "1.04vw",
            }}
          >
            8:30 a.m - 23:30 p.m
          </ListItem>
          <button
            style={{
              width: "15vw",
              height: "3.4vw",
              color: "white",
              outline: "none",
              border: "none",
              fontWeight: "bolder",
              fontSize: "1.1vw",
              paddingLeft: "1vw",
              borderRadius: "0.26vw",
              lineHeight: "1.4vw",
              background: "linear-gradient(to bottom,#FEAE2F 0%,#F9640A 100%)",
            }}
            type="button"
          >
            Order Now
          </button>
        </UnorderedList>
      </Flex>
    </Container>
  );
};
export default HomeFooter;
