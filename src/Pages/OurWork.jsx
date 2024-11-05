import './styles/ourWork.css';
//Data
import cardData from '../data/ourWorkData';
//Components
import Card from '../Components/OurWorkCard/OurWorkCard';
import Slider from '../Components/Slider/Slider'
import YellowCTA from '../Components/yellowCTA/YellowCTA'
//Images
import fireEmoji from '../assets/Fire-Emoji.png'
import { Link } from 'react-router-dom';

const OurWork = () => {
    // Divide los datos en columnas
    const column1 = cardData.filter(card => card.id === 1 || card.id === 5);
    const column2 = cardData.filter(card => card.id === 2 || card.id === 6);
    const column3 = cardData.filter(card => card.id === 3 || card.id === 7);
    const column4 = cardData.filter(card => card.id === 4 || card.id === 8);
    //Line 2
    const column5 = cardData.filter(card => card.id === 9 || card.id === 13);
    const column6 = cardData.filter(card => card.id === 10 || card.id === 14);
    const column7 = cardData.filter(card => card.id === 11 || card.id === 15);
    const column8 = cardData.filter(card => card.id === 12 || card.id === 16);
    //Line3
    const column9 = cardData.filter(card => card.id === 17 || card.id === 21);
    const column10 = cardData.filter(card => card.id === 18 || card.id === 22);
    const column11 = cardData.filter(card => card.id === 19 || card.id === 23);
    const column12 = cardData.filter(card => card.id === 20 || card.id === 24);
    //Line4
    

    return (
        <div className='ourWork__MainContainer'>
            
            
            <div className='ourWork__Works-Container'>
                <div className='ourWork__Grid-Title-Container'>
                    <img src={fireEmoji} alt='Fire Emoji' className='ourwork__FireEmoji'/>
                    <h2 className='ourWork__GridTitle'>Here are some of our standout projects</h2>
                </div>
                <div className='ourWork__Grid'>
                    
                    <div className='ourWork__Column'>
                        {column1.map(card => (
                            <Card
                                key={card.id}
                                img={card.image}
                                shape={card.shape}
                                alt={card.alt}
                            />
                        ))}
                    </div>
                    
                    <div className='ourWork__Column'>
                        {column2.map(card => (
                            <Card
                                key={card.id}
                                img={card.image}
                                shape={card.shape}
                                alt={card.alt}
                            />
                        ))}
                    </div>
                    
                    <div className='ourWork__Column'>
                        {column3.map(card => (
                            <Card
                                key={card.id}
                                img={card.image}
                                shape={card.shape}
                                alt={card.alt}
                            />
                        ))}
                    </div>
                    
                    <div className='ourWork__Column'>
                        {column4.map(card => (
                            <Card
                                key={card.id}
                                img={card.image}
                                shape={card.shape}
                                alt={card.alt}
                            />
                        ))}
                    </div>
                </div>

                <div className='ourWork__Grid'>
                    
                    <div className='ourWork__Column'>
                        {column5.map(card => (
                            <Card
                                key={card.id}
                                img={card.image}
                                shape={card.shape}
                                alt={card.alt}
                            />
                        ))}
                    </div>
                    
                    <div className='ourWork__Column'>
                        {column6.map(card => (
                            <Card
                                key={card.id}
                                img={card.image}
                                shape={card.shape}
                                alt={card.alt}
                            />
                        ))}
                    </div>
                    
                    <div className='ourWork__Column'>
                        {column7.map(card => (
                            <Card
                                key={card.id}
                                img={card.image}
                                shape={card.shape}
                                alt={card.alt}
                            />
                        ))}
                    </div>
                    
                    <div className='ourWork__Column'>
                        {column8.map(card => (
                            <Card
                                key={card.id}
                                img={card.image}
                                shape={card.shape}
                                alt={card.alt}
                            />
                        ))}
                    </div>
                </div>

                <div className='ourWork__Grid'>
                    
                    <div className='ourWork__Column'>
                        {column9.map(card => (
                            <Card
                                key={card.id}
                                img={card.image}
                                shape={card.shape}
                                alt={card.alt}
                            />
                        ))}
                    </div>
                    
                    <div className='ourWork__Column'>
                        {column10.map(card => (
                            <Card
                                key={card.id}
                                img={card.image}
                                shape={card.shape}
                                alt={card.alt}
                            />
                        ))}
                    </div>
                    
                    <div className='ourWork__Column'>
                        {column11.map(card => (
                            <Card
                                key={card.id}
                                img={card.image}
                                shape={card.shape}
                                alt={card.alt}
                            />
                        ))}
                    </div>
                    
                    <div className='ourWork__Column'>
                        {column12.map(card => (
                            <Card
                                key={card.id}
                                img={card.image}
                                shape={card.shape}
                                alt={card.alt}
                            />
                        ))}
                    </div>
                </div>


            </div>
            <div className='ourWork__Slider-Container'>
                <Slider />
            </div>
            <div className='ourWork__Hero-Container'>
                <h2 className='ourWork__Title'>We Take Pride In Our Ability To Transform Our Client's Visions Into Reality</h2>
                
                <div className='ourWork_CtaContainer'>
                    <Link to='/contact'><YellowCTA text={"Talk To Us"} /></Link>
                </div>
                
            </div>
            
            
            
        </div>
    );
}

export default OurWork;
