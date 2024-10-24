import './servicesSection.css'
//Images
import studioTLogo from '../../assets/studiot-logo.svg'
import takticalLogo from '../../assets/Taktical-Logo-White.png'
import servicesArrow from '../../assets/services-arrow.svg'
//components
import YellowCTA from '../yellowCTA/YellowCTA'
import { Link } from 'react-router-dom'
import PinkAccordion from '../PinkAccordion/PinkAccordion'

const ServicesSection = () => {
    return (
        
            <div className='servicesSection__MainContainer' id='pricingSection'>
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
                            <div className='servicesSection__MiddleColumn-Content'>
                                <img className='servicesSection__ArrowLeft' src={servicesArrow} alt='Arrow' />
                                <h2 className='servicesSection__MiddleColumn-Title'>Brandformance</h2>
                                <img className='servicesSection__ArrowRight' src={servicesArrow} alt='Arrow' />
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
        
    )
}

export default ServicesSection