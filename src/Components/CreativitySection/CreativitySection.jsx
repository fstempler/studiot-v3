import './creativitySection.css'

const CreativitySection = () => {
    return(
        <section className='creativity__MainContainer' id='creativitySection'>
            
                <div className="row creativity__Row">
                    <div className='col-12 col-md-4 creativity__LeftContainer'>
                        <div className='creativity__TitleContainer'>
                            <h2 className='creativity__Title'>Where creativity sparks the conversation</h2>
                        </div>
                        <div className='creativity__TextContainer'>
                            <p className='creativity__Text'><strong>Studio t</strong> elevates your brand with bold design and content that stands out, while <strong>Taktical</strong> makes sure your message reaches the right audience, fast and effectively. <br/><br/>At the heart of it all is our <strong>Viral Creative Specialists</strong>, a group of specialists who know exactly how to make your content spread online. We fuel authentic conversations, we create content that isn’t just seen, but shared, remembered, and drives conversions.</p>
                        </div>
                        <div className='creativity__AccordionContainer-CelMain'>
                          <div className='creativity__AccordionContainer-cel'>

                            <div className='creativity__AccordionBadge'>
                                <p className='serviceBadge__Text'>TOP SERVICE</p>
                            </div>
                            <div className="accordion accordion__MainContainer" id="accordionExample">
                                <div className="accordion-item creativity__accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button creativity__accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Viral Creative Specialist
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className='creativity__Accordion-Btn'>
                                                <p className='creativity__Accordion-Btn-Text'>Original organic content</p>
                                            </div>
                                            <div className='creativity__Accordion-Btn'>
                                                <p className='creativity__Accordion-Btn-Text'>Influencer Marketing</p>
                                            </div>
                                            <div className='creativity__Accordion-Btn'>
                                                <p className='creativity__Accordion-Btn-Text'>Photo / Video Production</p>
                                            </div>                                   
                                        </div>
                                    </div>
                                </div>  

                            </div>

                        </div>
                        
                        
  
                        </div>
                    </div>



                    <div className='col-12 col-md-8 creativity__RightContainer'>
                        <div className='creativity__TextContainer-cel'>
                            <p className='creativity__Text'><strong>Studio t</strong> elevates your brand with bold design and content that stands out, while <strong>Taktical</strong> makes sure your message reaches the right audience, fast and effectively. <br/><br/>At the heart of it all is our <strong>Viral Creative Specialists</strong>, a group of specialists who know exactly how to make your content spread online. We fuel authentic conversations, we create content that isn’t just seen, but shared, remembered, and drives conversions.</p>
                        </div>

                        <div className='creativity__AccordionContainer'>

                            <div className='creativity__AccordionBadge'>
                                <p className='serviceBadge__Text'>TOP SERVICE</p>
                            </div>
                            <div className="accordion accordion__MainContainer" id="accordionExample">
                                <div className="accordion-item creativity__accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button creativity__accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Viral Creative Specialist
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className='creativity__Accordion-Btn'>
                                            <p className='creativity__Accordion-Btn-Text'>Original organic content</p>
                                        </div>
                                        <div className='creativity__Accordion-Btn'>
                                            <p className='creativity__Accordion-Btn-Text'>Influencer Marketing</p>
                                        </div>
                                        <div className='creativity__Accordion-Btn'>
                                            <p className='creativity__Accordion-Btn-Text'>Photo / Video Production</p>
                                        </div>                                   
                                    </div>
                                </div>
                            </div>  

                        </div>
                        
  
                        </div>
                    </div>
                </div>
            
        </section>
    )
}

export default CreativitySection