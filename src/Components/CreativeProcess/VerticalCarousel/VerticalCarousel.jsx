import { useState } from 'react';
import './verticalCarousel.css';
//components
import CreativeProcessCard from '../CreativeProcessCard/CreativeProcessCard'
//images
import ArrowDown from '../../../assets/Arrow__Down.png'


const slides = [
    <CreativeProcessCard 
      text1="Deep dive into your brand" 
      text2="good creative starts brand-first." 
    />,
    <CreativeProcessCard 
      text1="Creative workshop for your specific needs" 
      text2="collaboration, new ideas, strategy, the studio t spark" 
    />,
    <CreativeProcessCard 
      text1="We get to work" 
      text2="sharp, well-crafted, and built to stand out." 
    />,
    <CreativeProcessCard 
      text1="We deliver smart, on-brand creative" 
      text2="No guesswork. Less changes." 
    />,
  ];
  
  const VerticalCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrev = () => {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
    };
  
    return (
      <div className="carouselContainer">
        {/* <button className="navButton up" onClick={handlePrev}>
            <img src={ArrowDown} alt="Arrow Down" />
        </button> */}
        <div className="carouselWrapper">
          <div
            className="carouselSlides"
            style={{ transform: `translateY(-${currentIndex * 100}%)` }}
          >
            {slides.map((Component, index) => (
              <div key={index} className="carouselSlide">
                {Component}
              </div>
            ))}
          </div>
        </div>
        <button className="navButton down" onClick={handleNext}>
            <img src={ArrowDown} alt="Arrow Down" />
        </button>
      </div>
    );
  };
  
  export default VerticalCarousel;
  
