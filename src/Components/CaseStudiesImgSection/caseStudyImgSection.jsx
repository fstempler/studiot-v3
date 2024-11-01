import './caseStudyImgSection.css'
//Images
import tablet from '../../assets/tablet-caseStudy.png'
import greenShape from '../../assets/Green-Shape.png'
import emojiExploding from '../../assets/Emoji-Exploding.png'

const CaseStudyImgSection = () => {
    return (
        <div className='caseStudyImgSection'>
            <div className='row p-0 m-0'>
                <div className='col-12 col-sm-4 column__Left'>
                    <p className='column__Text'><strong>1,000+</strong> conversions</p>
                    <img src={tablet} alt='Tablet'className='tablet__Img'/>
                </div>
                <div className='col-12 col-sm-4 column__Middle'>
                    <p className='column__Text'><strong>500+</strong> conversions</p>
                    <img src={tablet} alt='Tablet'className='tablet__Img'/>
                </div>
                <div className='col-12 col-sm-4 column__Right'>
                    <p className='column__Text'><strong>2,000+</strong> conversions</p>
                    <img src={tablet} alt='Tablet'className='tablet__Img'/>
                </div>
            </div>
            <div className='row p-0 m-0'>
                <div className='col-12 col-sm-4 column__Left'>                    
                    <img src={greenShape} alt='Tablet' className='bottomImage'/>
                </div>
                <div className='col-12 col-sm-4 column__Middle'>
                    <p className='column__Text'>Over</p>                    
                    <h2 className='column__Text-Title'>3,500<br></br>purchases</h2>
                    <p className='column__Text'>(combined from these 3 videos)</p>
                </div>
                <div className='col-12 col-sm-4 column__Right'>                    
                    <img src={emojiExploding} alt='Tablet' className='bottomImage'/>
                </div>
            </div>
        </div>
    )
}

export default CaseStudyImgSection