import './styles/home.css'

//Components
import Hero from '../Components/Hero/Hero'
import Slider from '../Components/Slider/Slider'
// import BrandSection from '../Components/BrandSection/BrandSection'
import StrategySection from '../Components/StrategySection/StrategySection'
import DesignersSection from '../Components/DesignersSection/DesignersSection'
import ReactionSection from '../Components/ReactionsSection/ReactionSection'
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
        <Slider />
        <BrandSectionSlider />
        <SuccessSection />
        <ReactionSection />        
        <StrategySection />
        <CreativeProcess />
        <DesignersSection />                
        <PlanSection />
        <Slider />
        
        </>
    )
}

export default Home