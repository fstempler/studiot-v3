import './blackCTA-sm.css'

const BlackCTA = ( {text} ) => {
    return (        
        <>
        <div className='blackCTA-sm__mainContainer'>
        <div className='blackCTA-sm__container-1'>
            <div className='blackCTA-sm__container-2'>
              <div className='blackCTA-sm__container-3'>
                {text}
              </div>
            </div>
        </div>
        </div>
        </>

    )
}

export default BlackCTA