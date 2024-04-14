import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    const handleLogout = () => {
      setUser(null);
      navigate('/login');
    };


  return (
        <nav className="bg-transparent py-4 fixed top-0 w-full z-50 backdrop-blur-md shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img src="logo.png" alt="Upaj LOGO" className="h-8 w-8 mr-2 ms-6" />
              <span className="text-white text-lg font-bold font-hindi">Upaj</span>
            </Link>
    
            <div className="hidden md:flex items-center me-6">
              <Link href="/about" className="text-white hover:text-gray-300 me-6">About</Link>
              <Link to="/subsidies" className="text-white hover:text-gray-300 me-6">Subsidies</Link>
              <Link to="/marketplace" className="text-white hover:text-gray-300 me-6">Marketplace</Link>
              <a href="/#footer" className="text-white hover:text-gray-300 me-6">Contact</a>
              {user ? (
                <button onClick={handleLogout} className="text-white hover:text-gray-300 me-6">{user.fullname}</button>
              ) : (
                <>
                <Link to="/login" className="text-white hover:text-gray-300 me-6">Login</Link>
                <Link to="/signup" className="text-white hover:text-gray-300 me-6">Sign Up</Link>
                </>
              )}
              
          

              
            </div>
    
            <div className="md:hidden">
              <button className="text-white focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      )
}

export default Navbar