import React, { useRef, useState } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import styles from "./styles.module.css";
import { Button, Drawer } from "@mantine/core";
import { BsGithub } from "react-icons/bs";

interface cardProps {
  image: string;
  altImage: string;
  name: string;
  description: string[];
  projectUrl: string;
}
function CardComponent(props: cardProps) {
  const [opened, setOpened] = useState(false);
  const domTarget = useRef(null);
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
    { domTarget, eventOptions: { passive: false } }
  );

  return (
    <div className={styles.container}>
      <animated.img
        ref={domTarget}
        src={props.image}
        alt={props.altImage}
        onClick={() => setOpened(true)}
        className={styles.card}
        style={{
          scale: to([scale, zoom], (s, z) => s + z),
        }}
      />
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        aria-labelledby="title"
        padding="xl"
        position="bottom"
        size="xl"
      >
        <h1 id="title">{props.name}</h1>
        <div className={styles.drawerContainer}>
          <div>
            <h2>Descripción</h2>
            <p className={styles.paragraph}>Description</p>
            <h2>Principales características:</h2>
            <ul>
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
