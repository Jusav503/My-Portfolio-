import styles from "./styles.module.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

export const Formation = () => {
  return (
    <article className={styles.articleContainer}>
      <div className={styles.articleTitleContainer}>
        <div style={{ display: "flex" }}>
          <h3 className={styles.articleTitle}>Formación</h3>
        </div>
      </div>

      <p className={styles.paragraph}>
        A los 17 años hice una formación de programación y desarrollo de
        aplicaciones web, aprendí muchas de las tecnologías que se usan en el
        día a día de los programadores como HTML, CSS, JavaScript. También
        aprendí a como planificar, organizarme y desarrollar los proyectos.
        <br />
        Pero sin duda, la formación más valiosa es la que tengo cada día,
        haciendo cursos en línea, realizando mejoras en mi código, viendo
        vídeos, leyendo documentación y participando en grupos de
        desarrolladores en línea.
      </p>
    </article>
  );
};

export const StackTech = () => {
  return (
    <article className={styles.articleContainer}>
      <div className={styles.articleTitleContainer}>
        <div style={{ display: "flex" }}>
          <h3 className={styles.articleTitle}>Stack tecnológico</h3>
        </div>
      </div>

      <div className={styles.stackIconsContainer}>
      <div className={styles.stackIconsContent}>
          <SiJavascript className={styles.stackIcons} />
          <span>JavaScript</span>
        </div>
        <div className={styles.stackIconsContent}>
          <SiReact className={styles.stackIcons} />
          <span>ReactJS</span>
        </div>
        <div className={styles.stackIconsContent}>
          <SiHtml5 className={styles.stackIcons} />
          <span>HTML5</span>
        </div>
        <div className={styles.stackIconsContent}>
          <SiCss3 className={styles.stackIcons} />
          <span>CSS3</span>
        </div>
        <div className={styles.stackIconsContent}>
          <SiTailwindcss className={styles.stackIcons} />
          <span>TailwindCSS</span>
        </div>
      </div>
    </article>
  );
};

export const Skills = () => {
  return (
    <article className={styles.articleContainer}>
      <div className={styles.articleTitleContainer}>
        <div style={{ display: "flex" }}>
          <h3 className={styles.articleTitle}>Habilidades</h3>
        </div>
      </div>
      <p className={styles.paragraph}>
        Soy una persona autodidacta, estoy en constante aprendizaje, ya sea,
        viendo videos, realizando pequeños cursos en linea, incluso leyendo la
        documentación de vez en cuando.
        <br />
        Me considero capaz de aprender rápidamente el uso de nuevas tecnologías.
        La atención al detalle es parte de mi, al igual que siempre tratar de
        ser lo mas organizado posible en las carpetas, código y documentación.
      </p>
    </article>
  );
};

export const Certifications = () => {
  return <article></article>;
};
