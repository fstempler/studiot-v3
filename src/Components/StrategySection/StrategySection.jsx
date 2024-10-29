import './strategySection.css';
//images
import thinkingEmoji from '../../assets/Thinking-Emoji.png';
import fahlo from '../../assets/cs-fahlo.png';
import fahlo2 from '../../assets/Fahlo-Oct-16x9.gif';
import fahlo3 from '../../assets/Fahlo-August-1x1.gif';
import fahlo4 from '../../assets/fahlo_track.gif';
import links from '../../assets/cs-links.gif';
import joy from '../../assets/cs-joy.png';
import amaran from '../../assets/cs-amaran.png';
import vella from '../../assets/cs-vella.png';
import lane from '../../assets/cs-lane.gif';


//Components
import CarouselCard from './CarouselCard/CarouselCard';



const StrategySection = () => {
  return (
    <div className='strategySection__MainContainer' id='strategySection'>
      <div className='strategySection__Content-Container'>
        <div className='strategySection__Title-Container'>
          <h2 className='strategySection__Title'>Your Strategy, Our Creativity</h2>
        </div>
        <div className='strategySection__Text-Container'>
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
        </div>
      </div>

      <div className='strategySection__CarouselContainer'>
          <div className='carousel-container'>
            <div className='carousel-track'>
              <CarouselCard imgSrc={fahlo}  alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={links}  alt={"Links Case Study"} />
              <CarouselCard imgSrc={joy} alt={"Joy Days Case Study"} />
              <CarouselCard imgSrc={fahlo2}  alt={"Fahlo Case Study"} />

              <CarouselCard imgSrc={fahlo}  alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={links}  alt={"Links Case Study"} />
              <CarouselCard imgSrc={joy} alt={"Joy Days Case Study"} />
              <CarouselCard imgSrc={fahlo2}  alt={"Fahlo Case Study"} />

              <CarouselCard imgSrc={fahlo}  alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={links}  alt={"Links Case Study"} />
              <CarouselCard imgSrc={joy} alt={"Joy Days Case Study"} />
              <CarouselCard imgSrc={fahlo2}  alt={"Fahlo Case Study"} />

              <CarouselCard imgSrc={fahlo}  alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={links}  alt={"Links Case Study"} />
              <CarouselCard imgSrc={joy} alt={"Joy Days Case Study"} />
              <CarouselCard imgSrc={fahlo2}  alt={"Fahlo Case Study"} />

              <CarouselCard imgSrc={fahlo}  alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={links}  alt={"Links Case Study"} />
              <CarouselCard imgSrc={joy} alt={"Joy Days Case Study"} />
              <CarouselCard imgSrc={fahlo2}  alt={"Fahlo Case Study"} />

              <CarouselCard imgSrc={fahlo}  alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={links}  alt={"Links Case Study"} />
              <CarouselCard imgSrc={joy} alt={"Joy Days Case Study"} />
              <CarouselCard imgSrc={fahlo2}  alt={"Fahlo Case Study"} />

              <CarouselCard imgSrc={fahlo}  alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={links}  alt={"Links Case Study"} />
              <CarouselCard imgSrc={joy} alt={"Joy Days Case Study"} />
              <CarouselCard imgSrc={fahlo2}  alt={"Fahlo Case Study"} />

            </div>
          </div>
      </div> 
      <div className='strategySection__CarouselContainer'>
          <div className='carousel-container'>
            <div className='carousel-track carousel-reverse'>
              
              <CarouselCard imgSrc={vella} alt={"Links Case Study"} />
              <CarouselCard imgSrc={amaran} alt={"Joy Days Case Study"} />
              <CarouselCard imgSrc={fahlo4} alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={lane} alt={"Lane Case Study"} />

              
              <CarouselCard imgSrc={vella} alt={"Links Case Study"} />
              <CarouselCard imgSrc={amaran} alt={"Joy Days Case Study"} />
              <CarouselCard imgSrc={fahlo4} alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={lane} alt={"Lane Case Study"} />

              
              <CarouselCard imgSrc={vella} alt={"Links Case Study"} />
              <CarouselCard imgSrc={amaran} alt={"Joy Days Case Study"} />
              <CarouselCard imgSrc={fahlo4} alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={lane} alt={"Lane Case Study"} />

              
              <CarouselCard imgSrc={vella} alt={"Links Case Study"} />
              <CarouselCard imgSrc={amaran} alt={"Joy Days Case Study"} />
              <CarouselCard imgSrc={fahlo4} alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={lane} alt={"Lane Case Study"} />

              
              <CarouselCard imgSrc={vella} alt={"Links Case Study"} />
              <CarouselCard imgSrc={amaran} alt={"Joy Days Case Study"} />
              <CarouselCard imgSrc={fahlo4} alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={lane} alt={"Lane Case Study"} />

              
              <CarouselCard imgSrc={vella} alt={"Links Case Study"} />
              <CarouselCard imgSrc={amaran} alt={"Joy Days Case Study"} />
              <CarouselCard imgSrc={fahlo4} alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={lane} alt={"Lane Case Study"} />

              
              <CarouselCard imgSrc={vella} alt={"Links Case Study"} />
              <CarouselCard imgSrc={amaran} alt={"Joy Days Case Study"} />
              <CarouselCard imgSrc={fahlo4} alt={"Fahlo Case Study"} />
              <CarouselCard imgSrc={lane} alt={"Lane Case Study"} />
            </div>
          </div>
      </div>              
      

    </div>
  );
};

export default StrategySection;
