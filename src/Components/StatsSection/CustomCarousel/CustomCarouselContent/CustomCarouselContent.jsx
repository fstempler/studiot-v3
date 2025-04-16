import './customCarouselContent.css'
//images
import eye from '../../../../assets/eye.png';

const CustomCarouselContent = ({ vid, views }) => {
    return (
        <div className='CCC__MainContainer'>
            <div className='CCC__Views-Container'>
                <img src={eye} alt='Views' />
                <h3 className='CCC__Views-Text'>{views}</h3>
            </div>
            <div className='CCC__Video-Container'>
                <video autoPlay muted loop playsInline className='CCC__Video'>
                    <source src={vid} type="video/mp4" />                
                </video>
            </div>
            
        </div>
    )
}

export default CustomCarouselContent;