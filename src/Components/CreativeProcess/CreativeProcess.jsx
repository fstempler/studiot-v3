import './creativeProcess.css';
//Images
import processImg from '../../assets/processImage.png';
import arrowDown from '../../assets/Arrow__Down.png';
//Component
import { Link } from 'react-router-dom'
import CreativeProcessCard from './CreativeProcessCard/CreativeProcessCard';
import ContactCTA from '../yellowCTA/YellowCTA.jsx'

const CreativeProcess = () => {
    return (
    <section className='creativeProcess__MainContainer'>
        <div className='creativeProcess__Content'>
            <h2 className='creativeProcess__Title'>Creative <span className='creativeProcess__AltText'>Made</span> EZ</h2>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='creativeProcess__Card-Container'>
                        <CreativeProcessCard text1="Deep dive into your brand" text2="(good creative starts brand-first)."/>
                        <img src={arrowDown} className="creativeProcess__Arrow"alt="Arrow Down" />
                        <CreativeProcessCard text1="Creative  workshop for your specific needs" text2="(collaboration, new ideas, strategy, the studio t spark)"/>
                        <img src={arrowDown} className="creativeProcess__Arrow"alt="Arrow Down" />
                        <CreativeProcessCard text1="We get to work" text2="(sharp, well-crafted, and built to stand out.)"/>
                        <img src={arrowDown} className="creativeProcess__Arrow"alt="Arrow Down" />
                        <CreativeProcessCard text1="We deliver smart, on-brand creative" text2="(No guesswork. Less changes.)"/>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='creativeProcess__Image-Container'>
                        <img src={processImg} className='creativeProces__Image' alt='Studio t'/>
                        <Link to={"/contact"}><ContactCTA text={"Let's Make It Happen"}/></Link>
                    </div>                    
                </div>
            </div>
        </div>
        <div className='wave-background'>  </div>
    </section>
    )
}

export default CreativeProcess;