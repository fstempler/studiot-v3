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
//components
import FloatingComponent from './FloatingComponent/FloatingComponent'
import { useScroll, useTransform, motion, easeInOut } from 'framer-motion'
import { useRef } from 'react'

const ReactionSection = () => {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
            target: container,
            offset: ['start end', 'end start'] 
        })

        const md = useTransform(scrollYProgress, [0, 1], [0, -200]);
        const lg = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section className='reactionSection__MainContainer' id='reactionSection'>
            <div className='reactionSection__TitleContainer'>
                <h2 className='reactionSection__Title'>Real-time <br />Reaction</h2>                
            </div>

            <FloatingComponent 
  className="review emoji-1"
  floatInitialZ="10px"
  floatInitialY="-5px"
  floatAnimateZ="50px"
  floatAnimateY="-20px"
  floatDuration={3}
>
  <motion.img style={{ y: lg }} src={sunglassesEmoji} alt="Sunglasses Emoji" />
</FloatingComponent>

<FloatingComponent
  className="review review-1"
  floatInitialZ="8px"
  floatInitialY="-2px"
  floatAnimateZ="35px"
  floatAnimateY="-10px"
  floatDuration={2.5}
>
  <motion.img style={{ y: lg }} src={review1} alt="Review 1" />
</FloatingComponent>

<FloatingComponent 
  className="review review-2"
  floatInitialZ="12px"
  floatInitialY="-3px"
  floatAnimateZ="45px"
  floatAnimateY="-15px"
  floatDuration={3.5}
>
  <motion.img style={{ y: md }} src={review2} alt="Review 2" />
</FloatingComponent>

<FloatingComponent 
  className="review review-3"
  floatInitialZ="6px"
  floatInitialY="0px"
  floatAnimateZ="30px"
  floatAnimateY="-5px"
  floatDuration={1.8}
>
  <motion.img style={{ y: lg }} src={review3} alt="Review 3" />
</FloatingComponent>

<FloatingComponent 
  className="review review-4"
  floatInitialZ="10px"
  floatInitialY="-4px"
  floatAnimateZ="42px"
  floatAnimateY="-18px"
  floatDuration={2.2}
>
  <motion.img style={{ y: md }} src={review4} alt="Review 4" />
</FloatingComponent>

<FloatingComponent
  className="review emoji-2"
  floatInitialZ="7px"
  floatInitialY="-1px"
  floatAnimateZ="37px"
  floatAnimateY="-11px"
  floatDuration={2.7}
>
  <motion.img style={{ y: lg }} src={hornsEmoji} alt="Horns Emoji" />
</FloatingComponent>

<FloatingComponent 
  className="review review-5"
  floatInitialZ="9px"
  floatInitialY="-3px"
  floatAnimateZ="39px"
  floatAnimateY="-13px"
  floatDuration={2.9}
>
  <motion.img style={{ y: md }} src={review5} alt="Review 5" />
</FloatingComponent>

<FloatingComponent
  className="review review-6"
  floatInitialZ="11px"
  floatInitialY="-6px"
  floatAnimateZ="45px"
  floatAnimateY="-17px"
  floatDuration={3.1}
>
  <motion.img style={{ y: lg }} src={review6} alt="Review 6" />
</FloatingComponent>

<FloatingComponent 
  className="review review-7"
  floatInitialZ="8px"
  floatInitialY="-2px"
  floatAnimateZ="38px"
  floatAnimateY="-12px"
  floatDuration={2.0}
>
  <motion.img style={{ y: md }} src={review7} alt="Review 7" />
</FloatingComponent>

        </section>
    )
}

export default ReactionSection