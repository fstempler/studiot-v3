import './footer.css'
// images
import facebookLogo from '../../assets/facebook-icon.png'
import instagramLogo from '../../assets/instagram-icon.png'
import youtubeLogo from '../../assets/youtube-icon.png'
import studioTLogo from '../../assets/studioT-logo-yellow.png'
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();    

    const handleNavigateToPricing = () => {
        navigate('/#pricingSection');
    }

    return (
        <footer className='footer__MainContainer' id='footer'>
            <div className='footer__Container'>
                <div className='row'>
                    <div className='col-12 col-sm-4 footer__LeftColumn'>
                        <div className='row'>
                            <div className='col-6 col-sm-4 footer__QuickLinks'>
                                <ul className='footer__QuickLinks'>
                                    <li onClick={handleNavigateToPricing}>Services</li>                                    
                                    <li><Link to="/ourWork">Our Work</Link></li>
                                    <li><Link to="/caseStudies">Case Studies</Link></li>
                                </ul>    
                            </div>
                            <div className='col-6 col-sm-4'>
                                <ul className='footer__QuickLinks'>
                                    <li><Link to="/careers">Careers</Link></li>                                    
                                    <li><Link to="/pricing">Pricing</Link></li>                                    
                                </ul>    
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col footer__SocialIcons-Container'>
                                <Link to={"#"}><img className='footer__SocialIcon' src={facebookLogo} alt='Facebook Icon' /></Link>
                                <Link to={"#"}><img className='footer__SocialIcon' src={instagramLogo} alt='Instagram Icon' /></Link>
                                <Link to={"#"}><img className='footer__SocialIcon' src={youtubeLogo} alt='YouTube Icon' /></Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-8 footer__RightColumn'>                        
                        <div className='footer__ImageContainer'>
                            <Link to={"#"}><img className='footer__Image' src={studioTLogo} alt='Footer Image' /></Link>
                        </div>
                    </div>
                </div>
                <div className='row footer__Terms-Container'>
                    <div className='col-12 footer__Terms-LinksContainer'>
                        <Link to={"#"}>Privacy Policy</Link>  
                        <Link to={"#"}>Terms of Service</Link>
                        <Link to={"#"}>© 2025, Studio t</Link>
                    </div>                    
                </div>
            </div>
        </footer>
    )
}

export default Footer;