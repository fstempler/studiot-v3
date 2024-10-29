import './carouselCard.css'



const CarouselCard = ( {imgSrc, alt} ) => {
    return(
        <div className='card carouselCard__MainContainer' >
          <div className='carouselCard__ImgContainer'>
            <img src={imgSrc} className="card-img-top carouselCard__Img" alt={alt}/>
          </div>
          
          
        </div>
    )
}
export default CarouselCard