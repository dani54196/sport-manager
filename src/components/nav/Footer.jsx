import React from "react";
import styled from "./Footer.module.css";
import { HashLink as Link } from "react-router-hash-link";
import Container from "../helpers/wrapper/Container";
import Heading from "../helpers/heading/Heading";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "./LanguageSwitcher";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer className={styled.footer__container}>
        <Container className={styled.footer}>
          <ul className={styled.footer__links}>
            <Heading className="small--dark" heading={t("footer.language")} />
            <LanguageSwitcher />
            {/* <li>
            <Link smooth to="#home">
              Home
            </Link>
          </li>

          <li>
            <Link smooth to="#about">
              About
            </Link>
          </li>

          <li>
            <Link smooth to="#programs">
              Programs
            </Link>
          </li>

          <li>
            <Link smooth to="#facilities">
              Facilities
            </Link>
          </li>

          <li>
            <Link smooth to="#locations">
              Locations
            </Link>
          </li> */}
          </ul>

          <article>
            <Heading className="small--dark" heading={t("footer.contact")} />
            <ul className={styled.footer__contact}>
              <div className={styled["footer__contact--info"]}>
                <h3>Email</h3>
                <li>
                  <p>Software of South</p>
                  <a href="mailto:softwareofsouth@gmail.com">
                    <p>softwareofsouth@gmail.com</p>
                  </a>
                </li>
              </div>

              <div className={styled["footer__contact--info"]}>
                <h3>{t("footer.phone")}</h3>
                <li>
                  <p>Software of South</p>
                  <a href="https://wa.me/+5491151164446" target="_blank">
                    +54 9 11 5116-4446{" "}
                  </a>
                </li>
              </div>
            </ul>
          </article>

          <div className={styled.footer__icons}>
            <Heading className="small--dark" heading={t("footer.social")} />
            <div className={styled["footer__icons--icons"]}>
              <a
                href="https://www.instagram.com/softwareofsouth/"
                target="_blank"
              >
                <FaInstagramSquare size={35} color="var(--secondary)" />
              </a>
              <a href="http://x.com/softwareofsouth" target="_blank">
                <FaTwitterSquare size={35} color="var(--secondary)" />
              </a>
              <a
                href="http://https://www.facebook.com/profile.php?id=61559511449222"
                target="_blank"
              >
                <FaFacebookSquare size={35} color="var(--secondary)" />
              </a>
            </div>
          </div>
        </Container>

        <ul className={styled.footer__logo}>
          <Heading className="small" heading="Sport Manager" />
          <li>
            <a target="_blank" href="https://south.software" rel="noreferrer">
              Designed & Developed by Software of South
            </a>
          </li>
        </ul>
        <p className={styled.copyright}>Sport Manager 2024 ©</p>
      </footer>
    </>
  );
};

export default Footer;
