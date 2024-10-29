import './hero.css'
//components
import ContactCTA from '../yellowCTA/YellowCTA.jsx'
//images


const Hero = () => {
    return (
        <section className='hero__MainContainer' id='heroSection'>
            <div className='container m-0 p-0'>
                
                    <div className='hero__Title-Container active-background'>
                        <h1 className='hero__Title'>Brilliant Design. Fast, Fresh, And Always On Time.</h1>
                        <div className='hero__Btn-Container'>
                            <ContactCTA text={"Talk To Us"}/>
                        </div>
                        
                    </div>                    
                
            </div>
        </section>
    )
}

export default Hero