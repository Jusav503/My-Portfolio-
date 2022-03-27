import React from "react";
import styles from "./styles.module.css";

export function ButtonLink({link, children}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.buttonLink}
    >
      {children}
    </a>
  );
}
