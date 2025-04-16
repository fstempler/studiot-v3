import './vsSection.css'
//components
import BlackCTA from '../blackCTA-sm/blackCTA-sm'
import { Link } from 'react-router-dom';
// images
import Arrow from '../../assets/vsSection-Arrow.png';
import Slide1 from '../../assets/Slide1.png';
import Slide2 from '../../assets/Slide2.png';

const VsSection = () => {
    return (
        <section className='vsSection__Main-Container'>
            <div className='vsSection__Title-Container'>
                <h2 className='vsSection__Title'>Your <span className='vsSection__Title2'>creative team's <br /> struggle</span> bus <span className='vsSection__Title3'> stops here!</span></h2>
                <Link to="/contact">                            
                    <BlackCTA text={"Fix My Creative Problems"}/>
                </Link>
            </div>
            <div className='vsSection__VS-Container'>                

                <div className="mockup-container">
                    <img src={Slide1} alt="Phone Mockup" className="phone-img" />

                    <div className="bubble bubble-top-left"><span className="emoji">😮‍💨</span> <strong>The Struggle Is Real</strong></div>
                    <div className="bubble bubble-bottom-left">Understaffed <br/>teams</div>
                    <div className="bubble bubble-bottom-right">Ads that flop harder <br/>than a first-date ick</div>
                    <div className="bubble bubble-bottom-center">Missed deadlines</div>
                </div>



                <div className='vsSection__Image-Container'>
                    <img src={Arrow} className='vsSection__Image-Arrow' alt='Arrow' />
                </div>
                <div className="mockup-container">
                    <img src={Slide2} alt="Phone Mockup" className="phone-img-after" />

                    <div className="bubble-after bubble-after-top-left"><span className="emoji">🚀</span> <strong>The Fix</strong></div>
                    <div className="bubble-after bubble-after-bottom-left">No more “meh” ads. <span className='bubble-bottom-left-alt-text'>Only “wow.”</span></div>                    
                    <div className="bubble-after bubble-after-bottom-center"><span className='bubble-bottom-center-text'>Studio T delivers <strong>lightning-fast, on-brand creative that slays</strong> performance metrics.</span></div>
                </div>
            </div>            
        </section>
    )
}

export default VsSection;