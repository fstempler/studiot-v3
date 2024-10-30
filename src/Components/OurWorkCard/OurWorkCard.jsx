import './ourWorkCard.css'

const OurWorkCard = ({ img, alt }) => {
    return (
        <div className='ourWorkCard__Container'>
            <img src={img} alt={alt} className='ourWorkCard__Img' />
        </div>
    )
}

export default OurWorkCard