import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Subsidies from './components/Subsidies'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext'
import MarketplaceDetails from './components/MarketplaceDetails'
import SellerPage from './components/SellerPage'  
import ProductView from './components/ProductView'
import About from './components/About'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {
  return (
    <>
    <UserContextProvider>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/subsidies" element={<Subsidies />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/marketplace" element={<MarketplaceDetails />} />
        <Route path="/seller" element={<SellerPage />} />
        <Route path="/product/:productId" element={<ProductView />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </UserContextProvider>
    </>
  )
}

export default App
