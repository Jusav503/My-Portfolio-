import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import styles from "./styles.module.css";
import Image from "next/image";

function AboutMe() {
  return (
    <article className={styles.aboutMe} id="about-me">
      <h1 className={styles.mainTitle}>Acerca de mi</h1>

      <section className={styles.sectionMain}>
        <div className={styles.gridContainer}>
          <div>
            <AnimationOnScroll animateIn="animate__backInLeft">
              <p className={styles.paragraph}>
                ¡Hey! Soy Justice Velasco, programador junior web/mobile
                front-end con React. El amor por los ordenadores y la tecnología
                comenzó a los 6 años de edad, ya que, a esa edad mi padre era
                dueño de un ciber, ciber donde yo pasaba horas frente al
                ordenador descubriendo el mundo del internet.
              </p>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__backInRight">
              <p className={styles.paragraph}>
                A los 17 años hice una formación de programación y desarrollo de
                aplicaciones web, aprendí muchas de las tecnologías que se usan
                en el día a día de los programadores: HTML, CSS, JavaScript,
                también aprendí a como planificar, organizarme y desarrollar
                proyectos.
              </p>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__backInLeft">
              <p className={styles.paragraph}>
                Por cuenta propia aprendí durante 3 meses Laravel 8, desarrollé
                una pequeña web autoadministrable. Además, por mi alta
                curiosidad decidí pasarme a desarrollo mobile, desarrollando
                pequeñas interfaces, consumiendo datos de una API pública,
                clonando algunas de las interfaces como Netflix, Spotify, Amazon
                para poder potenciar mis habilidades como desarrollador.
              </p>
            </AnimationOnScroll>
          </div>
          <Image
            src="https://jusapp.s3.eu-central-1.amazonaws.com/aboutme.jpg"
            alt="justice velasco"
            className={styles.image}
          />
        </div>
      </section>
    </article>
  );
}

export default AboutMe;
