import React from "react";
import { Image, Text } from "@mantine/core";
import styles from "./styles.module.css";

function Presentation() {
  return (
    <div className={styles.presentationContainer}>
      {/* <figure className={styles.logoContainer}>
        <Image
          src="https://jusapp.s3.eu-central-1.amazonaws.com/myPixel.png"
          alt="pixel Justice"
          className={styles.logo}
        />
      </figure> */}

      <div className={styles.content}>
        <h1 className={styles.mainTitle}>
          Hola mundo! <br />
          Soy Justice Velasco.
        </h1>
        <h2>Desarrollador web/mobile.</h2>
        <p>Soy una persona incontenible por aprender algo nuevo cada vez que enciendo el ordenador, hacer pequeñas cosas a lo grande es mi motivación.</p>
      </div>

      <div className={styles.image}>
        <Image
          src="https://jusapp.s3.eu-central-1.amazonaws.com/linkedin.jpg"
          alt="justice velasco"
        />
      </div>
    </div>
  );
}

export default Presentation;
