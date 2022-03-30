import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import FooterComponent from "../components/FooterComponent";
import ProjectsArticle from "./ProjectsArticle";
import AboutMe from "./AboutMe";
import Contact from "../components/Contact";
import Presentation from "../components/Presentation";

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
        <Presentation />
        <AboutMe />
        <ProjectsArticle />
        <Contact />
      </main>

      <FooterComponent />
    </div>
  );
};

export default Home;
