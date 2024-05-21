import React from "react";
import styled from "./ProgramsIntro.module.css";
import Container from "../helpers/wrapper/Container";
import womanRunning from "../../assets/woman_running.png";
import Heading from "../helpers/heading/Heading";
import Button from "../helpers/button/Button";
import { useTranslation } from "react-i18next";

const ProgramsIntro = () => {
  const { t } = useTranslation();
  const heading = (
    <>
      Fácil de usar, intuitivo y con una <span>demo disponible</span>
    </>
  );

  return (
    <section className={styled.intro} id="programs">
      <Container className={styled.intro__content}>
        <article className={styled["intro__content--info"]}>
          <Heading className="medium" heading={t("services.title")} />
          <p className="text">
           {t("services.content")}
          </p>
          {/* <Button className="primary" link="#classes">
            See Programs
          </Button> */}
        </article>

        <figure className={styled["intro__content--image"]}>
          <img src={womanRunning} alt="Woman running in gym attire" />
        </figure>
      </Container>
    </section>
  );
};

export default ProgramsIntro;
