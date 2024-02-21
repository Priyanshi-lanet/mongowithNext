import React from "react";
import ContactForm from "../component/ContactForm";
import styles from "./contact.module.css";
const contact = () => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.contact_section}>
          <h2>
            We'd love to hear <span> from you </span>
          </h2>

          <ContactForm />
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.1357297773125!2d72.75709027564457!3d21.146996083706334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d80f5d96493%3A0x5f79790a213bd724!2sLuxuria%20Business%20Hub!5e0!3m2!1sen!2sin!4v1708411100959!5m2!1sen!2sin"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        className={styles.mapping}
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default contact;
