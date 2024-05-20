import React from "react";
import styled from "./Benefits.module.css";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import Button from "../helpers/button/Button";

const Benefits = () => {
  const heading = (
    <>
      building <span>confidence.</span> building fitness.
    </>
  );
  return (
    <section className={styled.benefits__container}>
      <div className={styled.benefits}>
        <Container className={styled.benefits__content}>
          <article className={styled["benefits__content--intro"]}>
            <Heading className="medium" heading={heading} />
            <p className="text">
              Un Sistema de Gestión de Eventos Deportivos es una plataforma
            </p>

            <p className="text">
              Facil de usar, Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Delectus autem cupiditate, iste sequi laudantium dolorum!{" "}
            </p>
            <Button link="#locations" className="primary">
              See Locations
            </Button>
          </article>
        </Container>

        <figure className={styled.benefits__image}>
          <img
            src="https://images.unsplash.com/photo-1539794830467-1f1755804d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="A woman stretching her arms"
          />
        </figure>
      </div>
    </section>
  );
};

export default Benefits;
