import './brandSection.css'
//images
import amazon from '../../assets/brands/amazon.png'
import hinge from '../../assets/brands/hinge.png'
import craigslist from '../../assets/brands/craigslist.png'
import wework from '../../assets/brands/wework.png'
import absolut from '../../assets/brands/absolut.png'
import amaran from '../../assets/brands/amaran.png'
import footlocker from '../../assets/brands/footlocker.png'
import aputure from '../../assets/brands/aputure.png'

import stella from '../../assets/brands/stella.png'
import proclaim from '../../assets/brands/proclaim.png'
import ellen from '../../assets/brands/ellen.png'
import Brooks from '../../assets/brands/Brooks.png'
import benjaminMoore from '../../assets/brands/benjaminMoore.png'
import sohoHouse from '../../assets/brands/sohoHouse.png'
import express from '../../assets/brands/express.png'

const BrandSection = () => {
    return (
        <>
        <div className='brandSection__MainContainer' id='brandSection'>
            <div className='brandSection__Title-Container container'>
                <h2 className='brandSection__Title'>Top Brands, Bold Designs. We Deliver for the Best</h2>
            </div>
            <div className='brandSection__BrandsContainer'>                                
                <img src={amazon} className='brandSection__Logo' alt='Amazon Logo' />
                <img src={hinge} className='brandSection__Logo' alt='Hinge Logo' />
                <img src={craigslist} className='brandSection__Logo' alt='Craigslist Logo' />
                <img src={wework} className='brandSection__Logo' alt='WeWork Logo' />
                <img src={absolut} className='brandSection__Logo' alt='Absolut Logo' />
                <img src={amaran} className='brandSection__Logo' alt='Amaran Logo' />
                <img src={footlocker} className='brandSection__Logo' alt='Foot Locker Logo' />
                <img src={aputure} className='brandSection__Logo' alt='Aputure Logo' />

                <img src={stella} className='brandSection__Logo' alt='Stella Logo' />
                <img src={proclaim} className='brandSection__Logo' alt='Proclaim Logo' />
                <img src={ellen} className='brandSection__Logo' alt='Ellen Logo' />
                <img src={Brooks} className='brandSection__Logo' alt='Brooks Brothers Logo' />
                <img src={benjaminMoore} className='brandSection__Logo' alt='Benjamin Moore Logo' />
                <img src={sohoHouse} className='brandSection__Logo' alt='Soho House Logo' />
                <img src={express} className='brandSection__Logo' alt='Express Logo' />

            </div>
            
        </div>
        <div className='wave-background'>  </div>
        </>
    )
}

export default BrandSection