import React from "react";
import { Image } from "@mantine/core";

import styles from "./styles.module.css";

function Presentation() {
  return (
    <div className={styles.presentationContainer}>
      <div className={styles.content}>
        <h1 className="font-manrope mt-[4px] text-[40px] text-transparent font-bold bg-gradient-to-r from-purple-600 via-cyan-400 to-pink-500 bg-clip-text w-max leading-[48px] md:text-[64px] md:leading-[86px] xl:text-[90px] lg:mx-0 lg:text-left lg:leading-[110px]">
          Justice Velasco
        </h1>
        <h2>Desarrollador web/mobile.</h2>
        <p>
          Soy una persona incontenible por aprender algo nuevo cada vez que
          enciendo el ordenador, hacer pequeñas cosas a lo grande es mi
          motivación.
        </p>
      </div>

      <div className={styles.image}>
        <div
          className="p-[2px] bg-gradient-to-tr from-violet-700 to-rose-500"
        >
          <Image
            src="https://jusapp.s3.eu-central-1.amazonaws.com/linkedin.jpg"
            alt="justice velasco"
          />
        </div>
      </div>
    </div>
  );
}

export default Presentation;
