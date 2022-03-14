import React from "react";
import styles from "../styles/Home.module.css";

interface cardProps {
    image: string;
    alt: string;
}

function CardComponent(props:cardProps) {
  return (
    <section className={styles.card}>
      <img
        src={props.image}
        alt={props.alt}
        className={styles.cardImage}
      />
    </section>
  );
}

export default CardComponent;
