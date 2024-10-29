import './App.css'
//components
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

import { createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider, Route } from 'react-router-dom'
//Pages
import Home from '../src/Pages/Home'
import Services from './Pages/Services'
import OurWork from './Pages/OurWork'
import CaseStudies from './Pages/CaseStudies'
import Careers from './Pages/Careers'
import Pricing from './Pages/Pricing'
import Contact from './Pages/Contact'

const Root = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/ourWork" element={<OurWork />} />
      <Route path="/caseStudies" element={<CaseStudies />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
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
