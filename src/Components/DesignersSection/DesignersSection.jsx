import './designersSection.css'
//Images
import star from '../../assets/Star-Shape.png'
//Components
import { Link } from 'react-router-dom'
import ContactCTA from '../yellowCTA/YellowCTA.jsx'

const DesignersSection = () => {
    return (
        <section className='upgradeSection__MainContainer' id='designersSection'>            

                <div className='upgradeSection__Container'>
                    <div className='upgradeSection__Text-Container'>
                        <h2 className='designerSection__Title'>Ready to <br /><span className='designerSection__Title2'>upgrade your</span> <br />creative game?</h2>
                        <br/>
                        <p className='designerSection__Text'>No more missed deadlines.</p>                        
                        <p className='designerSection__Text'>No more meh ads.</p>
                        <p className='designerSection__Text'>Just <strong>high-performing, on-brand creative.</strong></p>                            
                        <p className='designerSection__Text'><strong>Delivered fast.</strong></p>                            
                    </div>
                    <div className='designerSection__Btn-Container'>
                        <Link to={"/contact"}><ContactCTA text={"Get Started Today"}/></Link>
                    </div>
                </div>

            
        </section>
    )
}

export default DesignersSection;