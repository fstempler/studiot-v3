import './ourWorkCard.css';

const OurWorkCard = ({ img, alt, shape, tag }) => {
    return (
        <>
        <div className={`ourWorkCard__Container ${shape === 'rectangle' ? 'card--rectangle' : 'card--square'}`}>
            {shape === 'rectangle' ? (
                <div style={{ padding: '177.67% 0 0 0', position: 'relative' }}>
                    <iframe
                        src={`${img}?autoplay=1&loop=1&muted=1&badge=0&autopause=0&player_id=0&app_id=58479`} // URL del video con autoplay, loop y mute
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                        allowFullScreen
                        title={alt}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        className="ourWorkCard__Video"
                    ></iframe>
                </div>
            ) : (
                <img src={img} alt={alt} className="ourWorkCard__Img" />
            )}
            
        </div>
        <div className='ourWordCard__Tag-Container'>
            <div className='ourWorkCard__Tag-Text-Container'>
                <h3 className='ourWorkCard__Tag'>{tag}</h3>
            </div>                
        </div>
        </>
    );
};

export default OurWorkCard;
