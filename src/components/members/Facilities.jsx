import React from "react";
import styled from "./Facilities.module.css";
import running from "../../assets/running.mp4";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import { useTranslation } from "react-i18next";

const Facilities = () => {
  const { t } = useTranslation();
  const heading = (
    <>
      {t("facilities.title")} <span>{t("facilities.spam")}</span>
    </>
  );

  return (
    <section className={styled.facility} id="facilities">
      <video src={running} autoPlay loop muted />
      {/* Video by cottonbro on pexels */}
      <div className={styled.facility__overlay}>
        <Container>
          <article className={styled.facility__content}>
            <Heading className="medium" heading={heading} />
            <p className="text">{t("facilities.content")}</p>
          </article>
        </Container>
      </div>
    </section>
  );
};

export default Facilities;
