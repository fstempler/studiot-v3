import './servicesSection.css'
//Images
import studioTLogo from '../../assets/studiot-logo.svg'
import takticalLogo from '../../assets/Taktical-Logo-White.png'
import studioTLogoBlack from '../../assets/studioT-logo-black.png'
import takticalLogoBlack from '../../assets/taktical-logo-black.png'

//components
import YellowCTA from '../yellowCTA/YellowCTA'
import { Link } from 'react-router-dom'
import PinkAccordion from '../PinkAccordion/PinkAccordion'
import PinkBtn from '../PinkBtn/PinkBtn'
import Popup from '../ServicePopup/ServicePopup'
import { useState } from 'react'
import ServicePopup from '../ServicePopup/ServicePopup'


   
const ServicesSection = ({ pricingSectionRef }) => {    
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [popupContent, setPopupContent] = useState({ title: '', img: {}, alt: '' })

    const handleOpenPopup = (content) => {
        setPopupContent(content);
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const [isPopupOpen2, setIsPopupOpen2] = useState(false)
    const [popupContent2, setPopupContent2] = useState({ title: '', img: {}, alt: '' })

    const handleOpenPopup2 = (content) => {
        setPopupContent2(content);
        setIsPopupOpen2(true);
    };

    const handleClosePopup2 = () => {
        setIsPopupOpen2(false);
    };

    const accordionData1 = [
        { id:1, title:'On-Demand Design', content:'Lorem' },
        { id:2, title:'Blog Content', content:'Lorem' },
        { id:3, title:'Ad Creative Copy', content:'Lorem' },
        { id:4, title:'Landing Pages', content:'Lorem' },
        { id:5, title:'AI imagery', content:'Lorem' },
        { id:6, title:'Presentation Design', content:'Lorem' },
        { id:7, title:'Photo / Video Production', content:'Lorem' },
        { id:8, title:'Email Design', content:'Lorem' }
    ];

    const accordionData2 = [
        { id:1, title:'Paid Social Media', content:'Lorem' },
        { id:2, title:'Search Engine Marketing', content:'Lorem' },
        { id:3, title:'SEO', content:'Lorem' },
        { id:4, title:'Organic Social', content:'Lorem' },
        { id:5, title:'Conversion Rate Optimization', content:'Lorem' },
        { id:6, title:'Marketplaces', content:'Lorem' },
        { id:7, title:'Marketplaces', content:'Lorem' }        
    ]

    return (
        <>
            <div className='servicesSection__MainContainer' ref={pricingSectionRef} id='pricingSection'>
                <div className='servicesSection__TitleContainer'>
                    <h2 className='servicesSection__Title'>Our Services</h2>
                    <Link to={"pricing"}><YellowCTA text={"Contact For Pricing"} /></Link>
                </div>
                <div className='servicesSection__ContentContainer'>
                    <div className='row'>
                        <div className='col-12 col-md-3 servicesSection__LeftColumn' id='accordionGroup'>

                            <div className='servicesSection__LeftList'>
                                <img className='servicesSection__Logo-StudioT' src={studioTLogo} alt='Studio T Logo' />
                                <PinkAccordion title={"(On-Demand Design)"} content={"Lorem"} id={"1"} parentId={"accordionGroup"}/>
                                <PinkAccordion title={"Blog Content"} content={"Lorem"} id={"2"} parentId={"accordionGroup"}/>
                                <PinkAccordion title={"Ad Creative Copy"} content={"Lorem"} id={"3"} parentId={"accordionGroup"}/>
                                <PinkAccordion title={"Landing Pages"} content={"Lorem"} id={"4"} parentId={"accordionGroup"}/>
                                <PinkAccordion title={"AI imagery"} content={"Lorem"} id={"5"} parentId={"accordionGroup"}/>
                                <PinkAccordion title={"Presentation Design"} content={"Lorem"} id={"6"} parentId={"accordionGroup"}/>
                                <PinkAccordion title={"Photo / Video Production"} content={"Lorem"} id={"7"} parentId={"accordionGroup"}/>
                                <PinkAccordion title={"Email Design"} content={"Lorem"} id={"8"} parentId={"accordionGroup"}/>
                            </div>

                        </div>
                        <div className='col-12 col-md-6 servicesSection__MiddleColumn'>                         

                            <div className='image-swap-container'>
                                <div className='image-swap'></div>
                            </div>
                            
                        </div>
                        <div className='col-12 col-md-3 servicesSection__RightColumn' id="accordionGroup2">                            
                            <div className='servicesSection__RightList'>
                                <img className='servicesSection__Logo-Taktical' src={takticalLogo} alt='Taktical Logo'/>
                                <PinkAccordion title={"Paid Social Media"} content={"Lorem"} id={"9"} parentId={"accordionGroup2"} />
                                <PinkAccordion title={"Search Engine Marketing"} content={"Lorem"} id={"10"} parentId={"accordionGroup2"} />
                                <PinkAccordion title={"SEO"} content={"Lorem"} id={"11"} parentId={"accordionGroup2"} />
                                <PinkAccordion title={"Organic Social"} content={"Lorem"} id={"12"} parentId={"accordionGroup2"} />
                                <PinkAccordion title={"Conversion Rate Optimization"} content={"Lorem"} id={"13"} parentId={"accordionGroup2"} />
                                <PinkAccordion title={"Marketplaces"} content={"Lorem"} id={"14"} parentId={"accordionGroup2"} />
                                <PinkAccordion title={"Email Marketing"} content={"Lorem"} id={"15"} parentId={"accordionGroup2"} />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* // CELPHONE */}
            <div className='services__Section-Cel'>
                <div className='services__SectionCel-Title-Container'>
                    <h2 className='services__SectionCel-Title'>Our Services</h2>
                </div>
                
                <div className='services__SectionCel-Btn-Container'>
                    <YellowCTA text={"Contact For Pricing"} />
                </div>

                <div className='services__SectionCel-PinkBtn-Container' onClick={ () => handleOpenPopup({ title: 'Services', img: studioTLogo, alt: 'Studio T Logo' })}>
                    <PinkBtn img={studioTLogoBlack} alt={"Studio T Logo"}/>
                </div>
                
                {isPopupOpen  && (
                    <ServicePopup
                        title={popupContent.title}
                        img={popupContent.img}
                        alt={popupContent.alt}
                        accordionData={accordionData1}
                        onClose={handleClosePopup}
                    />
                )}

                
                <div className='image-swap-container-cel'>
                    <div className='image-swap-cel'></div>
                </div>

                

                <div className='services__SectionCel-PinkBtn-Container' onClick={ () => handleOpenPopup2({ title: 'Services', img: takticalLogo, alt: 'Studio T Logo' })}>
                    <PinkBtn img={takticalLogoBlack} alt={"Studio T Logo"}/>
                </div>

                {isPopupOpen2  && (
                    <ServicePopup
                        title={popupContent2.title}
                        img={popupContent2.img}
                        alt={popupContent2.alt}
                        accordionData={accordionData2}
                        onClose={handleClosePopup2}
                    />
                )}
                
            </div>
        </>
        
    )
}

export default ServicesSection