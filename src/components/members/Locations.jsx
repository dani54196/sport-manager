import React from "react";
import styled from "./Locations.module.css";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import { useTranslation } from "react-i18next";

const Locations = () => {
  const { t } = useTranslation();

  return (
    <section className={styled.locations} id="locations">
      <Container>
        <article className={styled.locations__content}>
          <Heading className="medium--dark" heading={t("price.title")} />
        </article>

        <div className={styled.locations__list}>
          {t("price.listPrices", { returnObjects: true }).map(
            (price, index) => (
              <article key={index} className={styled.item}>
                <div className={styled.small}>
                  <Heading heading={price.title} className="medium--dark"/>
                  <p className={styled.text}>{price.description}</p>
                </div>
              </article>
            )
          )}
        </div>

        <article className={styled.locations__content}>
          <p className="text--dark">{t("price.description")}</p>
        </article>
      </Container>
    </section>
  );
};

export default Locations;
