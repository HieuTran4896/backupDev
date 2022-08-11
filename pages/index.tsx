import Head from "next/head";
import HomePage from "./home";
import Login from "./login";
import Register from "./register";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import Recovery from "./recovery";


export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "main",
      "caculate",
      "header",
      "login",
      "register",
      "recovery",
      "writer",
    ])),
  },
});


export default function Index() {

  return (
    <div>
      <Head>
        <title>Maas.vn</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <HomePage />
      <Login />
      <Register />
      <Recovery />
    </div>
  );
}
