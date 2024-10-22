import './carouselCard.css'



const CarouselCard = ( {imgSrc, Title, alt} ) => {
    return(
        <div className="card carouselCard__MainContainer">
          <img src={imgSrc} className="card-img-top carouselCard__Img" alt={alt}/>
          <div className="card-body">
            <h5 className="card-title carouselCard__Title">{Title}</h5>            
          </div>
        </div>
    )
}
export default CarouselCard