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

import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

const ReactionSection = () => {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
            target: container,
            offset: ['start end', 'end start'] 
        })

        const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
        const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
        const lg = useTransform(scrollYProgress, [0, 1], [0, -220]);

    return (
        <section className='reactionSection__MainContainer' id='reactionSection'>
            <div className='reactionSection__TitleContainer'>
                <h2 className='reactionSection__Title'>Real-time <br />Reaction</h2>                
            </div>
            <div className='review emoji-1' ref={container}>
                <motion.img style={{y: lg}} src={sunglassesEmoji} alt='Sunglasses Emoji'></motion.img>
            </div>
            <div className='review review-1' ref={container}>
               <motion.img style={{y: lg}} src={review1} alt='Review 1'></motion.img>
            </div>
            <div className='review review-2' ref={container}>
                <motion.img style={{y: lg}} src={review2} alt='Review 1'></motion.img>
            </div>
            <div className='review review-3' ref={container}>
                <motion.img style={{y: sm}} src={review3} alt='Review 1'></motion.img>
            </div>
            <div className='review review-4' ref={container}>
                <motion.img style={{y: md}} src={review4} alt='Review 1'></motion.img>
            </div>
            <div className='review emoji-2' ref={container}>
               <motion.img style={{y: lg}} src={hornsEmoji} alt='Horns Emoji'></motion.img>
            </div>
            <div className='review review-5' ref={container}>
                <motion.img style={{y: md}} src={review5} alt='Review 1'></motion.img>
            </div>
            <div className='review review-6' ref={container}>
                <motion.img style={{y: sm}} src={review6} alt='Review 1'></motion.img>
            </div>
            <div className='review review-7' ref={container}>
                <motion.img style={{y: md}} src={review7} alt='Review 1'></motion.img>
            </div>
        </section>
    )
}

export default ReactionSection