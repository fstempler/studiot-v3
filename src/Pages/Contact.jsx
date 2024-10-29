import { useEffect } from 'react'
import './styles/contact.css'

const Contact = () => {
    useEffect(() => {
        const script1 = document.createElement("Script");
        script1.src = "//js.hsforms.net/forms/embed/v2.js";
        script1.type = "text/javascript";
        script1.async = true;
        script1.charset = "utf-8";
        document.body.appendChild(script1);

        script1.onload = () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region: "na1",
                    portalId: "39636336",
                    formId: "25b801ce-88a8-4cbe-8346-0b56a35da5f6",
                    target: "#hubspotForm"
                });
            }
        };

        return () => {
            document.body.removeChild(script1);
        };
    }, [])

    return (
        <section className='contact__MainContainer'>
            <div className='active-background expand-container'></div>
            <div className='contact__Title-Container'>
                <h2 className='contact__Title'>We'll take it from here</h2>
            </div>

            <div className='contact__Text-Container'>
                <p className='contact__Text'>Your new growth partner is just a phone call away, Get in touch with us and open the door to a world of growth potential you didn’t know existed. Let’s work together to transform and accelerate your companies growth.</p>
            </div>
            <div className='contact__Form-Container'>
                <div id='hubspotForm'></div>
            </div>
        </section>
    )
}

export default Contact