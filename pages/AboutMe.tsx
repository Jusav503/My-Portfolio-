import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import styles from "../styles/Home.module.css";

function AboutMe() {
  return (
    <article className={styles.aboutMe} id="about-me">
      <h1>Acerca de mi</h1>

      <section className={styles.sectionMain}>
        <div className={styles.sectionContent}>
          <AnimationOnScroll animateIn="animate__backInLeft" className={styles.sectionInfo}>
            ¡Hey! Soy Justice Velasco, programador junior web/mobile front-end con
            React. El amor por los ordenadores y la tecnología comenzó a los 6 años
            de edad, ya que, a esa edad mi padre era dueño de un ciber, ciber donde
            yo pasaba horas frente al ordenador descubriendo el mundo del internet.
          </AnimationOnScroll>
          <img src="https://jusapp.s3.eu-central-1.amazonaws.com/aboutme.jpg" alt="" className={styles.image} />
        </div>
      </section>
      <p>
        A los 17 años hice una formación de programación y desarrollo de
        aplicaciones web, aprendí muchas de las tecnologías que se usan en el
        día a día de los programadores, también aprendí a como planificar,
        organizarme, desarrollar y monitorear los proyectos realizados.
      </p>
    </article>
  );
}

export default AboutMe;
