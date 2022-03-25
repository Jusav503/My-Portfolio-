import React from "react";
import emailjs from "@emailjs/browser";
import styles from "./styles.module.css";
import { Textarea, TextInput, Group, Button } from "@mantine/core";
import { useForm } from "@mantine/form";

function ContactForm() {
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
          placeholder="Contratado!"
          required
          {...form.getInputProps("message")}
        />
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </div>
  );
}

export default ContactForm;
