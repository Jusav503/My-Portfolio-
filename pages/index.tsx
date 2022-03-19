import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import FooterComponent from "../components/FooterComponent";
import NavBar from "../components/NavBar";
import ProjectsArticle from "./ProjectsArticle";
import AboutMe from "./AboutMe";
import ContactForm from "../components/ContactForm";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Justice Velasco</title>
        <meta
          name="description"
          content="Justice Velasco (Web and mobile developer)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <article className={styles.articleContainer}>
          <div className={styles.articleContent}>
            <div className={styles.articleText}>
              <h1 className={styles.mainTitle}>Justice Velasco</h1>
              <p className={styles.mainParagraph}>
                "The little front end web/mobile developer."
              </p>
            </div>
            <img
              src="https://jusapp.s3.eu-central-1.amazonaws.com/myPixel.png"
              alt="pixel Justice"
              className={styles.mainImage}
            />
          </div>
        </article>

        <AboutMe />
        <ProjectsArticle />

        <div className={styles.logoContainer}>
          <div className={styles.logoContent}>
            <img
              src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
              alt="logo react"
              className={styles.logo}
            />
            <img
              src="https://seeklogo.com/images/R/react-spring-logo-757E1EF5B5-seeklogo.com.png"
              alt="react spring logo"
              style={{width: 80}}
            />
            <img
              src="https://miro.medium.com/max/1400/1*28sUAZod6N5ptJndb5CAng.png"
              alt="mantine logo"
              className={styles.logo}
            />
            <img
              src="https://v4.mui.com/static/logo.png"
              alt="material ui logo"
              style={{width: 110}}
            />
          </div>
        </div>
        {/* <ContactForm /> */}
      </main>

      <FooterComponent />
    </div>
  );
};

export default Home;
