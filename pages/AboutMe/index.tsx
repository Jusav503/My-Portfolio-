import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styles from "./styles.module.css";

function AboutMe() {
  return (
    <section className={styles.sectionMain}>
      <AnimationOnScroll animateIn="animate__zoomIn">
        <div style={{ borderBottom: "2px solid white" }}>
          <div style={{ display: "flex" }}>
            <h3>Formación</h3>
          </div>
        </div>

        <p className={styles.paragraph}>
          A los 17 años hice una formación de programación y desarrollo de
          aplicaciones web, aprendí muchas de las tecnologías que se usan en el
          día a día de los programadores como HTML, CSS, JavaScript. También
          aprendí a como planificar, organizarme y desarrollar los proyectos.
          <br />
          Por cuenta propia aprendí durante 3 meses Laravel 8, desarrollé una
          pequeña web autoadministrable. Además, por mi alta curiosidad decidí
          pasarme a desarrollo mobile, desarrollando pequeñas interfaces,
          consumiendo datos de una API pública, clonando algunas de las
          interfaces como Netflix, Spotify, Amazon para poder potenciar mis
          habilidades como desarrollador.
        </p>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__zoomIn">
        <div style={{ borderBottom: "2px solid white", }}>
          <div style={{ display: "flex" }}>
            <h3>Habilidades</h3>
          </div>
        </div>
        <p className={styles.paragraph}>
          Soy una persona autodidacta, estoy en constante aprendizaje, ya sea,
          viendo videos, realizando pequeños cursos en linea, inluso leyendo
          documentación.
          <br />
          Me considero capaz de aprender rápidamente el uso de nuevas
          tecnologías. La atención al detalle es parte de mi, al igual que
          siempre tratar de ser lo mas organizado posible en las carpetas,
          código y documentación.
        </p>
      </AnimationOnScroll>
    </section>
  );
}

export default AboutMe;
