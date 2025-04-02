import './strategySection.css';
//images
import thinkingEmoji from '../../assets/Thinking-Emoji.png';

import fahlo from '../../assets/works/fahlo-1.jpg'
import fahlo2 from '../../assets/works/fahlo-2.jpg'
import fahlo3 from '../../assets/works/fahlo-3.png'
import fahlo4 from '../../assets/works/fahlo-4.png'
import fahlo5 from '../../assets/works/fahlo-5.png'
import fahlo6 from '../../assets/works/fahlo-6.png'
import amaran from '../../assets/works/amaran.jpg'
import amaran2 from '../../assets/works/amaran-2.jpg'
import amaran3 from '../../assets/works/amaran-3.jpg'
import amaran4 from '../../assets/works/amaran-4.jpg'
import beadchest from '../../assets/works/beadChest.png'
import benjaminMoore from '../../assets/works/benjaminMoore.jpg'
import vella from '../../assets/works/vella.jpg'
import joydays from '../../assets/works/joydays.jpg'
import laneeight from '../../assets/works/laneeight.jpg'
import proclaim from '../../assets/works/proclaim.jpg'


//Components
import CarouselCard from './CarouselCard/CarouselCard';



const StrategySection = () => {
  return (
    <div className='strategySection__MainContainer' id='strategySection'>
      <div className='strategySection__Content-Container'>
        {/* <div className='strategySection__Title-Container'>
          <h2 className='strategySection__Title'>Your Strategy, Our Creativity</h2>
        </div> */}
        {/* <div className='strategySection__Text-Container'>
          <img
            src={thinkingEmoji}
            className="strategySection__ThinkingEmoji"
            alt='Thinking Emoji'
          />
          <h2 className='strategySection__Text'>
            Already leading the way? Let Studio t supercharge your designs with
            innovative content that takes your brand to the next level. We amplify
            your strategy with creativity that speaks for itself.
          </h2>
        </div> */}
      </div>

      <div className='strategySection__CarouselContainer'>
          <div className='carousel-container'>
            <div className='carousel-track'>
              <CarouselCard imgSrc={fahlo}  alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={joydays} alt={"Joy Days Case Study"} />
              <CarouselCard imgSrc={benjaminMoore} alt={"Benjamin Moore Case Study"} />
              <CarouselCard imgSrc={fahlo2}  alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={amaran}  alt={"amaran Case Study"} />
              <CarouselCard imgSrc={beadchest}  alt={"beadChest Case Study"} />
              <CarouselCard imgSrc={fahlo3}  alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={amaran2}  alt={"Amaran Case Study"} />
              
              <CarouselCard imgSrc={fahlo}  alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={joydays} alt={"Joy Days Case Study"} />
              <CarouselCard imgSrc={benjaminMoore} alt={"Benjamin Moore Case Study"} />
              <CarouselCard imgSrc={fahlo2}  alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={amaran}  alt={"amaran Case Study"} />
              <CarouselCard imgSrc={beadchest}  alt={"beadChest Case Study"} />
              <CarouselCard imgSrc={fahlo3}  alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={amaran2}  alt={"Amaran Case Study"} />

              <CarouselCard imgSrc={fahlo}  alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={joydays} alt={"Joy Days Case Study"} />
              <CarouselCard imgSrc={benjaminMoore} alt={"Benjamin Moore Case Study"} />
              <CarouselCard imgSrc={fahlo2}  alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={amaran}  alt={"amaran Case Study"} />
              <CarouselCard imgSrc={beadchest}  alt={"beadChest Case Study"} />
              <CarouselCard imgSrc={fahlo3}  alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={amaran2}  alt={"Amaran Case Study"} />

              <CarouselCard imgSrc={fahlo}  alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={joydays} alt={"Joy Days Case Study"} />
              <CarouselCard imgSrc={benjaminMoore} alt={"Benjamin Moore Case Study"} />
              <CarouselCard imgSrc={fahlo2}  alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={amaran}  alt={"amaran Case Study"} />
              <CarouselCard imgSrc={beadchest}  alt={"beadChest Case Study"} />
              <CarouselCard imgSrc={fahlo3}  alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={amaran2}  alt={"Amaran Case Study"} />

              <CarouselCard imgSrc={fahlo}  alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={joydays} alt={"Joy Days Case Study"} />
              <CarouselCard imgSrc={benjaminMoore} alt={"Benjamin Moore Case Study"} />
              <CarouselCard imgSrc={fahlo2}  alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={amaran}  alt={"amaran Case Study"} />
              <CarouselCard imgSrc={beadchest}  alt={"beadChest Case Study"} />
              <CarouselCard imgSrc={fahlo3}  alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={amaran2}  alt={"Amaran Case Study"} />             

            </div>
          </div>
      </div> 
      <div className='strategySection__CarouselContainer'>
          <div className='carousel-container'>
            <div className='carousel-track carousel-reverse'>
              
            <CarouselCard imgSrc={proclaim}  alt={"proclaim Case Study"} />
            <CarouselCard imgSrc={fahlo4}  alt={"Fahlo Case Study"} />
            <CarouselCard imgSrc={amaran3}  alt={"Amaran Case Study"} />
            <CarouselCard imgSrc={fahlo5}  alt={"Fahlo Case Study"} />
            <CarouselCard imgSrc={amaran4}  alt={"Amaran Case Study"} />
            <CarouselCard imgSrc={fahlo6}  alt={"Fahlo Case Study"} />
            <CarouselCard imgSrc={vella}  alt={"Vella Case Study"} />
            <CarouselCard imgSrc={laneeight}  alt={"Amaran Case Study"} />

            <CarouselCard imgSrc={proclaim}  alt={"proclaim Case Study"} />
            <CarouselCard imgSrc={fahlo4}  alt={"Fahlo Case Study"} />
            <CarouselCard imgSrc={amaran3}  alt={"Amaran Case Study"} />
            <CarouselCard imgSrc={fahlo5}  alt={"Fahlo Case Study"} />
            <CarouselCard imgSrc={amaran4}  alt={"Amaran Case Study"} />
            <CarouselCard imgSrc={fahlo6}  alt={"Fahlo Case Study"} />
            <CarouselCard imgSrc={vella}  alt={"Vella Case Study"} />
            <CarouselCard imgSrc={laneeight}  alt={"Amaran Case Study"} />

            <CarouselCard imgSrc={proclaim}  alt={"proclaim Case Study"} />
            <CarouselCard imgSrc={fahlo4}  alt={"Fahlo Case Study"} />
            <CarouselCard imgSrc={amaran3}  alt={"Amaran Case Study"} />
            <CarouselCard imgSrc={fahlo5}  alt={"Fahlo Case Study"} />
            <CarouselCard imgSrc={amaran4}  alt={"Amaran Case Study"} />
            <CarouselCard imgSrc={fahlo6}  alt={"Fahlo Case Study"} />
            <CarouselCard imgSrc={vella}  alt={"Vella Case Study"} />
            <CarouselCard imgSrc={laneeight}  alt={"Amaran Case Study"} />

            <CarouselCard imgSrc={proclaim}  alt={"proclaim Case Study"} />
            <CarouselCard imgSrc={fahlo4}  alt={"Fahlo Case Study"} />
            <CarouselCard imgSrc={amaran3}  alt={"Amaran Case Study"} />
            <CarouselCard imgSrc={fahlo5}  alt={"Fahlo Case Study"} />
            <CarouselCard imgSrc={amaran4}  alt={"Amaran Case Study"} />
            <CarouselCard imgSrc={fahlo6}  alt={"Fahlo Case Study"} />
            <CarouselCard imgSrc={vella}  alt={"Vella Case Study"} />
            <CarouselCard imgSrc={laneeight}  alt={"Amaran Case Study"} />

            <CarouselCard imgSrc={proclaim}  alt={"proclaim Case Study"} />
            <CarouselCard imgSrc={fahlo4}  alt={"Fahlo Case Study"} />
            <CarouselCard imgSrc={amaran3}  alt={"Amaran Case Study"} />
            <CarouselCard imgSrc={fahlo5}  alt={"Fahlo Case Study"} />
            <CarouselCard imgSrc={amaran4}  alt={"Amaran Case Study"} />
            <CarouselCard imgSrc={fahlo6}  alt={"Fahlo Case Study"} />
            <CarouselCard imgSrc={vella}  alt={"Vella Case Study"} />
            <CarouselCard imgSrc={laneeight}  alt={"Amaran Case Study"} />
            

            </div>
          </div>
      </div>              
      

    </div>
  );
};

export default StrategySection;
