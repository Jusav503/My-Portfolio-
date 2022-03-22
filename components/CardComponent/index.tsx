import React, { useRef, useState } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "react-use-gesture";
import styles from "./styles.module.css";
import { Button, Drawer } from "@mantine/core";

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
              leftIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-github"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#fff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              }
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
