import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import FooterComponent from "../components/FooterComponent";
import ProjectsArticle from "./ProjectsArticle";
import AboutMe from "./AboutMe";
import Presentation from "../components/Presentation";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  return (
    <html className={styles.container} style={{ scrollBehavior: "smooth" }}>
      <Head>
        <title>Justice Velasco</title>
        <meta
          name="description"
          content="Justice Velasco (Web and mobile developer)"
        />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <header>
        <NavBar />
      </header>

      <main>
        <div id="inicio">
          <Presentation />
        </div>

        {/* Wave */}
        <div style={{ height: "150px", overflow: "hidden" }}>
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M-20.03,38.00 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "#1d1d1d" }}
            ></path>
          </svg>
        </div>
        <div id="sobre-mi">
          <AboutMe />
        </div>
        <div style={{ height: "150px", overflow: "hidden" }}>
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M0.00,49.98 C149.99,150.00 271.49,-49.98 530.76,86.36 L500.00,0.00 L0.00,0.00 Z"
              style={{ stroke: "none", fill: "#1d1d1d" }}
            ></path>
          </svg>
        </div>
        {/* End Wave */}

        <div id="proyectos">
          <ProjectsArticle />
        </div>
        <div id="contacto">
          <FooterComponent />
        </div>
      </main>
    </html>
  );
};

export default Home;
