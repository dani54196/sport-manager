import React from "react";
import styled from "./ProgramsIntro.module.css";
import Container from "../helpers/wrapper/Container";
import womanRunning from "../../assets/woman_running.png";
import Heading from "../helpers/heading/Heading";
import Button from "../helpers/button/Button";

const ProgramsIntro = () => {
  const heading = (
    <>
      Fácil de usar, intuitivo y con una <span>demo disponible</span>
    </>
  );

  return (
    <section className={styled.intro} id="programs">
      <Container className={styled.intro__content}>
        <article className={styled["intro__content--info"]}>
          <Heading className="medium" heading={heading} />
          <p className="text">
            Nuestro software de inscripciones resuelve todas tus necesidades de
            organización de eventos deportivos. Simplifica el registro, la
            gestión y la acreditación de participantes, permitiéndote
            concentrarte en el evento. Ofrecemos una solución completa, desde la
            presentación del evento hasta la publicación de resultados. Olvídate
            de los problemas logísticos y administrativos; nosotros nos
            encargamos de todo para que tu evento sea un éxito.
          </p>
          <Button className="primary" link="#classes">
            See Programs
          </Button>
        </article>

        <figure className={styled["intro__content--image"]}>
          <img src={womanRunning} alt="Woman running in gym attire" />
        </figure>
      </Container>
    </section>
  );
};

export default ProgramsIntro;
