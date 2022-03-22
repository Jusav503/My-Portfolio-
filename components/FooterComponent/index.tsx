import React, {useState} from "react";
import { useTransition, animated, config } from "@react-spring/web";
import styles from "./styles.module.css"

function Toggle() {
  const [toggle, set] = useState(false);
  const transitions = useTransition(toggle, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: toggle,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!toggle),
  });
  return transitions(({ opacity }, item) =>
    item ? (
      <animated.div        
        className={styles.toggle}
        style={{
          opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
        }}
      >
        🙂
      </animated.div>
    ) : (
      <animated.div
        className={styles.toggle}
        style={{
          opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
        }}
      >
        😉
      </animated.div>
    )
  );
}

function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <span className={styles.footerTitle}>Justice Velasco</span>
      <Toggle/>
    </footer>
  )
}

export default FooterComponent;
