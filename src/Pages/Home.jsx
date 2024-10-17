import './styles/home.css'

//Components
import Hero from '../Components/Hero/Hero'
import Slider from '../Components/Slider/Slider'
import BrandSection from '../Components/BrandSection/BrandSection'
import RecordSection from '../Components/RecordSection/RecordSection'
import AlgorithmSection from '../Components/AlgorithmSection/AlgorithmSection'
import CreativitySection from '../Components/CreativitySection/CreativitySection'

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
        </>
    )
}

export default Home