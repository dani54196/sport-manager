import React from "react";
import Button from "../helpers/button/Button";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import styled from "./AboutIntro.module.css";
import { useTranslation } from "react-i18next";

const AboutIntro = () => {
  const { t } = useTranslation();
  const heading = <>¿Por Qué Usar Nuestro Software?</>;
  return (
    <section className={styled.intro} id="about">
      <Container className={styled.intro__grid}>
        <article className={styled.intro__content}>
          <Heading className="medium" heading={heading} />
          <p className="text--dark bold">
            Nuestro software de inscripciones resuelve todas tus necesidades de
            organización de eventos deportivos. Simplifica el registro, la
            gestión y la acreditación de participantes, permitiéndote
            concentrarte en el evento. Ofrecemos una solución completa, desde la
            presentación del evento hasta la publicación de resultados. Olvídate
            de los problemas logísticos y administrativos; nosotros nos
            encargamos de todo para que tu evento sea un éxito.
          </p>
          {/* <Button link="#membership" className="primary">
            Join Natura
          </Button> */}
        </article>
      </Container>
    </section>
  );
};

export default AboutIntro;
