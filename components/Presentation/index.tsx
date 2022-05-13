import React from "react";
import { Image } from "@mantine/core";

import styles from "./styles.module.css";

function Presentation() {
  return (
    <div className="paddingContainer">
      <div className={styles.presentationContainer}>
        <div className={styles.content}>
          <h1 className={styles.mainTitle} data-text="Justice Velasco" >Justice Velasco</h1>
          <h2>Desarrollador web/mobile.</h2>
          <p>
            Soy una persona incontenible por aprender algo nuevo cada vez que
            enciendo el ordenador, hacer pequeñas cosas a lo grande es mi
            motivación.
          </p>
        </div>
      
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <Image
              src="https://jusapp.s3.eu-central-1.amazonaws.com/linkedin.jpg"
              alt="justice velasco"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
