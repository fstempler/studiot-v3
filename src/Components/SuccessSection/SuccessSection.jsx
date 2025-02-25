import './successSection.css'
// components
import SuccessCard from './SuccessCard/SuccessCard'
import { useState } from 'react'
import YellowCTA from '../yellowCTA/YellowCTA'
//Images
import Graceful from '../../assets/graceful-logo-black.png'
import Alibaba from '../../assets/alibaba-logo-black.png'
import Openfortune from '../../assets/openfortune-logo-black.png'
import FireEmoji from '../../assets/Fire-Emoji.png'
import Arrow from '../../assets/services-arrow.svg'
import { useEffect } from 'react'



const carouselData = [    
    {
        id: 1,
        image: Graceful,
        text: 'We love the work Studio T does. They actually care about what we are trying to build and consistently go above and beyond.',
        alt: '4 Moms Logo'
    },
    {
        id: 2,
        image: Alibaba,
        text: 'Very strong creative thinking with a social-first mindset. They were a natural fit for our business.',
        alt: 'Taos Logo'
    },
    {
        id: 3,
        image: Openfortune,
        text: 'When it comes to organic social, creativity matters. Studio t has some of the most creative content marketers that I have ever seen.',
        alt: 'Open Fortune Logo'
    },
    {
        id: 4,
        image: Graceful,
        text: 'We love the work Studio T does. They actually care about what we are trying to build and consistently go above and beyond.',
        alt: '4 Moms Logo'
    },
    {
        id: 5,
        image: Alibaba,
        text: 'Very strong creative thinking with a social-first mindset. They were a natural fit for our business.',
        alt: 'Taos Logo'
    },
    {
        id: 6,
        image: Openfortune,
        text: 'When it comes to organic social, creativity matters. Studio t has some of the most creative content marketers that I have ever seen.',
        alt: 'Open Fortune Logo'
    }
];

const SuccessSection = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);

    useEffect(() => {
        // Adjust the number of cards based on screen size
        const updateCardsToShow = () => {
            if (window.innerWidth <= 600) {
                setCardsToShow(1);
            } else {
                setCardsToShow(3);
            }
        };

        updateCardsToShow(); // Set initial state
        window.addEventListener('resize', updateCardsToShow); // Listen for window resize

        return () => {
            window.removeEventListener('resize', updateCardsToShow); // Cleanup listener
        };
    }, []);

    const goLeft = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + carouselData.length) % carouselData.length;
            return newIndex <= carouselData.length - cardsToShow ? newIndex : carouselData.length - cardsToShow;
        });
    };

    const goRight = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % carouselData.length;
            return newIndex <= carouselData.length - cardsToShow ? newIndex : 0;
        });
    };

    return (
        <section className='successSection__MainContainer' id='successSection'>
            <div className='successSection__Content-Container'>
                <div className='successSection__Content-TitleContainer'>
                    <h2 className='successSection__Content-Title'>
                        Success <span className='successSection__Content-AltTitle'>Speaks</span> for <span className='successSection__Content-AltTitle'>Itself</span>
                    </h2>
                </div>
                <div className='successSection__Content-CardsContainer'>
                    
                    
                    <div className='successSection__Carousel-Container'>
                        <div className='successSection__Carousel-Track'>
                            {carouselData.slice(currentIndex, currentIndex + cardsToShow).map((item) => (
                                <SuccessCard key={item.id} image={item.image} text={item.text} alt={item.alt} />
                            ))}
                        </div>
                    </div>   

                    <div className='carousel__BtnContainer'>
                        <button className='carousel__Btn carousel__Btn--Left' onClick={goLeft}><img src={Arrow}/></button>
                        <button className='carousel__Btn carousel__Btn--Right' onClick={goRight}><img src={Arrow}/></button>
                    </div>
                    
                    <div className='successSection__FireEmoji-Container successSection__FireEmoji-1'>
                        <img className='successSection__FireEmoji' src={FireEmoji} alt='Fire Emoji'/>
                    </div>
                </div>

                
            </div>
            <YellowCTA text="See What The Hype Is About"/>
        </section>
    )
}

export default SuccessSection