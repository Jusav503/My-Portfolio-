import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import FooterComponent from "../components/FooterComponent";
import NavBar from "../components/NavBar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

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
        <NavBar/>
        <article className={styles.contentMain}>
          <div>
            <h1 className={styles.Maintitle}>Justice Velasco</h1>
            <p className={styles.mainParagraph}>
              The little front end web/mobile developer.
            </p>
          </div>
        </article>
        <AboutMe/>
        <Projects/>
      </main>

      <FooterComponent />
    </div>
  );
};

export default Home;
