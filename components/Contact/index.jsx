import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./styles.module.css";
import { Textarea, TextInput, Group, Button, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ButtonLink } from "../atoms";

function Contact() {
  const [opened, setOpened] = useState(false);

  const sendEmail = (e) => {
    emailjs
      .send("service_8sfs6ia", "template_3pi70wj", e, "c0HBqU-uiI-cDWy3E")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.reset();
  };
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <div className={styles.container}>
      <section className={styles.contactContainer}>
        <Box mx="auto" className={styles.formContainer}>
          <h1>¡Hablemos!</h1>
          <form onSubmit={form.onSubmit(sendEmail)}>
            <TextInput
              name="name"
              label="Nombre"
              required
              placeholder="Escribe tu nombre..."
              {...form.getInputProps("name")}
              styles={{
                label: { color: "white" },
                input: { backgroundColor: "#1b1b1b", color: "white" },
              }}
            />
            <TextInput
              name="email"
              label="Correo electrónico"
              placeholder="ejemplo@email.com"
              required
              style={{ margin: "15px 0" }}
              {...form.getInputProps("email")}
              styles={{
                label: { color: "white" },
                input: { backgroundColor: "#1b1b1b", color: "white" },
              }}
            />
            <Textarea
              name="message"
              label="Mensaje"
              placeholder="Mensaje..."
              required
              {...form.getInputProps("message")}
              styles={{
                label: { color: "white" },
                input: { backgroundColor: "#1b1b1b", color: "white" },
              }}
            />
            <button type="submit" className={styles.button}>
              Enviar
            </button>
          </form>
        </Box>

        <div className={styles.logoContent}>
          <div
            style={{
              background: "#171B22",
              borderRadius: "50%",
              boxShadow: "0px 5px 10px -5px #171B22",
            }}
          >
            <ButtonLink link="https://github.com/Jusav503">
              <BsGithub color="white" />
            </ButtonLink>
          </div>

          <div
            style={{
              background: "#2572B0",
              borderRadius: "50%",
              marginLeft: "20px",
              marginRight: "20px",
              boxShadow: "0px 5px 10px -5px #2572B0",
            }}
          >
            <ButtonLink link="https://www.linkedin.com/in/justice-velasco/">
              <BsLinkedin color="white" />
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
