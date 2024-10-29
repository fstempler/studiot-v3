
import './pinkBtn.css'

const PinkBtn = ({ img, alt }) => {
    return (
        
        <div className='pinkBtn__Container'>
            <img src={img} alt={alt}  className='pinkBtn-Img'/>
            <i className="bi bi-plus-circle-fill pinkBtn__Icon"></i>
        </div>
        
    )
}

export default PinkBtn