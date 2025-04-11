import './hero.css'
//components
import ContactCTA from '../yellowCTA/YellowCTA.jsx'
import { Link } from 'react-router-dom'
//images
import testImg from '../../assets/test-img-hero.gif'



const Hero = () => {
    return (
        <section className='hero__MainContainer' id='heroSection'>          
                <div className='row p-0 m-0 hero__Row-Container'>                    
                    <div className='column-Middle col-12'>
                        <h1 className='title-1'>
                            Performance-Driven
                            <br />
                            <span className='title-2'> Design, Right</span>                                                    
                        </h1>                                               
                        
                    </div>  

                    <div className='column-Middle-2 col-12'>
                        <h1 className='title-1'>                                                        
                            <span className='title-2'>When You </span>
                            <span className='hero__Image-Container'>
                                <img src={testImg} className='hero__Image' /></span>
                            <span className='title-3'> Need It.</span>
                        
                        </h1>                        
                        <img src={testImg} className='hero__Image-Cel' />
                        <h2 className='hero__Subtitle'>Your creative team’s BFF: fast, on-brand, performance-driven design without the messy group chats and missed deadlines.</h2>                        
                        <Link to={"/contact"}>
                            <ContactCTA text={"Let's Do This!"}/>
                        </Link>
                    </div>  

                </div>
            
        </section>
    )
}

export default Hero