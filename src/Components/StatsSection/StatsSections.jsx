import './statsSection.css';
//components
import CustomCarousel from './CustomCarousel/CustomCarousel';
//images


const StatsSection = () => {
    return (
        <section className='statsSection__MainContainer'>
            <div className='row'>
                <div className='col-md-4 order-1 order-md-1'>
                    <div className='statsSection__Title-Container-Left'>
                        <h2 className='statsSection__Title1'>Stats</h2>
                    </div>                    
                </div>
                <div className='col-md-4 order-3 order-md-2'>
                    <div className='statsSection__Title-Container-Middle'>
                        <CustomCarousel />
                    </div>                    
                </div>
                <div className='col-md-4 order-2 order-md-3'>
                    <div className='statsSection__Title-Container-Right'>
                        <h2 className='statsSection__Title2'>don't</h2>
                        <h2 className='statsSection__Title3'>lie</h2>
                    </div>
                    <div className='statsSection__Title-Container-Right-Mobile'>
                        <h2 className='statsSection__Title2'>don't </h2> 
                        <h2 className='statsSection__Title3'> lie</h2>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='statsSection__Text-MainContainer'>                
                <div className='statsSection__Text-Container'>
                        <h3 className='statsSection__Text1'>
                          98%  
                        </h3>
                        <h3 className='statsSection__Text2'>
                            On-Time Delivery
                        </h3>
                    </div>
                    <div className='statsSection__Text-Container'>
                        <h3 className='statsSection__Text1'>
                            50+
                        </h3>
                        <h3 className='statsSection__Text2'>
                            Enterprise<br /> Brands Served
                        </h3>
                    </div>
                    <div className='statsSection__Text-Container'>
                        <h3 className='statsSection__Text1'>
                            10k+
                        </h3>
                        <h3 className='statsSection__Text2'>
                            Assets Created
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StatsSection 