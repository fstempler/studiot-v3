import './styles/pricing.css'

const Pricing = () => {
    return (
        <div className='pricing__MainContainer'>
            <div className='pricing__Title-Container'>
                <h2 className='pricing__MainTitle'></h2>
            </div>
            <div className='pricing__Data-Container'>
            <div className='row pricing__ColumnsContainer'>
                <div className='col-12 col-sm-12 col-md-4 pricing__LeftColumn'>
                    <div className='pricing__Content-Container pricing__Content-Container-Left'>
                        <div className='pricing__Title-Container'>
                            <h2 className='pricing__Title'>Starter</h2>
                            <p className='pricing__Text'>Existing assets that just need tweaks</p>
                        </div>
                        
                        <div className='pricing__Level-Container'>
                            <div className='pricing__Level'>Level 1</div>
                            <h3 className='pricing__Prices'>20 Hours <br/> $1,600</h3>
                        </div>
                        
                    </div>                    
                </div>
                <div className='col-12 col-sm-12 col-md-4 pricing__MiddleColumn'>
                    <div className='pricing__Content-Container'>
                        <div className='pricing__Title-Container'>
                            <h2 className='pricing__Title'>Design Essentials</h2>
                            <p className='pricing__Text'>Quickly and easily meet your creative needs <br/><br/></p>
                        </div>
                        
                        <div className='pricing__Level-Container'>
                            <div className='pricing__Level'>Level 2</div>
                            <h3 className='pricing__Prices'>30 Hours <br/> $2,400</h3>
                        </div>
                        <div className='pricing__Level-Container'>
                            <div className='pricing__Level'>Level 3</div>
                            <h3 className='pricing__Prices'>50 Hours <br/> $3,900</h3>
                        </div>
                    </div>                    
                </div>
                <div className='col-12 col-sm-12 col-md-4 pricing__RightColumn'>
                    <div className='pricing__Content-Container'>
                        <div className='pricing__Title-Container'>
                            <h2 className='pricing__Title'>Digital Advertising</h2>
                            <p className='pricing__Text'>Creative designed for growth + performance marketing</p>
                        </div>
                        
                        <div className='pricing__Level-Container'>
                            <div className='pricing__Level'>Level 4</div>
                            <h3 className='pricing__Prices'>70 Hours <br/> $5,320</h3>
                        </div>
                        <div className='pricing__Level-Container'>
                            <div className='pricing__Level'>Level 5</div>
                            <h3 className='pricing__Prices'>90 Hours <br/> $6,570</h3>
                        </div>
                    </div>                    
                </div>
            </div>
            <div className='row pricing__Row'>
                <p className='pricing__Row-Content'>Cost per month. Hours roll over for 3 months. Additional hours are $76/hour.</p>
            </div>
            </div>
        </div>
    )
}

export default Pricing