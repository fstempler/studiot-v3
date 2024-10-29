import './recordSection.css'

//images
import processBar from '../../assets/processBar.png'
//components
import YellowCTA from '../yellowCTA/YellowCTA'

const RecordSection = () => {
    return (
        <section className='recordSection__MainContainer' id='recordSection'>
            <div className='row recordSection__Row'>
                <div className='col-12 col-md-6 recordSecation__LeftColumn'>
                    <h2 className='recordSecation__Title'>
                        Record highs of our hook rate  average  
                    </h2>
                </div>
                <div className='col-12 col-md-6 recordSecation__RightColumn'>
                    <div className='rightColumn__BtnContainer'>
                       {/* <YellowCTA text={"Talk To Us"}/> */}
                    </div>
                    <h2 className='recordSecation__Number'>
                        80%  
                    </h2>
                    <div className='rightColumn__ImageContainer'>
                       <img className='processBar' src={processBar}/>
                    </div>
                </div>

            </div>
            <div className='wave'></div>
        </section>
    )
}

export default RecordSection