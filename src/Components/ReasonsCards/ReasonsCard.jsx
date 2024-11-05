import './reasons.css'

const ReasonsCard = ({ title, img, alt, text }) => {
    return (
        <div className='reasonsCard__Container'>
            <img src={img} className='reasonsCard__Img' alt={alt} />
            <h2 className='reasonsCard__Title'>{title}</h2>
            
            <p className='reasonsCard__Text'>{text}</p>
        </div>
    )
}

export default ReasonsCard;