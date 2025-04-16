import './customCarousel.css';
import { useEffect, useState } from 'react';
//Images
import Img1 from '../../../assets/customCarousel-1.gif';
import Img2 from '../../../assets/customCarousel-2.gif';
import Img3 from '../../../assets/customCarousel-3.gif';
import ArrowLeft from '../../../assets/btnCarousel-l.png';
import ArrowRight from '../../../assets/btnCarousel-r.png'
//Videos
import Vid1 from '../../../assets/customCarousel-1.mp4';
import Vid2 from '../../../assets/customCarousel-2.mp4';
import Vid3 from '../../../assets/customCarousel-3.mp4';
//Components
import CustomCarouselContent from './CustomCarouselContent/CustomCarouselContent';

const slides = [
  <CustomCarouselContent vid={Vid1} views="11.2k" />,
  <CustomCarouselContent vid={Vid2} views="5.9k" />,
  <CustomCarouselContent vid={Vid3} views="4.9k" />,
];

export default function CustomCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Cambio automático cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval); 
  }, []);

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-100 text-center" id="customCarouselContainer">
      <div className="carousel slide carousel-fade" id="customCarousel">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Controles abajo */}
      <div className="d-flex justify-content-center align-items-center mt-3 gap-3">
        <button className="btn " onClick={goToPrev}>
          <img className="btn-handle" src={ArrowLeft} />
        </button>

        <div className="d-flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`btn btn-sm rounded-circle ${
                index === activeIndex ? 'btn-dark' : 'btn-outline-dark'
              }`}
              style={{ width: '10px', height: '10px', padding: 0, backgroundColor: index === activeIndex ? '#DAFF01' : '#D6D8FF' }}
            />
          ))}
        </div>

        <button className="btn " onClick={goToNext}>
          <img className="btn-handle" src={ArrowRight} />
        </button>
      </div>
    </div>
  );
}
