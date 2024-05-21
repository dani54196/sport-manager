import React from "react";
import Button from "../helpers/button/Button";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import styled from "./AboutIntro.module.css";
import { useTranslation } from "react-i18next";

const AboutIntro = () => {
  const { t } = useTranslation();
  return (
    <section className={styled.intro} id="about">
      <Container className={styled.intro__grid}>
        <article className={styled.intro__content}>
          <Heading className="medium" heading={t("about.title")} />
          <p className="text--dark bold">{t("about.content")}</p>
          {/* <Button link="#membership" className="primary">
            Join Natura
          </Button> */}
        </article>
      </Container>
    </section>
  );
};

export default AboutIntro;
