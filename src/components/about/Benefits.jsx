import React from "react";
import styled from "./Benefits.module.css";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import Button from "../helpers/button/Button";

const Benefits = () => {
  const heading = (
    <>
      <span>Fácil</span> de Usar e Intuitivo
    </>
  );
  return (
    <section className={styled.benefits__container}>
      <div className={styled.benefits}>
        <Container className={styled.benefits__content}>
          <article className={styled["benefits__content--intro"]}>
            <Heading className="medium" heading={heading} />
            <p className="text">
              Nuestro software es fácil de usar e intuitivo, diseñado para que
              cualquiera pueda gestionar inscripciones sin complicaciones. La
              interfaz es clara y sencilla. Además, puedes probar nuestra demo
              gratuita y descubrir lo eficiente que es nuestro sistema. Mejora
              la organización de tu evento deportivo con nuestra plataforma
              intuitiva y fácil de usar.
            </p>
            <Button link="#locations" className="primary">
              See Locations
            </Button>
          </article>
        </Container>

        <figure className={styled.benefits__image}>
          {/* <img
            src="https://images.unsplash.com/photo-1539794830467-1f1755804d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="A woman stretching her arms"
          /> */}
        </figure>
      </div>
    </section>
  );
};

export default Benefits;
