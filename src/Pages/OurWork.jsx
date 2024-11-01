import './styles/ourWork.css';
//Data
import cardData from '../data/ourWorkData';
//Components
import Card from '../Components/OurWorkCard/OurWorkCard';
import Slider from '../Components/Slider/Slider'
import YellowCTA from '../Components/yellowCTA/YellowCTA'
//Images
import fireEmoji from '../assets/Fire-Emoji.png'

const OurWork = () => {
    // Divide los datos en columnas
    const column1 = cardData.filter(card => card.id === 1 || card.id === 5);
    const column2 = cardData.filter(card => card.id === 2 || card.id === 6);
    const column3 = cardData.filter(card => card.id === 3 || card.id === 7);
    const column4 = cardData.filter(card => card.id === 4 || card.id === 8);

    

    return (
        <div className='ourWork__MainContainer'>
            <div className='ourWork__Hero-Container'>
                <h2 className='ourWork__Title'>We Take Pride In Our Ability To Transform Our Client's Visions Into Reality</h2>
                
                <div className='ourWork_CtaContainer'>
                    <YellowCTA text={"Talk To Us"} />
                </div>
                
            </div>
            
            
            <div className='ourWork__Slider-Container'>
                <Slider />
            </div>
            
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
            </div>
        </div>
    );
}

export default OurWork;
