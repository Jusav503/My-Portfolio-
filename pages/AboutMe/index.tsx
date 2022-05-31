import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styles from "./styles.module.css";
import { Formation, Skills } from "../../components/AboutMeComponents/aboutme";

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
      <div className="paddingContainer">
        <section>
          <div className={styles.titleContainer}>
            <h2>Sobre mí</h2>
          </div>

          <AnimationOnScroll animateIn="animate__zoomIn">
            <Formation />
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__zoomIn">
            <Skills />
          </AnimationOnScroll>
        </section>
      </div>
    </div>
  );
}

export default AboutMe;
