import React from "react";
import "animate.css/animate.min.css";
// import { AnimationOnScroll } from "react-animation-on-scroll";
import styles from "./styles.module.css";
import {
  Formation,
  Skills,
  StackTech,
} from "../../components/AboutMeComponents";

function AboutMe() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#1d1d1d",
        paddingTop: "90px",
        paddingBottom: "40px",
      }}
    >
      <section className="paddingContainer">
        <h2 className={styles.mainTitle}>Sobre mí</h2>

        <Skills />
        <Formation />
        <StackTech />
      </section>
    </div>
  );
}

export default AboutMe;
