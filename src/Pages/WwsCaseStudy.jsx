import './styles/wwsCaseStudy.css'
//Images
import WSScs from '../assets/WSS-CS.gif'
import Adidas1 from '../assets/Addidas-Samba-1.png'
import Adidas2 from '../assets/Addidas-Samba-2.png'
import Adidas3 from '../assets/Addidas-Samba-3.png'
import wwsAdidas from '../assets/WSS-Adidas.gif'


const WwsCaseStudy = () => {
    return (
        <section className='caseStudy__Main-Container'>
            <div className='caseStudy__Hero-Container'>
                <img src={WSScs} alt='WSS' />
                <div className='caseStudy__Title-Container'>
                    <h3 className='caseStudy__Tag'>AI Paid Media</h3>
                    <h2 className='caseStudy__Title'>From Weeks to Hours: <br />How We Transformed WSS’s Content Strategy With AI.</h2>
                    <p className='caseStudy__Text'>
                        🚀 Ad variations created: 3x more
                        <br />
                        ⚡ Production speed: 5x faster
                        <br />
                        💰 Cost savings: Significant reduction in content production costs

                    </p>
                </div>
            </div>
            <div className='caseStudy__Challenge-Container'>
                <div className='caseStudy__Challenge-Text-Container'>
                    <h3 className='caseStudy__Title'>The Challenge</h3>
                    <p className='caseStudy__Text'>
                        WSS needed high-quality sneaker content, and they needed it fast. With a rapidly changing product lineup, traditional creative workflows were too slow, limiting the brand’s ability to experiment and optimize campaigns.
                    </p>                    
                </div>
                <div className='caseStudy__Challenge-Image-Container'>
                    <img src={Adidas1} alt='Adidas Samba' />
                    <img src={Adidas2} alt='Adidas Samba' />
                    <img src={Adidas3} alt='Adidas Samba' />
                </div>
                
            </div>

            <div className='caseStudy__Solution-Container'>
                <div className='caseStudy__Solution-Text-Container'>
                    <h3 className='caseStudy__Solution-Title'>The AI-Powered Solution</h3>                    
                    <p className='caseStudy__Text'>
                    By integrating AI into their content workflow, we were able to:
                    <br />
                    <strong>
                    ✔ Generate fresh sneaker ads instantly<br />
                    ✔ Maintain brand consistency across all platforms<br />
                    ✔ Rapidly test different creative variations for better performance
                    </strong>
                    </p> 
                    <br/>                   
                    <br/>
                </div>
                <div className='caseStudy__Challenge-Image-Container'>

                    <img src={wwsAdidas} alt='Adidas Samba' />                    
                    <div className='caseStudy__Challenge-Text-Container'>
                        <h3 className='caseStudy__Solution-Title'>The Results</h3>
                        <p className='caseStudy__Text'>
                        With AI, we transformed their approach to content creation. <br/>Instead of spending weeks on production, the team now had engaging, on-brand visuals ready in hours—without sacrificing quality.    
                        </p>                    
                    </div>                    
                </div>
                <br/>                   
                <br/>
                <div className='caseStudy__Conclusion-Container'>
                    
                    <div className='caseStudy__Challenge-Text-Container'>                        
                        <p className='caseStudy__Text'>
                        <strong>AI isn’t replacing creativity; it’s amplifying it.</strong>
                        <br />
                        <strong>For WSS, that means more content, more engagement, and more growth.</strong>
                        <br/>
                        Big ideas need bold execution. Let’s build something great.
                        </p>    
                        <br/>                   
                        <br/>                
                    </div>                    
                </div>
            </div>


        </section>
    )
}

export default WwsCaseStudy;