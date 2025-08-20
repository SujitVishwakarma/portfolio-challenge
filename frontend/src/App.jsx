import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="w-full min-h-screen bg-[#0F0F0F] text-white">
      <Navbar />
      <main className="pt-20"> 
        <Outlet />
        <Footer/>
      </main>
    </div>
  )
}

export default App
