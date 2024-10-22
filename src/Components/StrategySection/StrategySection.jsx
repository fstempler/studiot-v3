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
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // For screens larger than 4000px
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3, // Number of visible items
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const StrategySection = () => {
  return (
    <div className='strastegySection__MainContainer'>
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
      <div className='strategySection__Carousel-Container'>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={false}
          arrows={true}
          slidesToSlide={1} 
          infinite={true}
        >
          <CarouselCard imgSrc={fahlo} Title={"Fahlo"} alt={"Fahlo Case Study"} />
          <CarouselCard imgSrc={links} Title={"Links"} alt={"Links Case Study"} />
          <CarouselCard imgSrc={joy} Title={"Joy Days"} alt={"Joy Days Case Study"} />
          <CarouselCard imgSrc={fahlo2} Title={"Test"} alt={"Fahlo Case Study"} />
          <CarouselCard imgSrc={amaran} Title={"Test"} alt={"Test Case Study"} />
        </Carousel>
      </div>
      <div className='strategySection__Carousel-Container2'>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={false}
          arrows={true}
          slidesToSlide={1} // Moves 1 item at a time
          infinite={true}
        >
          <CarouselCard imgSrc={amaran} Title={"Amaran"} alt={"Amaran Case Study"} />
          <CarouselCard imgSrc={lane} Title={"Lane-Eight"} alt={"Lane-Eight Case Study"} />
          <CarouselCard imgSrc={vella} Title={"Vella"} alt={"Vella Case Study"} />
          <CarouselCard imgSrc={fahlo4} Title={"Fahlo"} alt={"Test Case Study"} />
          <CarouselCard imgSrc={joy} Title={"Test"} alt={"Test Case Study"} />
        </Carousel>
      </div>
    </div>
  );
};

export default StrategySection;
