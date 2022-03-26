import React from "react";
import "animate.css/animate.min.css";
import { Image } from "@mantine/core";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styles from "./styles.module.css";

function AboutMe() {
  return (
    <div className={styles.aboutMe}>
      <h1 className={styles.mainTitle}>Acerca de mi</h1>

      <section className={styles.sectionMain}>
        <div className={styles.gridContainer}>
          <div>
            <AnimationOnScroll animateIn="animate__bounceIn">
              <p className={styles.paragraph}>
                ¡Hey! Soy Justice Velasco, programador web/mobile con
                React. El amor por los ordenadores y la tecnología comenzó a
                los 6 años de edad, con un ordenador sobre mesa que tenía en
                casa donde yo pasaba horas descubriendo el mundo del internet.
              </p>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__bounceIn">
              <h3>Formación</h3>
              <p className={styles.paragraph}>
                A los 17 años hice una formación de programación y desarrollo de
                aplicaciones web, aprendí muchas de las tecnologías que se usan
                en el día a día de los programadores como HTML, CSS, JavaScript.
                También aprendí a como planificar, organizarme y desarrollar los
                proyectos.
              </p>
            
              <p className={styles.paragraph}>
                Por cuenta propia aprendí durante 3 meses Laravel 8, desarrollé
                una pequeña web autoadministrable. Además, por mi alta
                curiosidad decidí pasarme a desarrollo mobile, desarrollando
                pequeñas interfaces, consumiendo datos de una API pública,
                clonando algunas de las interfaces como Netflix, Spotify, Amazon
                para poder potenciar mis habilidades como desarrollador.
              </p>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__bounceIn">
              <h3>Habilidades</h3>
              <p className={styles.paragraph}>Soy una persona autodidacta, estoy en constante aprendizaje, ya sea, viendo videos, realizando pequeños cursos en linea, inluso leyendo documentación. 
              <br/>
              Me considero capaz de aprender rápidamente el uso de nuevas tecnologías. La atención al detalle es parte de mi, al igual que siempre tratar de ser lo mas organizado posible en las carpetas, código y documentación.</p>
            </AnimationOnScroll>
          </div>
          <Image
            src="https://jusapp.s3.eu-central-1.amazonaws.com/aboutme.jpg"
            alt="justice velasco"
            radius="md"
            className={styles.image}
          />
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
