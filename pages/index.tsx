import type { NextPage } from "next";
import Head from "next/head";
import { Image } from "@mantine/core";

import styles from "../styles/Home.module.css";
import FooterComponent from "../components/FooterComponent";
import ProjectsArticle from "./ProjectsArticle";
import AboutMe from "./AboutMe";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <div className={styles.container} style={{ scrollBehavior: "smooth" }}>
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
            <Image
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
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <Image
                src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
                alt="logo react"
                className={styles.logo}
              />
            </a>
            <a href="https://mantine.dev/" target="_blank" rel="noreferrer">
              <Image
                src="https://miro.medium.com/max/1400/1*28sUAZod6N5ptJndb5CAng.png"
                alt="mantine logo"
                className={styles.logo}
              />
            </a>
            <a href="https://react-spring.io/" target="_blank" rel="noreferrer">
              <Image
                src="https://seeklogo.com/images/R/react-spring-logo-757E1EF5B5-seeklogo.com.png"
                alt="react spring logo"
                style={{ width: 55, margin: 15 }}
              />
            </a>
          </div>
        </div>
        <Contact />
      </main>

      <FooterComponent />
    </div>
  );
};

export default Home;
