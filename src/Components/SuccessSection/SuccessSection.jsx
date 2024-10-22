import './successSection.css'
// components
import SuccessCard from './SuccessCard/SuccessCard'
//Images
import BlueLabelLogo from '../../assets/blueLabel-logo.png'
import TaosLogo from '../../assets/taos-logo.png'
import MomsLogo from '../../assets/4moms-logo.png'
import FireEmoji from '../../assets/Fire-Emoji.png'

const SuccessSection = () => {
    return (
        <section className='successSection__MainContainer'>
            <div className='successSection__Content-Container'>
                <div className='successSection__Content-TitleContainer'>
                    <h2 className='successSection__Content-Title'>
                        Success Speaks for Itself
                    </h2>
                </div>
                <div className='successSection__Content-CardsContainer'>
                    <SuccessCard image={BlueLabelLogo} text={"They’re keen on ensuring the best practices they implement specifically align with our brand."} alt={"BlueLabel Logo"} />
                    <SuccessCard image={MomsLogo} text={"They’re keen on ensuring the best practices they implement specifically align with our brand."} alt={"4Moms Logo"} />
                    <SuccessCard image={TaosLogo} text={"They provide a range of great services. Everything they do is consistent and meets the same high standard."} alt={"Taos Logo"} />
                    <div className='successSection__FireEmoji-Container'>
                        <img className='successSection__FireEmoji' src={FireEmoji} alt='Fire Emoji'/>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SuccessSection