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
        <div className={styles.logoContainer}>
          <h3 style={{textAlign:"center", color:"#2c2c2c"}}>Web creada con:</h3>
          <div className={styles.logoContent}>
            <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt="logo react" className={styles.logo} />
            <img src="https://miro.medium.com/max/1400/1*Smbj_VLH7JRp9GhLaKyiUQ.png" alt="logo react" className={styles.logo} />
          </div>
        </div>
      </main>

      <FooterComponent />
    </div>
  );
};

export default Home;
