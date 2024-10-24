import './carouselCard.css'



const CarouselCard = ( {imgSrc, Title, alt, isLarge} ) => {
    return(
        <div className={`card carouselCard__MainContainer ${isLarge ? 'large' : 'small'}`}>
          <div className='carouselCard__ImgContainer'>
            <img src={imgSrc} className="card-img-top carouselCard__Img" alt={alt}/>
          </div>
          
          <div className="card-body">
            <h5 className="card-title carouselCard__Title">{Title}</h5>            
          </div>
        </div>
    )
}
export default CarouselCard