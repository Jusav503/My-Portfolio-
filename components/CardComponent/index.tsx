import React, { useRef, useState } from "react";
import { useSpring, animated, to } from "react-spring";
import { useGesture } from "@use-gesture/react";
import styles from "./styles.module.css";
import { Drawer, Modal } from "@mantine/core";
import { BsGithub, BsPlusSquare } from "react-icons/bs";

interface cardProps {
  image: string;
  altImage: string;
  logo: string;
  altLogo: string;
  name: string;
  description: string;
  features: string[];
  projectUrl: string;
}
function CardComponent(props: cardProps) {
  const [opened, setOpened] = useState(false);
  const target = useRef(null);
  const [{ zoom, scale }, api] = useSpring(() => ({
    scale: 1,
    zoom: 0,
  }));
  useGesture(
    {
      onMove: ({ dragging }) =>
        !dragging &&
        api({
          scale: 1.1,
        }),
      onHover: ({ hovering }) => !hovering && api({ scale: 1 }),
    },
    { target, eventOptions: { passive: false } }
  );

  return (
    <div className={styles.container}>
      <animated.div
        ref={target}
        onClick={() => setOpened(true)}
        className={styles.card}
        style={{
          scale: to([scale, zoom], (s, z) => s + z),
        }}
      >
        <img
          src={props.logo}
          alt={props.altLogo}
          className={styles.cardImage}
        />
        <div className={styles.content}>
          <p>{props.description}</p>

          <span className={styles.button} title="Ver más">
            <BsPlusSquare className={styles.buttonIcon} />
            Ver más
          </span>
        </div>
      </animated.div>

      <Modal
        centered
        opened={opened}
        aria-labelledby="title"
        onClose={() => setOpened(false)}
        className={styles.modal}
      >
        <div className={styles.modalContent}>
          <h1 id="title">{props.name}</h1>
          <h3>Principales características:</h3>
          <ul className={styles.list}>
            {props.features.map((r) => (
              <li key={r} style={{ color: "#3c3c3c" }}>
                - {r}
              </li>
            ))}
          </ul>
          <a
            title="Jusav503"
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
            href={props.projectUrl}
          >
            <BsGithub className={styles.buttonIcon} />
            Ver proyecto
          </a>
        </div>
      </Modal>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        aria-labelledby="title"
        padding="xl"
        position="bottom"
        size="xl"
        className={styles.drawerContainer}
      >
        <h1 id="title">{props.name}</h1>
        <div className={styles.drawerContent}>
          <div>
            <h3>Principales características:</h3>
            <ul className={styles.list}>
              {props.features.map((r) => (
                <li key={r} style={{ color: "#3c3c3c" }}>
                  - {r}
                </li>
              ))}
            </ul>
          </div>

          <a
            title="Jusav503"
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
            href={props.projectUrl}
          >
            <BsGithub className={styles.buttonIcon} />
            Ver proyecto
          </a>
        </div>
      </Drawer>
    </div>
  );
}

export default CardComponent;
