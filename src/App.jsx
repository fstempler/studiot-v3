import './App.css'
//components
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { useEffect } from 'react'
import { createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider, Route, useLocation } from 'react-router-dom'
//Pages
import Home from '../src/Pages/Home'
import OurWork from './Pages/OurWork'
import CaseStudies from './Pages/CaseStudies'
import Careers from './Pages/Careers'
import Pricing from './Pages/Pricing'
import Contact from './Pages/Contact'
import Calendly from './Pages/Calendly'
import WwsCaseStudy from './Pages/WwsCaseStudy'


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname])
  return null;
}

const Root = () => {
  return (
    <>
    <Navbar />
    <ScrollToTop />
    <Outlet />
    <Footer />
    </>
  )
}

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />      
      <Route path="/ourWork" element={<OurWork />} />
      <Route path="/caseStudies" element={<CaseStudies />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/calendly" element={<Calendly />} />
      <Route path="/wwsCaseStudy" element={<WwsCaseStudy />} />
    </Route>
  )
);

function App() {
  

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
