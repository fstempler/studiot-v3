import './customCarousel.css';
import { useEffect, useState } from 'react';
//Images
import Img1 from '../../../assets/customCarousel-1.png';
import ArrowLeft from '../../../assets/btnCarousel-l.png';
import ArrowRight from '../../../assets/btnCarousel-r.png'

const images = [
  Img1,
  Img1,
  Img1,
];

export default function CustomCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Cambio automático cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // limpia al desmontar
  }, []);

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-100 text-center" id="customCarouselContainer">
      <div className="carousel slide carousel-fade" id="customCarousel">
        <div className="carousel-inner">
          {images.map((src, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            >
              <img src={src} className="d-block w-100" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Controles abajo */}
      <div className="d-flex justify-content-center align-items-center mt-3 gap-3">
        <button className="btn " onClick={goToPrev}>
          <img src={ArrowLeft} />
        </button>

        <div className="d-flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`btn btn-sm rounded-circle ${
                index === activeIndex ? 'btn-dark' : 'btn-outline-dark'
              }`}
              style={{ width: '10px', height: '10px', padding: 0, backgroundColor: '#93A2FD' }}
            />
          ))}
        </div>

        <button className="btn " onClick={goToNext}>
          <img src={ArrowRight} />
        </button>
      </div>
    </div>
  );
}
