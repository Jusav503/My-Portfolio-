import React from "react";
import CardComponent from "../../components/CardComponent";
import styles from "./styles.module.css";
import projects from "../../data/projects";

function ProjectsArticle() {
  return (
    <article className={styles.projectsContainer}>
      <div className={styles.titleContainer}>
        <h2>Mis proyectos</h2>
      </div>

      <div className={styles.projectsMain}>
        <div className={styles.projectsContent}>
          {projects.map((project) => {
            return (
              <div key={project.id}>
                <CardComponent
                  image={project.image}
                  altImage={project.altImage}
                  name={project.name}
                  description={project.description}
                  projectUrl={project.projectUrl}
                  logo={project.logo}
                  altLogo={project.altLogo}
                  features={project.features}
                />
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default ProjectsArticle;
