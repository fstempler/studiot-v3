import './ourWorkCard.css'

const OurWorkCard = ({ img, alt, shape }) => {
    return (
        <div className={`ourWorkCard__Container ${shape === 'square' ? 'card--square' : 'card--rectangle'}`}>
            <img src={img} alt={alt} className='ourWorkCard__Img' />
        </div>
    )
}

export default OurWorkCard