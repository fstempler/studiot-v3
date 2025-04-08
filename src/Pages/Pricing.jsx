import './styles/pricing.css'

const Pricing = () => {
    return (
        <div className='pricing__MainContainer'>
            <div className='pricing__Title-Container'>
                <h2 className='pricing__MainTitle'>Flexible <span className='pricing__MainTitle2'>Plans</span> For <span className='pricing__MainTitle2'>Every Brand</span></h2>
            </div>
            <div className='pricing__Data-Container'>
            <div className='row credit__ColumnsContainer'>
                <div className='col-12 col-md-6 credit__Content-Container-Left'>
                    <div className='credit__Content-Container-Content'>
                        <div className='credit__Title'>
                            1 - Credit Per Hour Assets
                        </div>
                        <div className='credit__Content'>
                            Display /Static Social Ads / Email / Designs / Graphics / Story / Static Posts / Amazon Content
                        </div>
                        <div className='credit__Content'>
                            Lead Magnets
                            Presentation Graphics / Templates
                        </div>
                        <div className='credit__Content'>
                            Ad Copywriting
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 credit__Content-Container-Right'>
                    <div className='credit__Content-Container-Content'>
                        <div className='credit__Title'>
                            1.5 - Credit Per Hour Assets
                        </div>
                        <div className='credit__Content'>
                            Motion Design
                            Animated + Motion Graphics
                            Video Editing
                        </div>
                        <div className='credit__Content'>
                            Web Design
                            Landing Pages / UX/UI Audit
                        </div>
                        <div className='credit__Content'>
                            Ad Concepts
                        </div>                    
                    </div>
                </div>
            </div>
            <div className='row pricing__ColumnsContainer'>
                <div className='col-12 col-sm-12 col-md-4 pricing__LeftColumn'>
                    <div className='pricing__Content-Container pricing__Content-Container-Left'>
                        
                        <div className='pricing__Level-Container'>
                            <div className='pricing__Level'>Level 1</div>
                            <h3 className='pricing__Prices'>20 Credits <br/> $1,600</h3>
                        </div>

                        <div className='pricing__Level-Container'>
                            <div className='pricing__Level'>Level 2</div>
                            <h3 className='pricing__Prices'>30 Credits <br/> $2,400</h3>
                        </div>
                        
                    </div>                    
                </div>
                <div className='col-12 col-sm-12 col-md-4 pricing__MiddleColumn'>
                    <div className='pricing__Content-Container'>
                        
                        <div className='pricing__Level-Container'>
                            <div className='pricing__Level'>Level 3</div>
                            <h3 className='pricing__Prices'>50 Credits <br/> $3,900</h3>
                        </div>

                        <div className='pricing__Level-Container'>
                            <div className='pricing__Level'>Level 4</div>
                            <h3 className='pricing__Prices'>70 Credits <br/> $5,320</h3>
                        </div>
                    </div>                    
                </div>
                <div className='col-12 col-sm-12 col-md-4 pricing__RightColumn'>
                    <div className='pricing__Content-Container'>
                        
                        <div className='pricing__Level-Container'>
                            <div className='pricing__Level'>Level 5</div>
                            <h3 className='pricing__Prices'>90 Credits <br/> $6,570</h3>
                        </div>

                        <div className='pricing__Level-Container'>
                            <div className='pricing__Level'>Level 6</div>
                            <h3 className='pricing__Prices'>Custom <br/><br/></h3>
                        </div>
                    </div>                    
                </div>
            </div>
            <div className='row pricing__Row'>
                <p className='pricing__Row-Content'>Cost per month. Credits roll over for 3 months. Additional credits are $76/credit.</p>
            </div>
            </div>
        </div>
    )
}

export default Pricing