import './styles/precisionCaseStudy.css'
//Images
// import Precision from '../assets/PRECISION-LOGO-ICON.gif'
import Precision from '../assets/PRECISION-CS.gif'
import Precision2 from '../assets/Precision-2.png'
import Precision3 from '../assets/Precision-3.png'
import Precision4 from '../assets/Precision-4.gif'
import Precision5 from '../assets/Precision-5.png'
import Precision6 from '../assets/Precision-6.png'
import Precision7 from '../assets/Precision-7.png'
import Precision8 from '../assets/Precision-8.gif'
import Precision9 from '../assets/Precision-8.png'
import Precision10 from '../assets/Precision-9.png'
import check from '../assets/CheckFat.svg'
//Components
import ChatSection from '../Components/ChatSection/ChatSection'


const WwsCaseStudy = () => {
    return (
        <>
        <section className='Precision__CaseStudy-MainContainer'>
            <div className='Precision__hero-container'>
                <h2 className='Precision__hero-tag'>Brand Strategy</h2>
                <div className='Precision__hero-title-container'>
                    <h1 className='Precision__hero-title'>Precision Medicine</h1>
                    <p className='Precision__hero-text'>
                        Unseen Precision, Unmatched Results:
                        <br />
                        How We Transformed Precision Medicine’s Brand Identity
                    </p>
                </div>
                <img src={Precision} alt='Precision' />
                <div className='Precision__hero-stats-container'>
                    <div className='Precision__hero-stats'>
                        <div className='Precision__hero-stats-image-container'>
                            <h2>🚀</h2>
                        </div>
                        <div className='Precision__hero-stats-text-container'>
                            <p>Brand Evolution</p>
                            <h2>From Precision Compounding Pharmacy <strong>to Precision Medicine</strong></h2>
                        </div>
                    </div>
                    <div className='Precision__hero-line-vertical'></div>
                    <div className='Precision__hero-stats'>
                        <div className='Precision__hero-stats-image-container'>
                            <h2>⚡</h2>
                        </div>
                        <div className='Precision__hero-stats-text-container'>
                            <p>New Logo</p>
                            <h2>A symbol of innovation and precision</h2>
                        </div>
                    </div>
                    <div className='Precision__hero-line-vertical'></div>
                    <div className='Precision__hero-stats'>
                        <div className='Precision__hero-stats-image-container'>
                            <h2>💰</h2>
                        </div>
                        <div className='Precision__hero-stats-text-container'>
                            <p>Target Audience</p>
                            <h2>Telemedicine & direct-to-consumer health brands</h2>
                        </div>
                    </div>                    
                </div>
            </div>
            <div className='Precision__hero-challenge-container'>
                <div className='Precision__hero-challenge-title-container'>
                    <h2 className='Precision__hero-challenge-title'>The Challenge</h2>
                    <p className='Precision__hero-challenge-text'>Precision Compounding Pharmacy was evolving. With a rich family legacy in pharmaceutical expertise, they needed a new brand identity that reflected their innovative approach to personalized medicine.</p>
                </div>

                <div className='Precision__hero-challenge-image-container'>
                    <img src={Precision2} alt='Grooved Learning Logo' />                    
                    <img src={Precision3} alt='Grooved Learning Logo' />                    
                </div>

                <div className='Precision__hero-challenge-image2-container'>
                    <img src={Precision4} alt='Grooved Learning Logo' />                    
                </div>
                <div className='Precision__hero-challenge-text-container'>
                    <div className='Precision__hero-challenge-text1'>
                        <p>The challenge? Shedding the traditional pharmacy aesthetic and positioning themselves as a cutting-edge, tech-forward partner for modern telemedicine companies.</p>
                    </div>
                    <div className='Precision__hero-challenge-text2'>
                        <p>Traditional pharmacy branding wouldn’t cut it—Precision Medicine required a bold, contemporary identity that spoke to their mission: providing high-quality, customized medications with precision and care.</p>    
                    </div>                    
                </div>
                <div className='Precision__hero-challenge-image2-container'>
                    <img src={Precision9} alt='Grooved Learning Logo' />                    
                </div>                
            </div>
            <div className='Precision__hero-approach-text-container'>
                    <div className='Precision__hero-approach-text1'>
                        <h2>The Brand First</h2>
                    </div>
                    <div className='Precision__hero-approach-text2'>
                        <p>Our approach wasn’t just about a new name; it was about redefining what a modern pharmacy could be. We worked closely with their leadership team to craft a visual and verbal identity that aligned with their innovative services:</p>    
                    </div>                                    
                                 
            </div>            
            
            <div className='Precision__hero-image-container'>
                <img src={Precision10} alt='Grooved Learning Cap' />                                    
            </div>
            
            
            <div className='Precision__hero-results-container'>
                <div className='Precision__hero-results-title-container'>
                <div className='Precision__hero-approach-text1'>
                        <h2>A logo with meaning</h2>
                    </div>
                    <div className='Precision__hero-approach-text2'>
                        <p>The new mark features a partially hidden “P,” embodying the idea that precision is invisible yet powerful. As their CEO, Chris Stella put it: “Other brands need hours to explain their logos. I can explain ours in five minutes. It’s our unseen P.”</p>    
                    </div>   
                </div>
                <div className='Precision__hero-results-image-container'>
                    <img src={Precision6} alt='Precision' />                    
                </div>
                <div className='Precision__hero-results-title-container'>                    
                    <div className='Precision__hero-results-text1'>
                        <h2>A refined brand voice</h2>
                        <p>A refined brand voice – Messaging that shifts from traditional pharmacy language to a tone that speaks to tech-driven healthcare companies.</p>
                    </div>
                    <div className='Precision__hero-results-text2'>
                        <h2>A modern identity</h2>
                        <p>Clean, sophisticated visuals that stand out in the health-tech space while maintaining trust and credibility.</p>
                    </div>
                    
                </div>
                <div className='Precision__hero-results-image-container'>
                    <img src={Precision7} alt='Grooved Learning T-Shirt' />                    
                </div>

                <div className='Precision__results-container'>

                    <div className='Glearning__hero-solution-bullets-container'>                        
                        <h2>The Results</h2>
                        <p className='Precision__results-text'>Precision Medicine’s transformation wasn’t just a rebrand—it was a repositioning. Their new identity:</p>
                        <div className='Glearning__hero-line-horizontal'></div>
                        
                        <p className='Glearning__hero-solution-bulletts-text'><span><img src={check} alt='check'/></span> Differentiates them from traditional pharmacies</p>
                    
                        <div className='Glearning__hero-line-horizontal'></div>
                        
                        <p className='Glearning__hero-solution-bulletts-text'><span><img src={check} alt='check'/></span> Resonates with digital-first healthcare brands</p>
                        
                        <div className='Glearning__hero-line-horizontal'></div>
                        
                        <p className='Glearning__hero-solution-bulletts-text'><span><img src={check} alt='check'/></span> Establishes them as an industry leader in personalized medicine</p>
                        
                    </div> 
                    <div className='Precision__results-image-container'>
                        <img src={Precision8} alt='Precision' />
                    </div>
                    
                </div>


                
                <div className='Precision__hero-conclusion-container'>
                    <p className='Precision__hero-conclusion-text'>With a sharper focus, a compelling story, and a brand that embodies precision, Precision Medicine is now equipped to lead the next era of modern pharmacy solutions.</p>
                    <h2 className='Precision__hero-conclusion-title'>Rebranding isn’t just about looking different.<br /><span className='Precision__hero-conclusion-title2'>It’s about showing the world who you’ve become.</span></h2>
                    <p className='Precision__hero-conclusion-text'>Ready to evolve your brand? Let’s talk.</p>
                </div>
            </div>
            
        </section>
        <ChatSection />
        </>
    )
}

export default WwsCaseStudy;