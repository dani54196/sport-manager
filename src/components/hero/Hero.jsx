import React from "react";
import styled from "./Hero.module.css";
import Navbar from "../nav/Navbar";
import Container from "../helpers/wrapper/Container";
import Heading from "../helpers/heading/Heading";
import Button from "../helpers/button/Button";

import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const heading = (
    <>
      Sport <span> Manage</span>
    </>
  );

  return (
    <section className={styled.hero} id="home">
      <Container>
        <Navbar />
        <div className={styled["hero__content--container"]}>
          <article className={styled.hero__content}>
            <Heading className="large" heading={heading} />
            <p className="text">{t("hero.title")}</p>
            <p className="text">{t("hero.subtitle")}</p>
            <Button className="primary" link="#membership">
              Solicita una demo
            </Button>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
