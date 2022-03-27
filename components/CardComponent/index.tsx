import React, { useRef, useState } from "react";
import { useSpring, animated, to } from "react-spring";
import { useGesture } from "@use-gesture/react";
import styles from "./styles.module.css";
import { Button, Drawer, Modal } from "@mantine/core";
import { BsGithub, BsPlusSquare } from "react-icons/bs";

interface cardProps {
  image: string;
  altImage: string;
  logo: string;
  altLogo: string;
  name: string;
  description: string[];
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
          <p></p>

          <Button
            className={styles.cardButton}
            title="Ver más"
            leftIcon={<BsPlusSquare style={{ fontSize: 26 }} />}
          >
            Ver más
          </Button>
        </div>
      </animated.div>

      <Modal
        centered
        opened={opened}
        aria-labelledby="title"
        onClose={() => setOpened(false)}
        className={styles.modal}
      >
        <h1 id="title">{props.name}</h1>
        <div className={styles.drawerContainer}>
          <div>
            <h3>Principales características:</h3>
            <ul className={styles.list}>
              {props.description.map((r) => (
                <li key={r} style={{ color: "#3c3c3c" }}>
                  - {r}
                </li>
              ))}
            </ul>
            <Button
              title="Jusav503"
              className={styles.button}
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href={props.projectUrl}
              leftIcon={<BsGithub style={{ fontSize: 26 }} />}
            >
              Ver proyecto
            </Button>
          </div>
        </div>
      </Modal>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        aria-labelledby="title"
        padding="xl"
        position="bottom"
        size="xl"
        className={styles.drawer}
      >
        <h1 id="title">{props.name}</h1>
        <div className={styles.drawerContainer}>
          <div>
            <h3>Principales características:</h3>
            <ul className={styles.list}>
              {props.description.map((r) => (
                <li key={r} style={{ color: "#3c3c3c" }}>
                  - {r}
                </li>
              ))}
            </ul>

            <Button
              title="Jusav503"
              className={styles.button}
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href={props.projectUrl}
              leftIcon={<BsGithub style={{ fontSize: 26 }} />}
            >
              Ver proyecto
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default CardComponent;
