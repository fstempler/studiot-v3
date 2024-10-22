import './algorithmSection.css'
//Images
import dance from '../../assets/breakdance.gif'
import computer from '../../assets/computer-1.png'

const AlgorithmSection = () => {
    return (
        <div className='algorithm__MainContainer'>
            <div className='row m-0'>
                <div className='col-12 col-md-5 algorithm__LeftColumn'>
                    <h2 className='algorithm__Title'>LET'S BREAK</h2>
                    <div className='share__BadgeContainer'>
                        <p className='share__Badge'>SHARE</p>
                    </div>
                    <div className='algorithm__SubTitleContainer'>
                        <p className='algorithm__SubTitle'>THE ALGORITHM</p>
                    </div>
                    <div className='love__BadgeContainer'>
                        <p className='love__Badge'>LOVE</p>
                    </div>
                    <div className='algorithm__LeftImageContainer'>
                        <img className='algorithm__LeftImage' src={dance} alt='Dacing Lady Image' />
                    </div>
                </div>
                <div className='col-12 col-md-7 algorithm__RightColumn'>
                  <div className='algorithm__RightImageContainer'>
                        <img className='algorithm__RightImage' src={computer} alt='Computer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlgorithmSection