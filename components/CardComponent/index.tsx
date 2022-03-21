import React, { useRef, useState } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "react-use-gesture";
import styles from "./styles.module.css";
import { Drawer } from "@mantine/core";

interface cardProps {
  image: string;
  altImage: string;
  name: string;
  description: string;
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
        className={styles.card}
        style={{
          scale: to([scale, zoom], (s, z) => s + z),
        }}
        src={props.image}
        alt={props.altImage}
        onClick={() => setOpened(true)}
      />
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title={props.name}
        padding="xl"
        size="xl"
      >
        {props.description}
      </Drawer>
    </div>
  );
}

export default CardComponent;
