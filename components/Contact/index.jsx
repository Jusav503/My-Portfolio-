import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./styles.module.css";
import { Textarea, TextInput, Group, Button, Modal } from "@mantine/core";
import { useForm } from "@mantine/form";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

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
        <a
          href="https://github.com/Jusav503"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.github}
        >
          <BsGithub color="white" />
        </a>
        <a
          href="https://www.linkedin.com/in/justice-velasco/"
          className={styles.linkendin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin color="white" />
        </a>

        <button onClick={() => setOpened(true)} className={styles.email}>
          <MdEmail color="white" />
        </button>
      </section>

      <Modal opened={opened} onClose={() => setOpened(false)} >
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
            <Button type="submit" color="white" >Enviar</Button>
          </Group>
        </form>
      </Modal>
    </div>
  );
}

export default Contact;
