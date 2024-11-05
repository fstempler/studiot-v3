import './navbar.css';
//images
import logo from '../../assets/studiot-logo.svg';
import { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navbarRef = useRef(null);
    const collapseButtonRef = useRef(null);    
    const location = useLocation();

    useEffect(() => {
        const navbar = navbarRef.current;        
        const sections = document.querySelectorAll('.active-background');

        const observerOptions = {
            root: null,
            threshold: 0.10,
        };

        const observer = new IntersectionObserver((entries) => 
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navbar.classList.remove('dark-nav');
                } else {
                    navbar.classList.add('dark-nav');
                }
            }), observerOptions
        );

        sections.forEach((section) => {
            observer.observe(section);
        });
        return () => observer.disconnect();
    }, []);   

    if (location.hash) {
        let elem = document.getElementById(location.hash.slice(1));
        if (elem) {
            elem.scrollIntoView({ behavior: "smooth" });
        }
    
    }

    return (
        <div className='navbar__MainContainer'>
            <nav className="navbar navbar-expand-lg navbar__Container fixed-top navbar-dark" ref={navbarRef}>
                <div className="container-fluid">
                    
                    <Link className="navbar-brand" to="/">
                        <img src={logo} className='navbar__Logo' alt='Studio T Logo' />
                    </Link>
                
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                        ref={collapseButtonRef} 
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" role="button" to={{pathname: "/", hash: "#pricingSection"}}>Services</Link>                                
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/ourWork">Our Work</Link>
                            </li>         
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/caseStudies">Case Studies</Link>
                            </li>  
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/careers">Careers</Link>                                
                            </li>  
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/pricing">Pricing</Link>
                            </li> 
                        </ul>
                    
                        <div className="d-lg-none mt-3">
                            <Link to="/contact"><button className="contactusbtn w-50" type="button">Contact Us</button></Link>
                        </div>
                    </div>
                
                    <div className="d-none d-lg-block">
                        <Link to="/contact"><button className="contactusbtn" type="button">Contact Us</button></Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
