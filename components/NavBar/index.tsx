import { Burger, Drawer, Image } from "@mantine/core";
import React, { useState } from "react";
import styles from "./styles.module.css";

function NavBar() {
  const [opened, setOpened] = useState(false);
  return (
    <nav className={styles.container}>
      <figure className={styles.logoContainer}>
        <Image
          src="https://jusapp.s3.eu-central-1.amazonaws.com/myPixel.png"
          alt="pixel Justice"
          style={{ marginTop: "-7px" }}
        />
      </figure>

      <div className="hidden md:block">
        <ul>
          <li>Inicio</li>
          <li>Sobre mí</li>
          <li>Proyectos</li>
          <li>Contacto</li>
        </ul>
      </div>

      <div className="block md:hidden">
        <Burger opened={opened} onClick={() => setOpened(true)} color="white" />
      </div>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="xl"
        styles={{
          drawer: { backgroundColor: "#1b1b1b" },
        }}
      >
        <div style={{ color: "red" }}>
          <ul>
            <li>Inicio</li>
            <li>Sobre mí</li>
            <li>Proyectos</li>
            <li>Contacto</li>
          </ul>
        </div>
      </Drawer>
    </nav>
  );
}

export default NavBar;
