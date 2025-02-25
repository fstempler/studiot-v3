import './blackCTA.css'

const BlackCTA = ( {text} ) => {
    return (        
        <>
        <div className='blackCTA__mainContainer'>
        <div className='blackCTA__container-1'>
            <div className='blackCTA__container-2'>
              <div className='blackCTA__container-3'>
                {text}
              </div>
            </div>
        </div>
        </div>
        </>

    )
}

export default BlackCTA