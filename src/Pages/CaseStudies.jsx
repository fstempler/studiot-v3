import './styles/caseStudies.css'
//Components
import YellowCTA from '../Components/yellowCTA/YellowCTA'
import Slider from '../Components/Slider/Slider'
import { Link } from 'react-router-dom'
//Images
import WSScs from '../assets/WSS-CS.gif'
import Grooved from '../assets/GROOVED-CS.gif'
import Precision from '../assets/PRECISION-CS.gif'

const CaseStudies = () => {
    return (
        <div className='caseStudies__MainContainer'>
            
            <div className='caseStudies__Hero-Container'>
                <div className='caseStudies__Hero-Container-Main'>
                    <h1 className='caseStudies__Title'>Case Studies</h1>
                    <Link to="/contact"><YellowCTA text={"Talk To Us"}/></Link>                     
                </div>
                <div className='caseStudies__CS-Container'>
                    <img src={WSScs} alt='WSS' />
                    <div className='caseStudies__CS-Title-Container'>
                        <h3 className='caseStudies__CS-Tag'>AI Paid Media</h3>
                        <h2 className='caseStudies__CS-Title'>From Weeks to Hours: <br />How We Transformed
                        WSS’s Content Strategy With AI.</h2>
                    </div>
                    
                </div>
                <div className='caseStudies__CS-Container'>
                    <img src={Grooved} alt='WSS' />
                    <div className='caseStudies__CS-Title-Container'>
                        <h3 className='caseStudies__CS-Tag'>Brand Strategy</h3>
                        <h2 className='caseStudies__CS-Title'>From Graceful to Groovy: <br />Creating a Bold New Identity for Grooved Learning.</h2>
                    </div>
                    
                </div>
                <div className='caseStudies__CS-Container'>
                    <img src={Precision} alt='WSS' />
                    <div className='caseStudies__CS-Title-Container'>
                        <h3 className='caseStudies__CS-Tag'>Brand Strategy</h3>
                        <h2 className='caseStudies__CS-Title'>Unseen Precision, Unmatched Results: <br />How We Transformed Precision Medicine’s Brand Identity</h2>
                    </div>
                    
                </div>
                

                <Slider />
                {/* <CaseStudyMain />
                <CaseStudyImgSection />
                <CaseStudyMetrics /> */}
            </div>
            
        </div>
    )
}

export default CaseStudies