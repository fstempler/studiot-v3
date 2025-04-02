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
                        <h2 className='designerSection__Title'>Ready To Upgrade Your Creative Game?</h2>
                        <br/>
                        <p className='designerSection__Text'><i className="bi bi-check-circle-fill"></i> No more missed deadlines. No more meh ads.</p>
                        <br/>
                        <p className='designerSection__Text'><i className="bi bi-check-circle-fill"></i> Just high-performing, on-brand creative. Delivered fast.</p>                            
                    </div>
                    <div className='designerSection__Btn-Container'>
                        <Link to={"/contact"}><ContactCTA text={"Let's Level Up Your Creative"}/></Link>
                    </div>
                </div>

            
        </section>
    )
}

export default DesignersSection;