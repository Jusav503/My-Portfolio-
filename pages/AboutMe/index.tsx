import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styles from "./styles.module.css";
import { Formation, Skills, StackTech } from "../../components/AboutMeComponents";

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
        <AnimationOnScroll animateIn="animate__zoomIn">
          <Skills />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__zoomIn">
          <Formation />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__zoomIn">
          <StackTech />
        </AnimationOnScroll>

        <h2 className={styles.mainTitle}>Certificados</h2>
      </section>
    </div>
  );
}

export default AboutMe;
