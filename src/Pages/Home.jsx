import './styles/home.css'

//Components
import Hero from '../Components/Hero/Hero'
import Slider from '../Components/Slider/Slider'
import BrandSection from '../Components/BrandSection/BrandSection'
import RecordSection from '../Components/RecordSection/RecordSection'
import AlgorithmSection from '../Components/AlgorithmSection/AlgorithmSection'
import CreativitySection from '../Components/CreativitySection/CreativitySection'
import ServicesSection from '../Components/PricingSection/ServicesSection'
import StrategySection from '../Components/StrategySection/StrategySection'
import DesignersSection from '../Components/DesignersSection/DesignersSection'
import ReactionSection from '../Components/ReactionsSection/ReactionSection'
import SuccessSection from '../Components/SuccessSection/SuccessSection'

const Home = () => {
    return (
        <>        
        <Hero />
        <Slider />
        <BrandSection />
        <RecordSection />
        <AlgorithmSection />
        <Slider />
        <CreativitySection />
        <ServicesSection />
        <StrategySection />
        <DesignersSection />
        <ReactionSection />
        <Slider />
        <SuccessSection />
        </>
    )
}

export default Home