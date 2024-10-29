import './servicePopup.css'
import PinkAccordion from '../PinkAccordion/PinkAccordion'

const ServicePopup = ({ img, title, alt, accordionData = [], onClose }) => {    
    return (
        <div className='popup__Overlay' onClick={onClose}>
            <div className='popup__Content' onClick={(e) => e.stopPropagation()}>
                <div className='popup__Image-Container'>
                    <img className='popup__Image' src={img} alt={alt} />
                    <i className="bi bi-x-lg popup__CloseBtn" onClick={onClose}></i>
                </div>
                
                <h2 className='popup__Title'>{title}</h2>
                <div className='accordion__Container' id='accordionParent'>
                    {accordionData.map(({ id, title, content }) => (
                        <PinkAccordion
                            key={id}
                            id={id}
                            title={title}
                            content={content}
                            parentId="accordionParent"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}


export default ServicePopup