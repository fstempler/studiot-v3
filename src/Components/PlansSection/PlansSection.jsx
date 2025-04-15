import './planSection.css'
//Components
import BlackCTA from '../blackCTA/blackCTA';
//Images
import studioTGirl from '../../assets/studioT-girl.png';
import { Link } from 'react-router-dom';

const PlanSection = () => {
    return (
        <section className='planSection__MainContainer' id='pricingSection'>
            <div className='row planSection__RowContainer'>
                <div className='col-md-6 planSection__Title-ColContainer'>
                    <h2 className='planSection__Title'>Flexible <span className='planSection__AltTitle'>Plans </span> For <span className='planSection__AltTitle'>Every Brand</span></h2>                                                            
                </div>
                <div className='col-md-6 planSection__Title-ColContainer'>
                    <h2 className='planSection__Title2'><span className='planSection__AltTitle2'>$1,600/</span> Month</h2>
                </div>

            </div>
            <div className='row planSection__RowContainer'>
                <div className='col-md-6 planSection__ColContainer'>
                    
                    <div className='planSection__Plan-Container'>
                        <h4 className='planSection__Plan-Title'>1 - Credit Per Hour Assets</h4>
                        <h4 className='planSection__Plan-Subtitle'>What You’ll Get</h4>
                        <hr />
                        <ul>
                            <li>
                                <p className='planSection__Text'><i className="bi bi-check-circle-fill"></i> Display</p>
                            </li>
                            <li>
                                <p className='planSection__Text'><i className="bi bi-check-circle-fill"></i> Static Social Ads</p>
                            </li>
                            <li>
                                <p className='planSection__Text'><i className="bi bi-check-circle-fill"></i> Email</p>
                            </li>
                            <li>
                                <p className='planSection__Text'><i className="bi bi-check-circle-fill"></i> Designs</p>
                            </li>
                            <li>
                                <p className='planSection__Text'><i className="bi bi-check-circle-fill"></i> Story</p>
                            </li>
                            <li>
                                <p className='planSection__Text'><i className="bi bi-check-circle-fill"></i> Static Posts</p>
                            </li>
                            <li>
                                <p className='planSection__Text'><i className="bi bi-check-circle-fill"></i> Amazon Content</p>
                            </li>
                            <li>
                                <p className='planSection__Text'><i className="bi bi-check-circle-fill"></i> Lead Magnets - Presentation Graphics</p>
                            </li>
                            <li>
                                <p className='planSection__Text'><i className="bi bi-check-circle-fill"></i> Templates</p>
                            </li>
                            <li>
                                <p className='planSection__Text'><i className="bi bi-check-circle-fill"></i> Ad Copywriting</p>
                            </li>
                        </ul>
                        <div className='planSection__CTA-Container'>
                            <Link to={"/pricing"} className='planSection__CTA'><BlackCTA text={"See Pricing & Plans"} /></Link>                        
                        </div>
                        
                    </div>
                    
                </div>
                <div className='col-md-6 planSection__ColContainer'>
                
                <div className='planSection__Plan-Container'>
                        <h4 className='planSection__Plan-Title'>1.5 - Credit Per Hour Assets</h4>
                        <h4 className='planSection__Plan-Subtitle'>What You’ll Get</h4>
                        <hr />
                        <ul>
                            <li>
                                <p className='planSection__Text'><i className="bi bi-check-circle-fill"></i> Motion Design Animated</p>
                            </li>
                            <li>
                                <p className='planSection__Text'><i className="bi bi-check-circle-fill"></i> Motion Graphics Video Editing</p>
                            </li>
                            <li>
                                <p className='planSection__Text'><i className="bi bi-check-circle-fill"></i> Web Design Landing Pages</p>
                            </li>
                            <li>
                                <p className='planSection__Text'><i className="bi bi-check-circle-fill"></i> UX/UI Audit</p>
                            </li>
                            <li>
                                <p className='planSection__Text'><i className="bi bi-check-circle-fill"></i> Ad Concepts</p>
                            </li>                            
                        </ul>
                        <div className='planSection__CTA-Container'>
                            <Link to={"/pricing"} className='planSection__CTA'><BlackCTA text={"See Pricing & Plans"} /></Link>                        
                        </div>
                        
                    </div>                    
                    
                </div>                
            </div>
            <div className='planSection__Image-Container'>
                <img src={studioTGirl} alt='Studio T Girl' className='planSection__Image'/>
            </div>
        </section>
    )
}

export default PlanSection;