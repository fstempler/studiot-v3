import './creativeProcess.css';
//Images
import processImg from '../../assets/processImage.png';
import arrowDown from '../../assets/Arrow__Down.png';
//Component
import CreativeProcessCard from './CreativeProcessCard/CreativeProcessCard';

const CreativeProcess = () => {
    return (
    <section className='creativeProcess__MainContainer'>
        <div className='creativeProcess__Content'>
            <h2 className='creativeProcess__Title'>Creative <span className='creativeProcess__AltText'>Made</span> EZ</h2>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='creativeProcess__Card-Container'>
                        <CreativeProcessCard text1="Let's start" text2="Slide into our plarform."/>
                        <img src={arrowDown} className="creativeProcess__Arrow"alt="Arrow Down" />
                        <CreativeProcessCard text1="We are almost there" text2="Tell us what you need"/>
                        <img src={arrowDown} className="creativeProcess__Arrow"alt="Arrow Down" />
                        <CreativeProcessCard text1="We cook it up, fast"/>
                        <img src={arrowDown} className="creativeProcess__Arrow"alt="Arrow Down" />
                        <CreativeProcessCard text1="You get creative in" text2="Days"/>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='creativeProcess__Image-Container'>
                        <img src={processImg} className='creativeProces__Image' alt='Studio t'/>
                    </div>                    
                </div>
            </div>
        </div>
        <div className='wave-background'>  </div>
    </section>
    )
}

export default CreativeProcess;