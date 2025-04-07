import './creativeCaseStudies.css'
//components
import { Link } from 'react-router-dom';
import YellowCTA from '../yellowCTA/YellowCTA'
//images
import TikTokLogo from '../../assets/tiktok-logo.png'
import AlibabaLogo from '../../assets/alibaba-logo.png'
import FootlockerLogo from '../../assets/footlocker-logo.png'

const CreativeCaseStudies = () => {
    return (
        <section className='CCS__MainContainer'>
            <div className='CCS__Title-Container'>
                <h2 className='CCS__Title1'>Creative<br/> <span className='CCS__Title2'>That</span> <span className='CCS__Title3'> Hits <br/>Different</span></h2>
                <Link to={"/contact"}><YellowCTA text="Show Me the Magic 🪄"/></Link>
            </div>
            <div className='CCS__Clients-Container'>
                <h2 className='CCS__Clients-Title'>
                    Wanna see how we turned meh into magic?
                    <br />
                    <span className='CCS__Clients-Subtitle'>Check out:</span>
                </h2>                
                <div className='CCS__Clients-Card'>
                    <img src={TikTokLogo} alt='TikTok Logo'/>
                    <h3 className='CCS__Clients-Text'><strong>TikTok: Boosted CTR by 30%</strong> with scroll-stopping ads.</h3>
                </div>
                <div className='CCS__Clients-Card'>
                    <img src={AlibabaLogo} alt='Alibaba Logo'/>
                    <h3 className='CCS__Clients-Text'><strong>Alibaba:</strong> Turned their <strong>branding into a vibe.</strong></h3>
                </div>
                <div className='CCS__Clients-Card'>
                    <img src={FootlockerLogo} alt='Footlocker Logo'/>
                    <h3 className='CCS__Clients-Text'><strong>Foot Locker:</strong> Made sneakers <strong>look even cooler.</strong></h3>
                </div>
            </div>
        </section>
    )
}

export default CreativeCaseStudies;