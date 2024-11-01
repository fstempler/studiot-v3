import './styles/home.css'

//Components
import Hero from '../Components/Hero/Hero'
import Slider from '../Components/Slider/Slider'
import BrandSection from '../Components/BrandSection/BrandSection'
import RecordSection from '../Components/RecordSection/RecordSection'
import AlgorithmSection from '../Components/AlgorithmSection/AlgorithmSection'
import CreativitySection from '../Components/CreativitySection/CreativitySection'
import ServicesSection from '../Components/ServiceSection/ServicesSection'
import StrategySection from '../Components/StrategySection/StrategySection'
import DesignersSection from '../Components/DesignersSection/DesignersSection'
import ReactionSection from '../Components/ReactionsSection/ReactionSection'
import SuccessSection from '../Components/SuccessSection/SuccessSection'
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
        <BrandSection />
        <RecordSection />
        <AlgorithmSection />
        <Slider />
        <CreativitySection />
        <ServicesSection pricingSectionRef={pricingSectionRef}/>
        <StrategySection />
        <DesignersSection />
        <ReactionSection />
        <Slider />
        <SuccessSection />
        </>
    )
}

export default Home