import './styles/caseStudies.css'
//Components
import YellowCTA from '../Components/yellowCTA/YellowCTA'
import Slider from '../Components/Slider/Slider'
import CaseStudyMain from '../Components/CaseStudiesMain/CaseStudyMain'
import CaseStudyImgSection from '../Components/CaseStudiesImgSection/caseStudyImgSection'
import CaseStudyMetrics from '../Components/CaseStudyMetrics/CaseStudyMetrics'
import { Link } from 'react-router-dom'
//Images
import StudioTSkate from '../assets/studioT-skate.png'
import star from '../assets/Star-Shape.png'

const CaseStudies = () => {
    return (
        <div className='caseStudies__MainContainer'>
            
            <div className='caseStudies__Hero-Container'>
                <div className='caseStudies__Hero-Container-Main'>
                    <div className='row p-0 m-0'>
                        <div className='col-8 col-sm-4 caseStudies__Hero-LeftColumn'>
                            <h1 className='caseStudies__Title'>Case <br></br>Studies</h1>
                            <Link to="/contact"><YellowCTA text={"Talk To Us"}/></Link> 
                            {/* <img src={star} className='caseStudy__Star' alt='star'/> */}
                        </div>
                        <div className='col-4 col-sm-8 caseStudies__Hero-RightColumn'>
                            <img src={StudioTSkate} alt='Pink Sparkle' className='caseStudies__StudioTSkate'/>
                        </div>
                    </div>
                </div>
                

                <Slider />
                <CaseStudyMain />
                <CaseStudyImgSection />
                <CaseStudyMetrics />
            </div>
            
        </div>
    )
}

export default CaseStudies