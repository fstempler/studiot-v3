import './hero.css'
//components
import ContactCTA from '../yellowCTA/YellowCTA.jsx'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
//images
import pinkSpark from '../../assets/pink-spark-lg.png'
import heroText from '../../assets/hero-text.png'
import hornsEmoji from '../../assets/Horns-Emoji.png'

const Hero = () => {
    return (
        <section className='hero__MainContainer' id='heroSection'>          
                <div className='row p-0 m-0 hero__Row-Container'>
                    <div className='column-Left col-12 col-md-4'>
                        <motion.img 
                            src={pinkSpark} 
                            alt='pinkSpark' 
                            className='hero__PinkSpark'
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
                            ></motion.img>
                    </div>
                    <div className='column-Middle col-12 col-md-5'>
                        <h1 className='title-1'>
                            Performance-Driven
                            <br />
                            <span className='title-1-subtitle'> Design, Right <br/>When You</span>
                            <span> Need It.</span>
                        
                        </h1>                        
                        
                        <Link to={"/contact"}>
                            <ContactCTA text={"Get Started"}/>
                        </Link>
                    </div>
                    <div className='column-Right col-12 col-md-3'>
                        <motion.img 
                            src={hornsEmoji} 
                            alt='Horns Emoji' 
                            className='hero__HornsEmoji'
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
                        ></motion.img>
                    </div>
                </div>
            
        </section>
    )
}

export default Hero