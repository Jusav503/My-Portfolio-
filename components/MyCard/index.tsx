import React, { useRef } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "react-use-gesture";
import styles from "./styles.module.css";

interface cardProps {
  image: string;
  alt: string;
}

function index(props:cardProps) {
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
        src={props.image} alt={props.alt}
      >
      </animated.img>
    </div>
  );
}

export default index;
