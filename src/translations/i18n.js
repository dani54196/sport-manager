import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          hero: {
            title: "Registration systems",
            subtitle:
              "Simplify organizing races, marathons, triathlons and more",
            content:
              "Our focus is on providing comprehensive and customized solutions for businesses and enterprises worldwide. We take pride in offering a full suite of services that span from design and implementation to maintenance and continuous growth of your digital applications and platforms.",
          },
          footer: {
            language: "Language",
            contact: "Contact us",
            phone: "Phone",
            social: "Social media",
          },
        },
      },

      es: {
        translation: {
          hero: {
            title: "Sistemas de inscripciones",
            subtitle:
              "Simplifica la organización de carreras, maratones, triatlones y más",
            content:
              "Nuestro enfoque está en proporcionar soluciones completas y personalizadas para empresas y negocios en todo el mundo. Nos enorgullece ofrecer un conjunto completo de servicios que abarcan desde el diseño y la implementación hasta el mantenimiento y el crecimiento continuo de tus aplicaciones y plataformas digitales.",
          },
          navbar: {
            home: "Inicio",
            about: "Acerca de",
            programs: "Servicios",
            facilities: "Instalaciones",
            contact: "Contacto",
          },
          footer: {
            language: "Idioma",
            contact: "Contactanos",
            phone: "Telefono",
            social: "Redes sociales",
          },
        },
      },
    },
  });

export default i18n;
