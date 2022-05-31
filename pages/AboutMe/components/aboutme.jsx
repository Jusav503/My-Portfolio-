import styles from "./styles.module.css";

export const Formation = () => {
  return (
    <article className={styles.articleContainer}>
      <div className={styles.articleTitle}>
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
        Pero sin duda, la formación más valiosa es la que tengo cada día, haciendo cursos en línea, realizando mejoras en mi código, viendo vídeos, leyendo documentación y participando en grupos de desarrolladores en línea.
      </p>
    </article>
  );
};

export const Skills = () => {
  return (
    <article className={styles.articleContainer}>
      <div className={styles.articleTitle}>
        <div style={{ display: "flex" }}>
          <h3>Habilidades</h3>
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
