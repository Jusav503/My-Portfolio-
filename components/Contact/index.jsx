import React from "react";
import emailjs from "@emailjs/browser";
import styles from "./styles.module.css";
import { Textarea, TextInput, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ButtonLink } from "../atoms";

function Contact() {
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
    <div>
      <div style={{ height: "190px", overflow: "hidden" }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M-20.03,38.00 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "black" }}
          ></path>
        </svg>
      </div>

      <div className={styles.container}>
        <section className={styles.contactContainer}>
          <h1 className={styles.titleContainer}>¡Hablemos!</h1>

          <Box mx="auto" className={styles.formContainer}>
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

          <div className={styles.logoContainer}>
            <div
              style={{
                background: "#171B22",
                borderRadius: "50%",
                filter: "drop-shadow(0 0 0.40rem #171B22)"
              }}
            >
              <ButtonLink link="https://github.com/juusav">
                <BsGithub color="white" />
              </ButtonLink>
            </div>

            <div
              style={{
                background: "#2572B0",
                borderRadius: "50%",
                marginLeft: "20px",
                marginRight: "20px",
                filter: "drop-shadow(0 0 0.40rem #2572B0)"
              }}
            >
              <ButtonLink link="https://www.linkedin.com/in/justice-velasco/">
                <BsLinkedin color="white" />
              </ButtonLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
