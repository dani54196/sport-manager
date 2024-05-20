import React from "react";
import Button from "../helpers/button/Button";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import styled from "./AboutIntro.module.css";

const AboutIntro = () => {
  const heading = (
    <>
      Fitness for <span>ETI</span>
    </>
  );
  return (
    <section className={styled.intro} id="about">
      <Container className={styled.intro__grid}>
        <article className={styled.intro__content}>
          <Heading className="medium" heading={heading} />
          <p className="text">
            la plataforma de inscripción y gestión de Eventos Deportivos más
            completa del mercado. Sin costos fijos. Administrá las
            inscripciones, pagos, acreditaciones y publicación de resultados en
            un solo lugar!
          </p>

          <p className="text">
            TEXTO DE RELLENO Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Eos magni, possimus, soluta voluptatem, voluptates mollitia
            necessitatibus error facilis tenetur excepturi in at laudantium
            quidem reiciendis?
          </p>
          <Button link="#membership" className="primary">
            Join Natura
          </Button>
        </article>
      </Container>
    </section>
  );
};

export default AboutIntro;
