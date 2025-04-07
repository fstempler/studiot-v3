import './vsSection.css'
//components
import BlackCTA from '../blackCTA-sm/blackCTA-sm'
import { Link } from 'react-router-dom';
// images
import Before from '../../assets/vsSection-Before.png';
import After from '../../assets/vsSection-After.png';
import Arrow from '../../assets/vsSection-Arrow.png';

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
                <div className='vsSection__Image-Container'>
                    <img src={Before} className='vsSection__Image' alt='Before' />
                </div>
                <div className='vsSection__Image-Container'>
                    <img src={Arrow} className='vsSection__Image-Arrow' alt='Arrow' />
                </div>
                <div className='vsSection__Image-Container'>
                    <img src={After} className='vsSection__Image' alt='After' />
                </div>
            </div>            
        </section>
    )
}

export default VsSection;