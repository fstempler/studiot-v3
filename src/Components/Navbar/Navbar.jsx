import './navbar.css'
//images
import logo from '../../assets/studiot-logo.svg'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar__MainContainer fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo} className='navbar__Logo' alt='Studio T Logo'/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Services</a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#"> Our Work</a>
                        </li>         
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Case Studies</a>
                        </li>  
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Careers</a>
                        </li>  
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Pricing</a>
                        </li>  
                    </ul>
      
                </div>
                <div>
                    <button className="contactusbtn" type="button">Contact Us</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar