import React, { useState } from 'react';
import './styles/contact.css';

const Contact = () => {
  // Definir el estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    projectType: '',
    email: '',
    phoneNumber: ''
  });

  // Actualizar el estado con los datos ingresados en el formulario
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const portalId = "YOUR_PORTAL_ID"; // Reemplaza con tu Portal ID de HubSpot
    const formId = "YOUR_FORM_ID"; // Reemplaza con tu Form ID de HubSpot

    try {
      const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fields: [
            { name: "firstname", value: formData.firstName },
            { name: "lastname", value: formData.lastName },
            { name: "company", value: formData.companyName },
            { name: "email", value: formData.email },
            { name: "phone", value: formData.phoneNumber },
            { name: "project_type", value: formData.projectType }
          ]
        })
      });

      if (response.ok) {
        alert("Formulario enviado con éxito a HubSpot.");
      } else {
        console.error("Error en el envío:", response);
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

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
        <div id='hubspotForm'></div>

        <form className='contact__Form' onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="text" className="form-control form__Input" id="firstName" value={formData.firstName} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="text" className="form-control form__Input" id="lastName" value={formData.lastName} onChange={handleChange} />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="companyName" className="form-label">Company Name</label>
            <input type="text" className="form-control form__Input" id="companyName" value={formData.companyName} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="projectType" className="form-label">I’m looking for someone to work with us on</label>
            <select className="form-select form__Input" id="projectType" value={formData.projectType} onChange={handleChange}>
              <option value="">Select an option...</option>
              <option value="DigitalAd">Digital Ad/Social Design</option>
              <option value="EmailDesign">Email Design</option>
              <option value="OrganicSocial">Organic Social Design</option>
              <option value="PresentationDesign">Presentation Design</option>
              <option value="PhotoVideo">Photo/Video Production</option>
              <option value="WebDesign">Web Design</option>
              <option value="MotionDesign">Motion Design</option>
              <option value="InfluencerMarketing">Influencer Marketing + Original Content</option>
              <option value="CampaignConcepting">Campaign Concepting</option>
            </select>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control form__Input" id="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <input type="text" className="form-control form__Input" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            </div>
          </div>

          <button type="submit" className="btn contactForm__CTA">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
