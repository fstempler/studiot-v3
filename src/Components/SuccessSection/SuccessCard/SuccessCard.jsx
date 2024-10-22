import './successCard.css'



const SuccessCard = ({ alt, image, text }) => {
    return (
        <div className="successCard__Container" >
            <div className='succesCard__Text-Container'>
                <p className='successCard__Text'>
                    {text}
                </p>
            </div>
            <div className="succesCard__ImageContainer">                
                <img src={image} className='succesCard__Image' alt={alt} />
            </div>
        </div>
    )
}

export default SuccessCard