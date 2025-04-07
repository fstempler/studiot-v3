import './creativeProcess.css';
//Images
import processImg from '../../assets/processImage.png';
//Component
import VerticalCarousel from './VerticalCarousel/VerticalCarousel';

const CreativeProcess = () => {
    return (
    <section className='creativeProcess__MainContainer'>
        <div className='creativeProcess__Content'>
            <h2 className='creativeProcess__Title'>Creative <span className='creativeProcess__AltText'>Made</span> EZ</h2>
            <div className='row'>
                <div className="col-md-6 creativeProcess__Slider-Container">
                    <div className='topContainer'>
                        <div></div>
                    </div>
                    <VerticalCarousel />
                    <div className='bottomContainer'>
                        <div></div>
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
