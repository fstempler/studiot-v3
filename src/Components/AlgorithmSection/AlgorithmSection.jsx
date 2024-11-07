import './algorithmSection.css'
//Images
import danceLaptop from '../../assets/breakdance.gif'
import computer from '../../assets/laptop-breakdance.gif'
import { useEffect } from 'react'

const AlgorithmSection = () => {

    useEffect (() => {
        const script = document.createElement('script');
        script.src = "https://player.vimeo.com/api/player.js";
        script.async = true;
        document.body.appendChild(script)
        return () => {
            document.body.removeChild(script);
        };
    }, [])

    return (
        <div className='algorithm__MainContainer' id='algorithmSection'>
            <div className='row m-0'>
                <div className='col-12 col-md-6 order-2 order-md-1 algorithm__LeftColumn'>
                    <h2 className='algorithm__Title'>Let's <span className='algorithm__Title-Color'>Break</span></h2>                    
                    <div className='algorithm__SubTitleContainer'>
                        <p className='algorithm__SubTitle'>The Algorithm</p>
                    </div>                    
                    <div className='algorithm__LeftImageContainer'>
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }} >
                            <iframe
                                src="https://player.vimeo.com/video/1027379063?"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; loop"
                                className='video-frame'
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                }}
                                title="Taktical - Brandformance"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 order-1 order-md-2 algorithm__RightColumn'>
                    <h2 className='algorithm__Cel-Title'>Let's Break <span className='algorithm__Title-Color'>Break</span> The Algorithm</h2>                    
                  <div className='algorithm__RightImageContainer'>
                        
                        <img className='algorithm__RightImage' src={computer} alt='Computer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlgorithmSection