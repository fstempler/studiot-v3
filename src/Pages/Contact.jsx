import { useEffect } from 'react'
import './styles/contact.css'

const Contact = () => {

    //HUBSPOT CONTACT FORM
    // useEffect(() => {
    //     const script1 = document.createElement("Script");
    //     script1.src = "//js.hsforms.net/forms/embed/v2.js";
    //     script1.type = "text/javascript";
    //     script1.async = true;
    //     script1.charset = "utf-8";
    //     document.body.appendChild(script1);

    //     script1.onload = () => {
    //         if (window.hbspt) {
    //             window.hbspt.forms.create({
    //                 region: "na1",
    //                 portalId: "39636336",
    //                 formId: "25b801ce-88a8-4cbe-8346-0b56a35da5f6",
    //                 target: "#hubspotForm"
    //             });
    //         }
    //     };

    //     return () => {
    //         document.body.removeChild(script1);
    //     };
    // }, [])

    return (
        <section className='contact__MainContainer'>
            <div className='active-background expand-container'></div>
            <div className='contact__Title-Container'>
                <h2 className='contact__Title'>We'll take it from here</h2>
            </div>

            <div className='contact__Text-Container'>
                <p className='contact__Text'>Your new growth partner is just a phone call away, Get in touch with us and open the door to a world of growth potential you didn’t know existed. Let’s work together to transform and accelerate your companies growth.</p>
            </div>

            {/* HUBSPOT CONTACT FORM */}
            <div className='contact__Form-Container'>
                <div id='hubspotForm'></div>

                <form className='contact__Form'>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">
                          First Name
                        </label>
                        <input type="text" className="form-control form__Input" id="firstName" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">
                          Last Name
                        </label>
                        <input type="text" className="form-control form__Input" id="lastName" />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="companyName" className="form-label">
                        Company Name
                      </label>
                      <input type="text" className="form-control form__Input" id="companyName" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="projectType" className="form-label">
                          I’m looking for someone to work with us on
                        </label>
                        <select className="form-select form__Input" id="projectType">
                          <option value="">Select an option...</option>
                          <option value="DigitalAd">Digital Ad/Social Design</option>
                          <option value="EmailDesign">Email Design</option>
                          <option value="OrganicSocial">Organic Social Design</option>
                          <option value="PresentationDesign">Presentation Design</option>
                          <option value="PhotoVideo">Photo/Video Production</option>
                          <option value="WebDesign">Web Design</option>
                          <option value="MotionDesign">Motion Design</option>
                          <option value="InfluencerMarketing">Influencer marketing + Original Organic Content</option>
                          <option value="CampaignConcepting">Campaign Concepting</option>
                        </select>
                    </div>              

                    

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input type="email" className="form-control form__Input" id="email" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="phoneNumber" className="form-label form__Input">
                          Phone number
                        </label>
                        <input type="text" className="form-control form__Input" id="phoneNumber" />
                      </div>
                    </div>

                    <button type="submit" className="btn contactForm__CTA">
                        Submit
                    </button>
                </form>
            </div>
            
        </section>
    )
}

export default Contact