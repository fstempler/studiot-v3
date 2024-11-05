import './yellowCTANav.css'

const YellowCTANav = ( {text} ) => {
    return (        
        <>
        <div className='navCTA-mainContainer'>
        <div className='navCTA-container-1'>
            <div className='navCTA-container-2'>
              <div className='navCTA-container-3'>
                {text}
              </div>
            </div>
        </div>
        </div>
        </>

    )
}

export default YellowCTANav