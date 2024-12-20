import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<header className="bg-green-500 flex items-center justify-between px-4 py-2">
  <img src="" alt="Logo" className="h-10 w-auto" />

  <nav className="flex items-center space-x-4">
    <ul className="hidden md:flex space-x-6 text-white">
      <li className="hover:text-green-200 cursor-pointer">Home</li>
      <li className="hover:text-green-200 cursor-pointer">Menu</li>
      <li className="hover:text-green-200 cursor-pointer">Services</li>
      <li className="hover:text-green-200 cursor-pointer">Offers</li>
    </ul>

    <div className="flex items-center space-x-4">
      <img src="" alt="Search" className="h-6 w-6 cursor-pointer" />
      <img src="" alt="Buy" className="h-6 w-6 cursor-pointer" />
      <button className="bg-white text-green-500 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition">
        Contact
      </button>
    </div>
  </nav>
</header>



    <section>
      <div className="text">
        <h1>Dive into Delights Of Delectable Food </h1>
        <p>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>

        <div className="option">
          <button>Order Now</button>
          <button>Watch Video</button>
          <button><img src="" alt="play" /></button>
        </div>

      </div>
    </section>
    </>
  )
}

export default App
