import './reactionSection.css'
//Images
import sunglassesEmoji from '../../assets/Sunglasses-Emoji.png'
import hornsEmoji from '../../assets/Horns-Emoji.png'
import review1 from '../../assets/review1.png'
import review2 from '../../assets/review2.png'
import review3 from '../../assets/review3.png'
import review4 from '../../assets/review4.png'
import review5 from '../../assets/review5.png'
import review6 from '../../assets/review6.png'
import review7 from '../../assets/review7.png'

const ReactionSection = () => {
    return (
        <section className='reactionSection__MainContainer'>
            <div className='reactionSection__TitleContainer'>
                <h2 className='reactionSection__Title'>Real-time <br />Reaction</h2>                
            </div>
            <div className='review emoji-1'>
               <img src={sunglassesEmoji} alt='Sunglasses Emoji' />
            </div>
            <div className='review review-1'>
               <img src={review1} alt='Review 1' />
            </div>
            <div className='review review-2'>
                <img src={review2} alt='Review 1' />
            </div>
            <div className='review review-3'>
                <img src={review3} alt='Review 1' />
            </div>
            <div className='review review-4'>
                <img src={review4} alt='Review 1' />
            </div>
            <div className='review emoji-2'>
               <img src={hornsEmoji} alt='Horns Emoji' />
            </div>
            <div className='review review-5'>
                <img src={review5} alt='Review 1' />
            </div>
            <div className='review review-6'>
                <img src={review6} alt='Review 1' />
            </div>
            <div className='review review-7'>
                <img src={review7} alt='Review 1' />
            </div>
        </section>
    )
}

export default ReactionSection