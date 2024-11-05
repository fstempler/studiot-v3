import './yellowCTA.css'

const YellowCTA = ( {text} ) => {
    return (
        // <div className='cta__Container'>
        //     {text}
        // </div>
        <>
        <div className='mainContainer'>
        <div className='container-1'>
            <div className='container-2'>
              <div className='container-3'>
                {text}
              </div>
            </div>
        </div>
        </div>
        </>

    )
}

export default YellowCTA