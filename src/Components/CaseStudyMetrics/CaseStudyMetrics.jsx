import './caseStudyMetrics.css'
//Images
import PinkSparkMockUp from '../../assets/pinkSparkMockUp.png'

const CaseStudyMetrics = () => {
    return (
        <div className='caseStudyMetrics__Main-Container'>
            <div className='row p-0 m-0 caseStudyMetrics__Row'>
                <div className='col-12 col-sm-5 caseStudyMetrics__Column-Left'>
                    <p className='caseStudyMetrics__Text'>Fahlo we’ve delivered</p>
                    <h2 className='caseStudyMetrics__Number'>41m+</h2>
                    <p className='caseStudyMetrics__Text'>organic views and</p>
                    <h2 className='caseStudyMetrics__Number'>24m+</h2>
                    <p className='caseStudyMetrics__Text'>influencer views with one skit getting</p>
                    <h2 className='caseStudyMetrics__Number'>5.9m</h2>
                    <p className='caseStudyMetrics__Text'>organic views</p>
                </div>
                <div className='col-12 col-sm-7 caseStudyMetrics__Column-Right'>
                    <img src={PinkSparkMockUp} alt="Pink Spark" className='pinkSpark' />
                </div>
            </div>
        </div>
    )
}

export default CaseStudyMetrics