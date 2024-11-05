import './jobsAccordion.css'

const JobsAccordion = ({title, subtitle, time, location, text, id, parentId}) => {
    return (
        
    <div className="accordion" id={id}>
        <div className="accordion-item jobsAccordion-item">
            <h2 className="accordion-header">
                <button 
                    className="accordion-button jobsAccordion-button" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#accordionCollapse${id}`} 
                    aria-expanded="true" 
                    aria-controls={`accordionCollapse${id}`} 
                    >
                    <div className='accordion__Content-Container'>
                        <div className='accordion__Title-Container'>
                            <h3 className='accordion__Title'>
                                {title}
                            </h3>
                            <p className='accordion__Text'>
                                {subtitle}
                            </p>
                        </div>
                        <p className='accordion__Time'>
                            {time}
                        </p>
                        <p className='accordion__Location'>
                            {location}
                        </p>
                    </div>
                </button>
            </h2>
            <div 
            id={`accordionCollapse${id}`} 
            className="accordion-collapse collapse" 
            data-bs-parent={`#${parentId}`}>
                <div className="accordion-body">
                    {text}
                </div>
            </div>
        </div>
    </div>
        
    )
}

export default JobsAccordion