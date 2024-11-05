import './styles/careers.css'
//Components
import YellowCTA from '../Components/yellowCTA/YellowCTA'
import Slider from '../Components/Slider/Slider'
import { Link } from 'react-router-dom'
import JobsAccordion from '../Components/JobsAccordion/JobsAccordion'
import ReasonsCard from '../Components/ReasonsCards/ReasonsCard'
//images
import icon1 from '../assets/icon-1.png'
import icon2 from '../assets/icon-2.png'
import icon3 from '../assets/icon-3.png'
import icon4 from '../assets/icon-4.png'
import icon5 from '../assets/icon-5.png'
import icon6 from '../assets/icon-6.png'
import resorte from '../assets/Green-Shape.png'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import CactusEmoji from '../assets/CactusEmoji.png'

const Careers = () => {
    return (
        <>
        <div className='careers__MainContainer'>
            <div className='careers__Hero-Container'>
                <div className='careers__Hero-Title'>
                    <h1 className='careers__Title'>Become <br></br>a part of <br></br>our team</h1>
                </div>
                <Link to={"/contact"}><YellowCTA text={"Talk To Us"} /></Link>
            </div>
        </div>
        <Slider />
        <div className='careers__Security-Container'>
            <p className='carrers__Disclosure'>
                Want to Work with Some of the Most Exciting Brands? How About with One of the Most Exciting Teams?
            </p>
            <h3 className='careers__Disclosure-Subtitle'>Important security Tips!</h3>
            <div className='careers__Disclosure-Container'>
                <p className='careers__Disclosure-Text'>
                    Taktical will never send recruiting messages through SMS texts or as unsolicited emails. If you have been contacted by someone in this manner, they do not represent our company and communications with them should be stopped immediately.
                </p>
            </div>
        </div>
        <div className='openings__Container'>
            <h2 className='careers__Openings-Title'>Job Openings</h2>
            <div className='openings__Accordion-Container'>
                <JobsAccordion 
                title={"Media Buyer - Paid Search/Social"}
                subtitle={"Optimize ad campaigns and make data-driven decisions to maximize our clients’ ROI."}
                time={"FULL TIME"}
                location={"REMOTE"}
                text={"A cool, sharp, witty and talented person to join our team to help manage day to day operations of our agency internally. We’re looking for someone who’s whip-smart and knows how to get results while having fun along the way. If we could describe the perfect candidate for this role, words like analytical, strategic, proactive, organized, and honest come to mind. If you’ve managed operations or worked at an agency in the past, that’s a big bonus!"}
                id={"1"}
                parentId={"1"}
                />
                <JobsAccordion 
                title={"Growth Marketing Content Manager"}
                subtitle={"Drive brand growth through strategic content and engagement across all channels."}
                time={"FULL TIME"}
                location={"REMOTE"}
                text={"A cool, sharp, witty and talented person to join our team to help manage day to day operations of our agency internally. We’re looking for someone who’s whip-smart and knows how to get results while having fun along the way. If we could describe the perfect candidate for this role, words like analytical, strategic, proactive, organized, and honest come to mind. If you’ve managed operations or worked at an agency in the past, that’s a big bonus!"}
                id={"2"}
                parentId={"2"}
                />
                <JobsAccordion 
                title={"Digital Marketing Apprentice - SEO"}
                subtitle={"Learn the ins and outs of digital advertising and help execute high-performing ad campaigns."}
                time={"FULL TIME"}
                location={"REMOTE"}
                text={"A cool, sharp, witty and talented person to join our team to help manage day to day operations of our agency internally. We’re looking for someone who’s whip-smart and knows how to get results while having fun along the way. If we could describe the perfect candidate for this role, words like analytical, strategic, proactive, organized, and honest come to mind. If you’ve managed operations or worked at an agency in the past, that’s a big bonus!"}
                id={"3"}
                parentId={"3"}
                />
                <JobsAccordion 
                title={"Digital Marketing Apprentice - Paid Search/Social"}
                subtitle={"Dive into the world of SEO and support our team in improving website visibility and traffic."}
                time={"FULL TIME"}
                location={"REMOTE"}
                text={"A cool, sharp, witty and talented person to join our team to help manage day to day operations of our agency internally. We’re looking for someone who’s whip-smart and knows how to get results while having fun along the way. If we could describe the perfect candidate for this role, words like analytical, strategic, proactive, organized, and honest come to mind. If you’ve managed operations or worked at an agency in the past, that’s a big bonus!"}
                id={"4"}
                parentId={"4"}
                />
                <div className='openings__CTA-Container'>
                    <Link to={"mailto:careers@taktical.co"}><YellowCTA text={"Submit Resume"} /></Link>
                </div>
                
    
            </div>
        </div>
        <div className='careers__Reasons-Container'>
            <div className='careers__Reasons-Title-Container'>
                <img src={resorte} className='title-image'/>
                <h2 className='careers__Openings-Title'>Reason To Join<br></br>Our Agency</h2>
            </div>
            

            <div className='careers__Reasons-CardContainer'>
                <ReasonsCard
                title={"'Glide Away' Retreats"}
                img={icon6}
                alt={"Travel"}
                text={"Getting together energizes us, so we gather to co-work quarterly."}
                />
                <ReasonsCard
                title={"Friendly Culture"}
                img={icon1}
                alt={"Travel"}
                text={"We want Glide to be a delight to use and highly polished, so we invest in design."}
                />
                <ReasonsCard
                title={"Global Impact"}
                img={icon2}
                alt={"Travel"}
                text={"Glide powers apps in every country & industry, from large companies to local non-profits."}
                />
                <ReasonsCard
                title={"Unlimited Vacation"}
                img={icon5}
                alt={"Travel"}
                text={"You know best when you need a break. The details are up to you."}
                />
                <ReasonsCard
                title={"Work from Anywhere"}
                img={icon4}
                alt={"Travel"}
                text={"Remote is our new reality. We're making the best of it, and we meet up when we can."}
                />
                <ReasonsCard
                title={"Great Backers"}
                img={icon3}
                alt={"Travel"}
                text={"We’re funded by Y Combinator, First Round, and Benchmark, and our angels include the CEOs of GitHub and Figma."}
                />
            </div>
        </div>
        <div className='careers__Life-Container'>
            <div className='row careers__Life-Row'>
                <div className='col-12 col-md-6 careers-columnLeft'>
                    <h2 className="careers__Life-Title">Life At Studio t</h2>
                    <YellowCTA text={"Submit Resume"}/>
                </div>
            <div className='col-12 col-md-6 p-0 m-0'>
                <div className="careers-grid-container">
                    <div className="careers-left">
                        <img src={image1} className='careers-image1'/>
                    </div>
                    <div className="careers-right-top">
                        <img src={image2} className='careers-image2'/>
                        <img src={image3} className='careers-image3'/>
                    </div>
                    <div className="careers-right-bottom">
                        <img src={image4} className='careers-image4'/>
                    </div>
                </div>
            </div>
        </div>

    
    <img src={CactusEmoji} className='cactusEmoji' alt="Cactus Emoji" />
</div>

        
        
        </>
    )
}

export default Careers