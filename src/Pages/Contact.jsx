import React, { useEffect } from 'react';
import './styles/contact.css';

const Contact = () => {
  useEffect(() => {
    // Crear el script de HubSpot y agregarlo al DOM
    const script = document.createElement('script');
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.async = true;

    // Cargar el formulario cuando el script termine de cargarse
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "39636336",
          formId: "5eff6d59-fab4-4c9b-97da-3f0b573b93f9",
          target: "#hubspotForm"
        });
      }
    };

    // Añadir el script al body del documento
    document.body.appendChild(script);

    // Limpiar el script al desmontar el componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className='contact__MainContainer'>
      <div className='active-background expand-container'></div>
      <div className='contact__Title-Container'>
        <h2 className='contact__Title'>We'll take it from here</h2>
      </div>
      <div className='contact__Text-Container'>
        <p className='contact__Text'>Your new growth partner is just a phone call away...</p>
      </div>

      <div className='contact__Form-Container'>
        {/* Aquí es donde se insertará el formulario de HubSpot */}
        <div id='hubspotForm'></div>
      </div>
    </section>
  );
}

export default Contact;
