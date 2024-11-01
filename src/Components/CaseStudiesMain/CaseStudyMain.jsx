import './caseStudyMain.css'
//Images
import tablet from '../../assets/tablet-caseStudy.png'

const CaseStudyMain = () => {
    return (
        <div className='caseStudyMain__MainContainer'>
            <div className='caseStudyMain__Title-Container'>
                <h2 className='caseStudyMain__Title'>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h2>
            </div>

            <div className='row p-0 m-0 caseStudyMain__Row'>
                <div className='col-12 col-sm-6 caseStudyMain__ColumnLeft'>
                    <img src={tablet} alt='Tablet' className='caseStudyMain__Img'/>
                </div>
                <div className='col-12 col-sm-6 caseStudyMain__ColumnRight'>
                    <div className='caseStudyMain__ColumnRight-Content-Container'>
                        
                        <p className='caseStudyMain__ColumnRight-Content'>Due to the organic success of this video, Tuft and Paw ran an edited version as an ad.</p>
                        
                                                
                        
                        <div className="grid-container1">
                            <div className='content__Container'>
                                <p className='caseStudyMain__ColumnRight-Content-Left-Number'>55%</p>
                                <p className='caseStudyMain__ColumnRight-Content-Left-Text'>(120% average)</p>
                            </div>
                            <div className='content__Container'>
                                <p className='caseStudyMain__ColumnRight-Content-Right-Text'>Hook Rate Industry average is <strong>25%</strong></p>
                            </div>
                        </div>
                        
                        <div className="grid-container2">
                            <div className='content__Container'>
                                <p className='caseStudyMain__ColumnRight-Content-Right-Text'>Hook Rate Industry average is <strong>25%</strong></p>
                            </div>
                            <div className='content__Container'>
                                <p className='caseStudyMain__ColumnRight-Content-Left-Number'>55%</p>
                                <p className='caseStudyMain__ColumnRight-Content-Left-Text'>(120% average)</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudyMain