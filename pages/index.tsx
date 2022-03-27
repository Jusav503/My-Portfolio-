import type { NextPage } from "next";
import Head from "next/head";
import { Image } from "@mantine/core";

import styles from "../styles/Home.module.css";
import FooterComponent from "../components/FooterComponent";
import ProjectsArticle from "./ProjectsArticle";
import AboutMe from "./AboutMe";
import Contact from "../components/Contact";
import LogosComponent from "../components/LogosComponent";

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
        <figure className={styles.logoContainer}>
          <div style={{alignSelf: "flex-start"}}>
            <Image
              src="https://jusapp.s3.eu-central-1.amazonaws.com/myPixel.png"
              alt="pixel Justice"
              className={styles.logo}
            />
            <div className={styles.logoTitleContainer}>
              <span className={styles.logoTitle}>Jusav</span>
            </div>
          </div>
        </figure>

        <AboutMe />
        <ProjectsArticle />

        <LogosComponent/>
        <Contact />
      </main>

      <FooterComponent />
    </div>
  );
};

export default Home;
