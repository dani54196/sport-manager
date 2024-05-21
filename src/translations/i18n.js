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
            button: "Request a demo",
          },
          about: {
            title: "Why use our services",
            content:
              "Our registration software solves all your sports event organization needs. Simplify participant registration, management, and accreditation, allowing you to focus on the event. We offer a complete solution, from event presentation to results publication. Forget about logistical and administrative problems; we take care of everything so that your event is a success.",
          },
          services: {
            title: "Easy to use and customizable",
            content:
              "Our registration software solves all your sports event organization needs. Simplify participant registration, management, and accreditation, allowing you to focus on the event. We offer a complete solution, from event presentation to results publication. Forget about logistical and administrative problems; we take care of everything so that your event is a success.",
            subtitle: "Services",
            listServices: [
              {
                title: "Registrations",
                content: "Easy-to-use system to register participants.",
              },
              {
                title: "Management and control panel",
                content:
                  "Complete management with different roles and search for registered participants.",
              },
              {
                title: "Accreditations",
                content: "Efficient handling of accreditations.",
              },
              {
                title: "Results publication:",
                content: "Publish the event results quickly and easily.",
              },
            ],
          },
          facilities: {
            title: "Everything You Need for Successful ",
            spam: "Sports Events",
            content:
              "Simplify registration, management, and results publication in one place.",
          },
          join: {
            title: "About Us",
            content:
              "We are excited to help you. We have the best developers and legal experts to carry out your projects and create your terms and conditions.",
            subcontent:
              "Let us transform the management of your sports events!",
            contact: "Send message",
          },
          price: {
            title: "Prices",
            listPrices: [
              {
                title: "Transfer the Service Cost to the Registration Price",
                description:
                  "This option allows event organizers to include the registration service cost directly in the price paid by participants. This way, organizers do not have to worry about the initial costs of the service.",
              },
              {
                title: "Full Service",
                description:
                  "This option includes a one-time payment that covers all the services necessary for event registration and management. It is a convenient option for unique events or those who prefer to pay everything upfront.",
              },
              {
                title: "Subscription",
                description:
                  "In addition to the monthly payment, we also offer annual subscription plans with discounts. This option is perfect for organizers planning multiple events throughout the year and want to take advantage of reduced prices.",
              },
              {
                title: "Shared Server and Subdomain",
                description:
                  "For those on a tighter budget, we offer a shared server and subdomain option. This allows organizers to use our shared infrastructure to reduce costs.",
              },
              {
                title: "Free for Free Races or Charity Benefits",
                description:
                  "We support charitable initiatives and free races by offering our service at no cost for these events. This includes all the basic features needed to manage registrations and the event",
              },
            ],
            description:
              "We provide invoices and accept all major credit cards to facilitate the payment process.",
          },
          navbar: {
            home: "Home",
            about: "About",
            programs: "Services",
            facilities: "Facilities",
            contact: "Contact",
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
            button: "Solicita una demo",
          },
          about: {
            title: "Por qué utilizar nuestros servicios",
            content:
              "Nuestro software de inscripciones resuelve todas tus necesidades de organización de eventos deportivos. Simplifica el registro, la gestión y la acreditación de participantes, permitiéndote concentrarte en el evento. Ofrecemos una solución completa, desde la presentación del evento hasta la publicación de resultados. Olvídate de los problemas logísticos y administrativos; nosotros nos encargamos de todo para que tu evento sea un éxito.",
          },
          services: {
            title: "Facil de usar y personalizable",
            content:
              "Nuestro software de inscripciones resuelve todas tus necesidades de organización de eventos deportivos. Simplifica el registro, la gestión y la acreditación de participantes, permitiéndote concentrarte en el evento. Ofrecemos una solución completa, desde la presentación del evento hasta la publicación de resultados. Olvídate de los problemas logísticos y administrativos; nosotros nos encargamos de todo para que tu evento sea un éxito.",
            subtitle: "Servicios",
            listServices: [
              {
                title: "Inscripciones",
                content: "Sistema fácil de usar para registrar participantes.",
              },
              {
                title: "Gestión y panel de control",
                content:
                  "Gestión completa con distintos roles y búsqueda de inscriptos.",
              },
              {
                title: "Acreditaciones",
                content: "Manejo eficiente de acreditaciones.",
              },
              {
                title: "Publicación de Resultados:",
                content:
                  "Publica los resultados del evento de manera rápida y sencilla.",
              },
            ],
          },
          facilities: {
            title: "Todo lo que Necesitas para Eventos Deportivos ",
            spam: "Exitosos",
            content:
              "Simplifica la inscripción, la gestión y la publicación de resultados en un solo lugar.",
          },
          join: {
            title: "Nosotros",
            content:
              "Estamos entusiasmados de ayudarte. Contamos con los mejores desarrolladores y expertos legales para llevar a cabo tus proyectos y crear tus términos y condiciones.",
            subcontent:
              "¡Déjanos transformar la gestión de tus eventos deportivos!",
            contact: "Enviar mensaje",
          },
          price: {
            title: "Precios",
            listPrices: [
              {
                title:
                  "Trasladar el Costo del Servicio al Precio de Inscripción",
                description:
                  "Esta opción permite que los organizadores de eventos incluyan el costo del servicio de inscripción directamente en el precio que pagan los participantes. De esta manera, los organizadores no tienen que preocuparse por los costos iniciales del servicio.",
              },
              {
                title: "Servicio Completo",
                description:
                  "Esta opción incluye un pago único que cubre todos los servicios necesarios para la inscripción y gestión del evento. Es una opción conveniente para eventos únicos o aquellos que prefieren pagar todo por adelantado.",
              },
              {
                title: "Suscripción",
                description:
                  "Además del pago mensual, también ofrecemos planes de suscripción anual con descuentos. Esta opción es perfecta para organizadores que planean múltiples eventos durante el año y desean aprovechar precios reducidos.",
              },
              {
                title: "Servidor Compartido y Subdominio",
                description:
                  "Para aquellos con un presupuesto más ajustado, ofrecemos una opción de servidor compartido y subdominio. Esto permite a los organizadores usar nuestra infraestructura compartida para reducir costos.",
              },
              {
                title: "Gratis para Carreras Gratuitas o Beneficios de Caridad",
                description:
                  "Apoyamos iniciativas benéficas y carreras gratuitas ofreciendo nuestro servicio sin costo alguno para estos eventos. Esto incluye todas las características básicas necesarias para gestionar las inscripciones y el evento.",
              },
            ],
            description:
              "Proporcionamos facturas y aceptamos todas las principales tarjetas de crédito para facilitar el proceso de pago.",
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
