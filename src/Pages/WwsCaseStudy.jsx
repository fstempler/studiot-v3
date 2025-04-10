import './styles/wwsCaseStudy.css'
//Images
import WSScs from '../assets/WSS-CS.gif'
import Adidas1 from '../assets/Addidas-Samba-1.png'
import Adidas2 from '../assets/Addidas-Samba-2.png'
import Adidas3 from '../assets/Addidas-Samba-3.png'
import wwsAdidas from '../assets/WSS-Adidas.gif'
import check from '../assets/CheckFat.svg'
import conclusion from '../assets/WWS-CONCLUSION.gif'
//Components
import ChatSection from '../Components/ChatSection/ChatSection'


const WwsCaseStudy = () => {
    return (
        <>
        <section className='WWS__CaseStudy-MainContainer'>
            <div className='WWS__hero-container'>
                <h2 className='WWS__hero-tag'>AI Paid Media</h2>
                <div className='WWS__hero-title-container'>
                    <h1 className='WWS__hero-title'>WWS</h1>
                    <p className='WWS__hero-text'>
                        From Weeks to Hours:
                        <br />
                        How We Transformed WSS’s Content Strategy With AI.
                    </p>
                </div>
                <img src={WSScs} alt='WSS' />
                <div className='WWS__hero-stats-container'>
                    <div className='WWS__hero-stats'>
                        <div className='WWS__hero-stats-image-container'>
                            <h2>🚀</h2>
                        </div>
                        <div className='WWS__hero-stats-text-container'>
                            <p>Ad variations created</p>
                            <h2>3x more</h2>
                        </div>
                    </div>
                    <div className='WWW__hero-line-vertical'></div>
                    <div className='WWS__hero-stats'>
                        <div className='WWS__hero-stats-image-container'>
                            <h2>⚡</h2>
                        </div>
                        <div className='WWS__hero-stats-text-container'>
                            <p>Production speed</p>
                            <h2>5x faster</h2>
                        </div>
                    </div>
                    <div className='WWW__hero-line-vertical'></div>
                    <div className='WWS__hero-stats'>
                        <div className='WWS__hero-stats-image-container'>
                            <h2>💰</h2>
                        </div>
                        <div className='WWS__hero-stats-text-container'>
                            <p>Cost savings</p>
                            <h2 className='WWS__hero-stats3-text'>Significant reduction<br />in content production costs</h2>
                        </div>
                    </div>                    
                </div>
            </div>
            <div className='WWS__hero-challenge-container'>
                <div className='WWS__hero-challenge-title-container'>
                    <h2 className='WWS__hero-challenge-title'>The Challenge</h2>
                    <p className='WWS__hero-challenge-text'>WSS needed high-quality sneaker content, and they needed it fast. With a rapidly changing product lineup, traditional creative workflows were too slow, limiting the brand’s ability to experiment and optimize campaigns.</p>
                </div>
                <div className='WWS__hero-challenge-image-container'>
                    <img src={Adidas1} alt='WSS Adidas' />
                    <img src={Adidas2} alt='WSS Adidas' />
                    <img src={Adidas3} alt='WSS Adidas' />
                </div>
            </div>
            <div className='WWS__hero-solution-container'>
                <div className='WWS__hero-solution-title-container'>
                    <h2 className='WWS__hero-solution-title'>The AI-Powered Solution</h2>
                    <p className='WWS__hero-solution-text'>By integrating AI into their content workflow, we were able to</p>
                    <div className='WWS__hero-solution-bullets-container'>
                        <div className='WWW__hero-line-horizontal'></div>
                        <p className='WWW__hero-solution-bulletts-text'><span><img src={check} alt='check'/></span> Generate fresh sneaker ads instantly</p>
                        <div className='WWW__hero-line-horizontal'></div>
                        <p className='WWW__hero-solution-bulletts-text'><span><img src={check} alt='check'/></span> Maintain brand consistency across all platforms</p>
                        <div className='WWW__hero-line-horizontal'></div>
                        <p className='WWW__hero-solution-bulletts-text'><span><img src={check} alt='check'/></span> Rapidly test different creative variations for better performance</p>
                    </div>
                    
                </div>
                <div className='WWS__hero-solution-image-container'>
                    <img src={wwsAdidas} alt='WSS Adidas' />                    
                </div>
            </div>
            
            <div className='WWS__hero-results-container'>
                <div className='WWS__hero-results-title-container'>
                    <h2 className='WWS__hero-results-title'>The Results</h2>
                    <p className='WWS__hero-results-text'>With AI, we transformed their approach to content creation. Instead of spending weeks on production, the team now had engaging, on-brand visuals ready in hours—without sacrificing quality.</p>
                </div>
                <div className='WWS__hero-results-image-container'>
                    <img src={conclusion} alt='WSS Adidas' />                    
                </div>
                <div className='WWS__hero-conclusion-container'>
                    <h2 className='WWS__hero-conclusion-title'>AI isn’t replacing creativity; <span className='WWS__hero-conclusion-title2'>it’s amplifying it.</span></h2>
                    <p className='WWS__hero-conclusion-text'>For WSS, that means more content, more engagement, and more growth. Big ideas need bold execution. Let’s build something great.</p>
                </div>
            </div>
            
        </section>
        <ChatSection />
        </>
    )
}

export default WwsCaseStudy;