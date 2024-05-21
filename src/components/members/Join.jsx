import React from "react";
import styled from "./Join.module.css";
import Button from "../helpers/button/Button";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";

const Join = () => {
  const { t } = useTranslation();

  const heading = (
    <>
      convenient. <span>safe.</span> affordable.
    </>
  );

  return (
    <Container>
      <section className={styled.join} id="membership">
        <div>
          <article className={styled.join__content}>
            <Heading className="medium--dark" heading={t("join.title")} />
            <p className="text--dark">{t("join.content")}</p>
            <p className="text--dark">{t("join.subcontent")} </p>
          </article>
          <a className={styled.primary} href="https://wa.me/+5491151164446">
            {t("join.contact")}
          </a>
        </div>

        <figure className={styled.join__image}>
          <img src={logo} alt="logo" />
        </figure>
      </section>
    </Container>
  );
};

export default Join;
