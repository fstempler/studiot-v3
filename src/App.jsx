import './App.css'
//components
import Navbar from './Components/Navbar/Navbar'
import { createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider, Route } from 'react-router-dom'
//Pages
import Home from './pages/Home'

const Root = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
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
