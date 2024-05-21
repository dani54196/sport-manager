import React from "react";
import styled from "./ProgramsList.module.css";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import { useTranslation } from "react-i18next";

const ProgramsList = () => {
  const { t } = useTranslation();

  return (
    <section className={styled.programs} id="classes">
      <Container>
        <article className={styled.programs__content}>
          <Heading className="medium" heading={t("services.subtitle")} />
        </article>
        <article>
          <div className={styled.programs__list}>
            {t("services.listServices", { returnObjects: true }).map(
              (service, index) => (
                <article key={index} className={styled.item}>
                  <div className={styled.small}>
                    <Heading heading={service.title} />
                    <p className={styled.text}>{service.content}</p>
                  </div>
                </article>
              )
            )}
          </div>
        </article>
        <article>
          <p className={styled.text}>
            {t("services.additional")}
          </p>
        </article>
      </Container>
    </section>
  );
};

export default ProgramsList;
