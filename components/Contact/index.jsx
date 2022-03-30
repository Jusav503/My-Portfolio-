import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./styles.module.css";
import { Textarea, TextInput, Group, Button, Modal } from "@mantine/core";
import { useForm } from "@mantine/form";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
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

        <div
          style={{
            background: "#B31C16",
            borderRadius: "50%",
            boxShadow: "0px 5px 10px -5px #B31C16",
          }}
        >
          <ButtonLink>
            <MdEmail color="white" onClick={() => setOpened(true)} />
          </ButtonLink>
        </div>
      </section>

      <Modal opened={opened} onClose={() => setOpened(false)}>
        <form onSubmit={form.onSubmit(sendEmail)}>
          <TextInput
            name="name"
            label="Nombre"
            required
            placeholder="Escribe tu nombre..."
            {...form.getInputProps("name")}
          />
          <TextInput
            name="email"
            label="Correo electrónico"
            placeholder="ejemplo@email.com"
            required
            {...form.getInputProps("email")}
          />
          <Textarea
            name="message"
            label="Mensaje"
            placeholder="Mensaje..."
            required
            {...form.getInputProps("message")}
          />
          <Group position="right" mt="md">
            <Button type="submit" color="#24292d">
              Enviar
            </Button>
          </Group>
        </form>
      </Modal>
    </div>
  );
}

export default Contact;
