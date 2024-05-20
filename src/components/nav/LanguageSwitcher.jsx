import React from "react";
import styled from "./Footer.module.css";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.language === "en"
      ? i18n.changeLanguage("es")
      : i18n.changeLanguage("en");
  };

  return (
    <button className={styled.button} onClick={changeLanguage}>
      {i18n.language === "en" ? "Cambiar a Español" : "Change to English"}
    </button>
  );
}

export default LanguageSwitcher;
