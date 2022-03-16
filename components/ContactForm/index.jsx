import emailjs from "@emailjs/browser";

import React, { useRef } from "react";

function ContactForm() {
  {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_8sfs6ia",
          "template_3pi70wj",
          e.target,
          "c0HBqU-uiI-cDWy3E"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

    return (
      <form onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    );
  }
}

export default ContactForm;
