import { useState } from 'react'
import w from './assets/woman.png'
import b from './assets/back.png'
import p from './assets/play.png'
import bag from './assets/bag.png'
import search from './assets/search.png'
import logo from './assets/logo.png'

function App() {

  return (
    <>

    <header className="flex items-center justify-between px-60 py-10">
      <img src={logo} alt="Logo" className="h-24 w-auto mr-10" />

      <nav className="flex">
        <ul className="hidden md:flex space-x-32">
          <li className="hover:text-yellow-300 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer">Menu</li>
          <li className="hover:text-yellow-300 cursor-pointer">Services</li>
          <li className="hover:text-yellow-300 cursor-pointer">Offers</li>
        </ul>

        <div className="flex items-center pl-80 justify-evenly w-53 gap-12">
          <img src={search} alt="Search" className="h-6 w-6 cursor-pointer" />
          <img src={bag} alt="Buy" className="h-6 w-6 cursor-pointer" />
          <button className="bg-yellow-300 text-black px-4 py-2 rounded-3xl hover:bg-yellow-300 hover:text-white transition w-52">
            Contact
          </button>
        </div>
      </nav>
    </header>



    <section className="flex  items-center justify-evenly gap-10" style={{ height: '60vh' }}>
      <div className="">
        <h1 className="text-5xl text-b font-black pb-10">Dive into Delights <br></br> Of Delectable 
          <span className="text-yellow-300"> Food </span>
        </h1>
        <p className='pb-10'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>

        <div className="gap-10 flex">
          <button className='bg-yellow-400 p-3 rounded-3xl text-white font-bold w-48 shadow-xl hover:bg-yellow-300 transition-colors'>
            Order Now
          </button>
          <button className='font-bold hover:shadow-yellow-200'>Watch Video</button>
          <button className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-xl hover:shadow-yellow-100">
            <img 
              src={p} 
              alt="play" 
              className="w-10"
            />
          </button>

        </div>

      </div>


      <div className='flex relative h-3/4'>
        <img src={b} alt="" className=''/>
        <img src={w} alt="" className='absolute'/>
      </div>




    </section>



    <section className='text-center'>
      
      <h3 className=' font-bold text-red-400 mb-6'>CUSTOMER FAVORITES</h3>
      <h1 className='font-bold text-5xl mb-16'>Popular Catagories</h1>
    


      <div className='flex justify-center gap-10'>
        <div>
          <img src="" alt="Hamburger" />
          <p>Main Dish</p>
          <p>86 dishes</p>
        </div>

        <div>
          <img src="" alt="Hamburger" />
          <p>Main Dish</p>
          <p>86 dishes</p>
        </div>
      </div>
    </section>

    <section className='pl-40'>
      <p className='font-bold text-red-400'>SPECIAL DISHES</p>
      <div className='flex'>
        <h1 className='font-bold text-5xl'>Standout Dishes <br></br> From Our Menu</h1>

        <div className='gap-10 justify-end flex ml-auto mr-80'>
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </div>

      <div className='flex gap-10'>
        <div>
          <img src="" alt="Hamburger" />
          <p>Main Dish</p>
          <p>86 dishes</p>
        </div>

        <div>
          <img src="" alt="Hamburger" />
          <p>Main Dish</p>
          <p>86 dishes</p>
        </div>

        <div>
          <img src="" alt="Hamburger" />
          <p>Main Dish</p>
          <p>86 dishes</p>
        </div>

      </div>

    </section>
    </>
  )
}

export default App
