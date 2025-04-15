import './chatSection.css'
//Components
import { Link } from 'react-router-dom'
import ContactCTA from '../yellowCTA/YellowCTA.jsx'

const ChatSection = () => {
    return (
        <section className='chatSection__MainContainer'>
            <div className='chatSection__Text-Container'>
                <h3 className='chatSection__Text1'>Still Thinking?</h3>
                <div className='chatSection__Text2-Container'>
                    <h3 className='chatSection__Text2'>Let's Chat!</h3>
                    <Link to={"/contact"} className='contact__BTN'><ContactCTA text={"Contact Us"}/></Link>
                </div>                
                <div className='chatSection__Text3'>
                    <p>
                        Questions? Compliments?<br/>Wanna gossip about trends?<br/>Hit us up.
                    </p>                    
                </div>
            </div>
            <div className='chatSection__SubText-Container'>
                <h3 className='chatSection__SubText1'>Thx for stopping by. <br />Your creative <span className='chatSection__SubText2'>glow-up</span> awaits. Still Thinking?</h3>
                
            </div>
        </section>
    )
}

export default ChatSection;