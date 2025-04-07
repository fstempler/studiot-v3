import './styles/home.css'

//Components
import Hero from '../Components/Hero/Hero'
import Slider from '../Components/Slider/Slider'
import VsSection from '../Components/VsSection/VsSection'
import DesignersSection from '../Components/DesignersSection/DesignersSection'
import StatsSection from '../Components/StatsSection/StatsSections'
import SuccessSection from '../Components/SuccessSection/SuccessSection'
import CreativeProcess from '../Components/CreativeProcess/CreativeProcess'
import PlanSection from '../Components/PlansSection/PlansSection'
import BrandSectionSlider from '../Components/BrandSectionSlider/BrandSectionSlider'
import { useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const Home = () => {
    const location = useLocation();
    const pricingSectionRef = useRef(null);

    useEffect(() => {
        if (location.hash === "#pricingSection" && pricingSectionRef.current) {
            setTimeout(() => {
                pricingSectionRef.current.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    }, [location]);

    return (
        <>        
        <Hero />
        <VsSection />
        <BrandSectionSlider />
        <StatsSection />
        <SuccessSection />
        
        
        <CreativeProcess />
        <PlanSection />
        <Slider />
        <DesignersSection />  
        {/* Contact Section*/}
        
        
        
        </>
    )
}

export default Home