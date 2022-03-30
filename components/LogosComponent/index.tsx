import React from "react";
import styles from "./styles.module.css"
import { Image } from "@mantine/core";

function LogosComponent() {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logoContent}>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <Image
            src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
            alt="logo react"
            className={styles.logo}
          />
        </a>
        <a href="https://mantine.dev/" target="_blank" rel="noreferrer">
          <Image
            src="https://jusapp.s3.eu-central-1.amazonaws.com/mantine.png"
            alt="mantine logo"
            style={{ width: 60, margin: 15 }}
          />
        </a>
        <a href="https://react-spring.io/" target="_blank" rel="noreferrer">
          <Image
            src="https://seeklogo.com/images/R/react-spring-logo-757E1EF5B5-seeklogo.com.png"
            alt="react spring logo"
            style={{ width: 55, margin: 15 }}
          />
        </a>
      </div>
    </div>
  );
}

export default LogosComponent;
