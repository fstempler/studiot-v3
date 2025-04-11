import './hero.css'
//components
import ContactCTA from '../yellowCTA/YellowCTA.jsx'
import { Link } from 'react-router-dom'
//images
import testImg from '../../assets/test-img-hero.png'
//video
import testVid from '../../assets/test-vid-hero.mp4'



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
                            <video  autoPlay  muted  loop  playsInline  className='hero__Image'>
                                <source src={testVid} type="video/mp4" />
                                <img src={testImg} alt="Animación decorativa" />
                            </video>
                                
                            </span>
                            <span className='title-3'> Need It.</span>
                        
                        </h1>                        
                            <video  autoPlay  muted  loop  playsInline  width="80%" className='hero__Image-Cel'>
                                <source src={testVid} type="video/mp4" />
                                {/* <img src={testImg} alt="Animación decorativa" /> */}
                            </video>
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