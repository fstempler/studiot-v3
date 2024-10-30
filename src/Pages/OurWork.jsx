import './styles/ourWork.css'
//Data
import cardData from '../data/ourWorkData'
//Components
import Card from '../Components/OurWorkCard/OurWorkCard'

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
};

const OurWork = () => {

    const shuffleData = shuffleArray([...cardData]);
    return (
        <div className='ourWork__MainContainer'>
            <h2 className='ourWork__Title'>Our Work</h2>
            <div className='ourWork__Text-Container'>
                <p className='ourWork__Text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ut itaque accusamus numquam praesentium adipisci quas eligendi repellat hic impedit tempore quae corporis nihil, natus suscipit voluptatum aliquid quo minima.</p>
            </div>
            <div className='ourWork__Works-Container'>
                <div className='ourWork__Grid'>
                    {shuffleData.map((card) => (
                        <Card
                        key={card.id}
                        img={card.image}
                        alt={card.alt}
                        />
                    )
                )}
                </div>
            </div>
        </div>
    )
}

export default OurWork