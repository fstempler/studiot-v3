import { useEffect } from "react";
import "./styles/calendly.css";

const Calendly = () => {

    useEffect (() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="calendly__Container">
            <h1 className="calendly__Title">Book A Call</h1>
            <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/taktical-jason/discovery-call" 
                style={{ minwidth: '320px', height:'700px' }} >           
            </div>
        </div>


    )
}

export default Calendly;