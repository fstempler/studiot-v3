import './designersSection.css'
//Images
import star from '../../assets/Star-Shape.png'
//Components
import Card from './DesignerSectionCard/DesignerSectionCard'

const DesignersSection = () => {
    return (
        <section className='designersSection__MainContainer'>
            <div className='designersSection__Container'>
                <div className='row designersSection__Row'>
                    <div className='col-12 col-md-6 designersSection__LeftColumn'>

                    </div>
                    <div className='col-12 col-md-6 designersSection__RightColumn'>
                        <div className='designersSection__ImageContainer'>
                            <img src={star} className='designersSection__Image' alt='Star' />
                        </div>
                        <div className='designersSection__ContentContainer'>
                            <div className='designersSection__CarouselContainer'>
                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <Card title={"Expert Designers at Your Fingertips"} text={"Work with top-tier talent experienced in advertising and marketing design. Our team knows what it takes to create visuals that captivate and convert."} />
                                    </div>
                                    <div className="carousel-item">
                                        <Card title={"Expert Designers at Your Fingertips"} text={"Work with top-tier talent experienced in advertising and marketing design. Our team knows what it takes to create visuals that captivate and convert."} />
                                    </div>
                                    <div className="carousel-item">
                                        <Card title={"Expert Designers at Your Fingertips"} text={"Work with top-tier talent experienced in advertising and marketing design. Our team knows what it takes to create visuals that captivate and convert."} />
                                    </div>
                                  </div>
                                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                  </button>
                                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                  </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default DesignersSection;