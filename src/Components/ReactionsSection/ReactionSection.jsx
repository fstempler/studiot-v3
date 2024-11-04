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

        const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
        const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
        const lg = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section className='reactionSection__MainContainer' id='reactionSection'>
            <div className='reactionSection__TitleContainer'>
                <h2 className='reactionSection__Title'>Real-time <br />Reaction</h2>                
            </div>

            <FloatingComponent className={`review emoji-1`}>
                <motion.img style={{y: lg}} src={sunglassesEmoji} alt='Sunglasses Emoji'></motion.img>
            </FloatingComponent>
            {/* <motion.div className='review emoji-1' ref={container}
                initial={{
                    transform: "translateZ(8px) translateY(-2px)"
                }}
                animate={{
                    transform: "translateZ(32px) translateY(-8px)"
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 2,
                    ease: "easeInOut",
                }}
            > */}
                
            <FloatingComponent className={`review review-1`}>
            
               <motion.img style={{y: lg}} src={review1} alt='Review 1'></motion.img>
            </FloatingComponent>

            <FloatingComponent className={`review review-2`}>
                <motion.img style={{y: lg}} src={review2} alt='Review 1'></motion.img>
            </FloatingComponent>
            
            <FloatingComponent className={`review review-3`}>
                <motion.img style={{y: lg}} src={review3} alt='Review 1'></motion.img>
            </FloatingComponent>
            
            <FloatingComponent className={`review review-4`}>
                <motion.img style={{y: lg}} src={review4} alt='Review 1'></motion.img>
            </FloatingComponent>
            
            <FloatingComponent className={`review emoji-2`}>
                <motion.img style={{y: lg}} src={hornsEmoji} alt='Horns Emoji'></motion.img>
            </FloatingComponent>
            
            <FloatingComponent className={`review review-5`}>
                <motion.img style={{y: lg}} src={review5} alt='Review 1'></motion.img>
            </FloatingComponent>
            
            <FloatingComponent className={`review review-6`}>
                <motion.img style={{y: lg}} src={review6} alt='Review 1'></motion.img>
            </FloatingComponent>
            <FloatingComponent className={`review review-7`}>            
                <motion.img style={{y: lg}} src={review7} alt='Review 1'></motion.img>
            </FloatingComponent>
        </section>
    )
}

export default ReactionSection