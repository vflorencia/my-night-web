import React from 'react';
import FaqItem from './FaqItem';

const FaqSection = () => {
  const faqData = [
    {
      question: '¿Cómo puedo comprar entradas para un evento?',
      answer: {
        description: [
          'Comprar entradas en MY NIGHT es fácil. Solo sigue estos pasos:',
          "1 - Explora la lista de eventos y elige el que te interese.",
          "2 - Selecciona la cantidad de entradas que deseas comprar.",
          "3 - Completa el proceso de pago de forma segura.",
          "4 - Recibirás tus entradas por correo electrónico y también estarán disponibles en tu cuenta.",
        ],
      },
    },
    {
      question: '¿Puedo cancelar o reembolsar mi compra?',
      answer: {
        description: [
            "Las políticas de cancelación y reembolso pueden variar según el evento y el organizador. En la mayoría de los casos, las entradas son no reembolsables. Te recomendamos revisar los términos y condiciones del evento antes de completar tu compra."
        ],
      },
    },
    {
        question: '¿Cómo accedo a mis entradas después de comprarlas?',
        answer: {
          description: [
              "Una vez que completes tu compra, recibirás un correo electrónico de confirmación con tus entradas adjuntas en formato PDF. También puedes acceder a tus entradas iniciando sesión en tu cuenta en MY NIGHT y yendo a la sección -Mis Entradas-."
          ],
        },
      },
      {
        question: '¿Qué métodos de pago aceptan?',
        answer: {
          description: [
              "Aceptamos una variedad de métodos de pago, incluyendo tarjetas de crédito y débito principales. Durante el proceso de compra, podrás seleccionar el método de pago que prefieras."
          ],
        },
      },
      {
        question: '¿Puedo transferir mis entradas a otra persona?',
        answer: {
          description: [
              "En la mayoría de los casos, las entradas son transferibles. Sin embargo, te recomendamos revisar las políticas de transferencia del evento específico o ponerte en contacto con nuestro equipo de soporte para obtener ayuda."
          ],
        },
      },
      {
        question: 'Tengo un problema técnico. ¿Qué debo hacer?',
        answer: {
          description: [
              "Si estás experimentando problemas técnicos, te sugerimos los siguientes pasos:",
              "1 - Asegúrate de tener la última versión de la aplicación instalada.",
              "2 - Intenta cerrar sesión y volver a iniciarla.",
              "3 - Borra la caché y las cookies de tu navegador si estás utilizando la versión web. Si el problema persiste, no dudes en contactar a nuestro equipo de soporte."
          ],
        },
      },
  ];

  return (
    <div className="faq-section">
      {faqData.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FaqSection;
