import './designerSectionCard.css'

const DesignersSectionCard = ( {title, text} ) => {
    return (
        <div className='designersSectionCard__Container'>
            <div className='designersSectionCard__Title-Container'>
                <h2 className='designersSectionCard__Title'>{title}</h2>
            </div>
            <div className='designersSectionCard__Text-Container'>
                <h2 className='designersSectionCard__Text'>{text}</h2>
            </div>
        </div>
    )
}

export default DesignersSectionCard;